import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Google__G__logo.svg.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginWithGooglePopUp } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handleGoogleSignIn = () => {
    loginWithGooglePopUp().then((data) => {
      if (data.user.email) {
        toast("Login Success!");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <Toaster />
      <form
        onSubmit={handleRegister}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl mb-6 text-center font-semibold">Login</h2>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          login
        </button>
        <p className="text-md mt-3 text-center">
          Don't have an account?
          <Link className="text-blue-500 font-bold" to="/register">
            Create here
          </Link>
        </p>
      </form>
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center mt-4 py-3 px-6 bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        <img className="max-w-[35px]" src={img} />{" "}
        <span className="ml-3 font-semibold">Sign in with Google</span>
      </button>
    </div>
  );
};

export default Login;
