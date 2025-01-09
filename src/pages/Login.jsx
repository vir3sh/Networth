import React from "react";
import networth from "../assets/networth.svg";
import secondimage from "../assets/secondimage.png";
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full  rounded-lg  p-6">
        {/* Images */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={networth}
            alt="Logo 1"
            className="w-[10rem] h-[7rem] mb-2"
          />
          <img src={secondimage} alt="Logo 2" className="w-[10rem] h-[7rem]" />
        </div>

        {/* Login Form */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[blue] text-white py-2 rounded-lg hover:bg-blue-900 transition duration-300"
          >
            Continue
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-[blue] hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
