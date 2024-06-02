import ForgotPasswordForm from "../../features/authentication/ForgotPasswordForm";
import forgotPasswordImage from "../../assets/images/forgotPasswordImage.png";
export default function ForgotPassword() {
  return (
    <div className="h-screen px-2 py-4">
      <div className="flex justify-between px-8 lg:px-16 h-full  ">
        <div className="h-full w-[70%] ">
          <img
            src={forgotPasswordImage}
            alt="forgot password"
            className="bg-contain w-full h-full bg-no-repeat "
          />
        </div>

        <div className="w-full flex justify-center mt-[10vh] ">
          <div className="md:w-[70%] pt-[12vh] ">
            <header className="text-center flex flex-col gap-4 mb-10 lg:mb-16">
              <h1 className="text-4xl text-gray-900">Forgot password?</h1>
              <p className="text-gray-600">
                Don’t worry! It’s happens. Please enter the email address
                associated with your account.
              </p>
            </header>
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
}
