import { Checkbox, Label, TextInput, Radio } from "flowbite-react";
import Button from "../../components/common/Button";
import { useState } from "react";
import { useSignup } from "../../hooks/auth/useSignup";
import { sanitizePhone } from "../../utils/helpers";

export default function SignupForm() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({ role: "Customer" });
  const { signup, loading } = useSignup();

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      ...formData,
      name: formData.name.trim(),
      phoneNumber: sanitizePhone(formData.phoneNumber),
    };

    await signup(body);
    console.log(body);
  }

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Fullname" />
        </div>
        <TextInput
          id="name"
          name="name"
          placeholder="Fullname"
          required
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          name="email"
          required
          type="email"
          onChange={handleChange}
        />
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Your Phone Number" />
        </div>
        <TextInput
          id="phoneNumber"
          addon="+233 "
          name="phoneNumber"
          required
          type="text"
          onChange={handleChange}
        />
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
          id="password"
          name="password"
          required
          type="password"
          onChange={handleChange}
        />
      </div>
      <fieldset className="flex max-w-md gap-4" id="radio">
        <legend className="mb-4">Choose your Role</legend>
        <div className="flex items-center gap-2">
          <Radio
            defaultChecked
            id="Customer"
            name="role"
            value="Customer"
            onChange={handleChange}
          />
          <Label htmlFor="customer">Customer</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="Driver"
            name="role"
            value="Driver"
            onChange={handleChange}
          />
          <Label htmlFor="Driver">Driver</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="Vendor"
            name="role"
            value="Vendor"
            onChange={handleChange}
          />
          <Label htmlFor="Vendor">Vendor</Label>
        </div>
      </fieldset>

      <div className="flex items-center gap-2">
        <Checkbox
          checked={agreed}
          color="purple"
          onChange={() => setAgreed((prev) => !prev)}
          id="remember"
        />
        <Label htmlFor="remember">Agree to terms and conditions</Label>
      </div>
      <Button
        disabled={!agreed}
        color="purple"
        text="Create my account"
        type="submit"
        loading={loading}
      />
    </form>
  );
}
