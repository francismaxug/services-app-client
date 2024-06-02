import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import Button from "../../components/common/Button";

export default function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setPasswordMismatch(true);
    }
    setPasswordMismatch(false);

    // rest of logic here
  }

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="New Password" />
        </div>
        <TextInput
          id="password"
          name="password"
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="confirmPassword" value="Confirm new password" />
        </div>
        <TextInput
          id="confirmPassword"
          name="password"
          required
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          color={passwordMismatch ? "failure" : ""}
          helperText={
            passwordMismatch && (
              <>
                <span className="font-medium">Oops! </span>Passwords don't
                match!
              </>
            )
          }
        />
      </div>

      <Button color="purple" text="Submit" type="submit" />
    </form>
  );
}
