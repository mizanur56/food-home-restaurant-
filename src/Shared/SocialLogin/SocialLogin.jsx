import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import usePublicAxios from "../../Hooks/usePublicAxios";

const SocialLogin = () => {
  const { setUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const publicAxios = usePublicAxios();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);

        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };

        publicAxios.post("/users", userInfo).then((res) => {
          console.log(res.data);
          setUser(res.user);
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div
      onClick={handleGoogleLogin}
      className="flex  items-center justify-center gap-2 my-2"
    >
      <p className="text-lg font-medium border-b border-gray-800 py-1">
        Sign in with Google
      </p>
      <FaGoogle className="text-red-700 text-xl" />
    </div>
  );
};

export default SocialLogin;
