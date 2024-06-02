import LoginForm from "../../features/authentication/LoginForm";
import loginImage from "../../assets/images/loginImage.png";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="h-screen px-2 py-4">
      <div className="flex justify-between px-8 lg:px-16 h-full  ">
        <div className="h-full w-[70%] ">
          <img
            src={loginImage}
            alt="login"
            className="bg-contain w-full h-full bg-no-repeat "
          />
        </div>

        <div className="w-full flex justify-center ">
          <div className="md:w-[70%] pt-[12vh] ">
            <header className="text-center flex flex-col gap-4 mb-10 lg:mb-16">
              <h1 className="text-4xl text-gray-900">Login</h1>
              <p className="text-gray-600">
                Welcome back! Please enter your details.
              </p>
            </header>
            <LoginForm />

            <div className="mt-4 flex flex-col items-center gap-4">
              <Link
                to="/forgotpassword"
                className="text-purple-700 font-medium"
              >
                Forgot password?
              </Link>
              <p className="">or</p>
              <p>
                First time here?{"  "}
                <Link to="/signup">
                  <span className="font-medium text-purple-700 tracking-wide ml-1">
                    Sign up for free
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
