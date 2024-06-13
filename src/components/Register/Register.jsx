import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Google__G__logo.svg.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { loginWithGooglePopUp, signUpWithEmailAndPassword } =
    useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Confirm parssword do not match!");
    } else {
      signUpWithEmailAndPassword(email, password).then((data) =>
        console.log(data)
      );
    }
  };

  const handleGoogleSignIn = () => {
    loginWithGooglePopUp().then((data) => {
      if (data.user.email) {
        toast("Login Success!");
        setError("");
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
        <h2 className="text-2xl mb-6 text-center font-semibold">Register</h2>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
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
        <div className="mb-6">
          <label className="block mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-3 mt-0">{error}</p>}
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Register
        </button>
        <p className="text-md mt-3 text-center">
          Already have an account?
          <Link className="text-blue-500 font-bold" to="/login">
            Login here
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

export default Register;
