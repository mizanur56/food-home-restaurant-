import { Link, useNavigate } from "react-router-dom";
import signupImage from "../../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import usePublicAxios from "../../Hooks/usePublicAxios";

const Signup = () => {
  const { createUser, setUser, userProfileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const publicAxios = usePublicAxios();
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => {
        const signUpUser = res.user;
        console.log(signUpUser);
        userProfileUpdate(name, photo).then(() => {
          const userInfo = {
            name: name,
            email: email,
          };
          publicAxios.post("/users", userInfo).then((res) => {
            console.log(res.data);
          });
        });
        setUser({ ...signUpUser, displayName: name, photoURL: photo });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-800 to-blue-900 md:flex items-center justify-center min-h-screen p-4">
      {/* Left Image */}
      <div className="mb-6 lg:mb-0">
        <img
          src={signupImage}
          alt="Hero"
          className="max-w-sm rounded-lg shadow-lg"
        />
      </div>
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-8">
          Create an Account
        </h2>
        <form onSubmit={handleSignupSubmit} className="space-y-6" noValidate>
          <div>
            <label className="block text-indigo-900 font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 transition-all duration-300"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block text-indigo-900 font-semibold mb-2">
              PhotoURL
            </label>
            <input
              type="text"
              name="photo"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 transition-all duration-300"
              placeholder="Your PhotoURL"
              required
            />
          </div>

          <div>
            <label className="block text-indigo-900 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 transition-all duration-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-indigo-900 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 transition-all duration-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <input
            className="w-full bg-indigo-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02]"
            type="submit"
            value="Sign Up"
          />
        </form>
        <div>
          <SocialLogin />
        </div>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?
          <Link
            to={"/login"}
            className="text-indigo-800 font-semibold hover:text-blue-900 transition-colors duration-300"
          >
            {" "}
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
