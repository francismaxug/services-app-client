import VerifyPhoneForm from "../../features/authentication/VerifyPhoneForm";
import verifyPhoneImage from "../../assets/images/verifyPhoneImage.png";
export default function VerifyPhone() {
  return (
    <div className="h-screen px-2 py-4">
      <div className="flex justify-between px-8 lg:px-16 h-full  ">
        <div className="h-full w-[70%] ">
          <img
            src={verifyPhoneImage}
            alt="forgot password"
            className="bg-contain w-full h-full bg-no-repeat "
          />
        </div>

        <div className="w-full flex justify-center mt-[10vh] ">
          <div className="md:w-[70%] pt-[12vh] ">
            <header className="text-center flex flex-col gap-4 mb-10 lg:mb-16">
              <h1 className="text-4xl text-gray-900">Phone verification</h1>
              <p className="text-gray-600">
                Please enter the 6 digit code that was sent to your mobile
                number.
              </p>
            </header>
            <VerifyPhoneForm />
          </div>
        </div>
      </div>
    </div>
  );
}
