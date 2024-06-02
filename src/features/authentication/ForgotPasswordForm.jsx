import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import Button from "../../components/common/Button";

export default function DefaultForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email);
  }

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="Email" value="Your Email Address" />
        </div>
        <TextInput
          id="email"
          name="email"
          placeholder="name@provider.com"
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <Button color="purple" text="Submit" type="submit" />
    </form>
  );
}
