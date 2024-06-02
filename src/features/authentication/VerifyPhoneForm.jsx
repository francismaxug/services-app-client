import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import Button from "../../components/common/Button";
import { toast } from "react-hot-toast";
import { useRoute } from "../../hooks/auth/useRoute";
import { useAuth } from "../../context/AuthContext";
import { useVerifyPhone } from "../../hooks/auth/useVerifyPhone";

export default function VerifyPhoneForm() {
  const [code, setCode] = useState("");

  
  const { verifyPhone, loading } = useVerifyPhone();

  async function handleSubmit(e) {
    e.preventDefault();

    await verifyPhone({ code });
    // if (user) {
    //   toast.success("Logged in successfully");
    //   route(user.role);

    //   if (error) {
    //     toast.error(error);
    //   }
    // }
  }

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="verificationCode" value="Verification code" />
        </div>
        <TextInput
          id="code"
          name="code"
          placeholder="******"
          min="6"
          max="6"
          required
          type="text"
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      <div className="mt-4 mx-auto">
        <p className="text-gray-600 text-center">
          Didn't get code?{"  "}
          <span className="font-medium text-purple-700 tracking-wide ml-1">
            Resend code
          </span>
        </p>
      </div>

      <Button color="purple" text="Verify" type="submit" loading={loading} />
    </form>
  );
}
