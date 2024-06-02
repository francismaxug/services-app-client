import { useState } from "react";
import { Checkbox, Label, TextInput } from "flowbite-react";
import Button from "../../components/common/Button";
import { useLogin } from "../../hooks/auth/useLogin";
import { sanitizePhone } from "../../utils/helpers";

export default function DefaultForm() {
  const [formData, setFormData] = useState({});
  const { login, loading } = useLogin();

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      ...formData,
      phoneNumber: sanitizePhone(formData.phoneNumber),
    };
    await login(body);
  }

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Your Phone Number" />
        </div>
        <TextInput
          id="phoneNumber"
          name="phoneNumber"
          addon="+233"
          placeholder="200 000 000"
          required
          type="tel"
          pattern="[0-9]*"
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput
          id="password1"
          name="password"
          required
          type="password"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button color="purple" text="Login" type="submit" loading={loading} />
    </form>
  );
}
