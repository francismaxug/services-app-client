import SignupForm from "../../features/authentication/SignupForm";
import signupImage from "../../assets/images/signupImage.png";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="min-h-screen lg:h-screen px-2 py-4">
      <div className="flex justify-between px-8 lg:px-16 h-full  ">
        <div className="h-full w-[70%] hidden lg:block ">
          <img
            src={signupImage}
            alt="login"
            className="bg-contain w-full h-full bg-no-repeat "
          />
        </div>

        <div className="w-full flex justify-center items-center ">
          <div className="md:w-[70%] ">
            <header className="text-center flex flex-col gap-4 mb-5 ">
              <h1 className="text-4xl text-gray-900">Create your account</h1>
              <p className="text-gray-600">
                Hello there! Let's create your account.
              </p>
            </header>
            <SignupForm />

            <div className="mt-4 mx-auto">
              <p className="text-gray-600 text-center">
                Joined us before?{"  "}
                <Link to="/">
                  <span className="font-medium text-purple-700 tracking-wide ml-1">
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
