import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { loginUser, setUser, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-6 items-center justify-center p-6 bg-gray-100">
      {/* Left Image */}
      <div className="mb-6 lg:mb-0">
        <img
          src={loginImage}
          alt="Hero"
          className="max-w-sm rounded-lg shadow-lg"
        />
      </div>

      {/* Right Login Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-4">
          Sign In
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <input
                type="password"
                id="password"
                name="password"
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
              ></button>
            </div>
          </div>
          {/* captcha */}

          <LoadCanvasTemplate />

          <input
            onBlur={handleValidateCaptcha}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            type="text"
            name="captcha"
            id=""
            placeholder="Type the captcha"
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-red-600 hover:text-red-700">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}

          <input
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white 
            ${
              disabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 focus:ring-red-500"
            }`}
            type="submit"
            disabled={disabled}
            value="Sign in"
          />
        </form>
        <div
          onClick={handleGoogleLogin}
          className="flex  items-center justify-center gap-2 my-2"
        >
          <p className="text-lg font-medium border-b border-gray-800 py-1">
            Sign in with Google
          </p>
          <FaGoogle className="text-red-700 text-xl" />
        </div>
        <p className="text-center text-gray-600 mt-6">
          Do not have an account?
          <Link
            to={"/signup"}
            className="text-indigo-800 font-semibold hover:text-blue-900 transition-colors duration-300"
          >
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
