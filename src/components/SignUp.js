import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New User:", { name, email, password });
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Create an Account 🚀
        </h2>

        {/* Social Media Sign-Up */}
        <div className="flex justify-center gap-4 mb-5">
          <button className="flex items-center gap-2 px-4 py-2 w-1/2 bg-gray-100 text-gray-700 rounded-lg shadow-md hover:bg-gray-200 transition">
            <FaGoogle className="text-red-500" /> Sign up with Google
          </button>
          <button className="flex items-center gap-2 px-4 py-2 w-1/2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            <FaFacebook /> Sign up with Facebook
          </button>
        </div>

        <p className="text-center text-gray-500 mb-4">or sign up with email</p>

        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="accent-blue-500" required />
            <span className="ml-2">
              I agree to the{" "}
              <Link to="#" className="text-blue-500 hover:underline">
                Terms & Conditions
              </Link>
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
