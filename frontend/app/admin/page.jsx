'use client'
import { useState } from "react";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blueTheme-light">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full transform transition duration-500 hover:scale-105">
        <h1 className="text-2xl font-bold text-blueTheme text-center mb-6">
          Admin Login
        </h1>
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blueTheme focus:outline-none"
            />
          </div>
          {/* Password Input with Show/Hide Button */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blueTheme focus:outline-none pr-12"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 px-3 py-2 mt-6 text-sm font-medium text-blueTheme focus:outline-none hover:text-blueTheme-dark"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blueTheme text-white rounded-md shadow-md hover:bg-blueTheme-dark focus:ring-2 focus:ring-blueTheme-dark focus:ring-opacity-50 transition"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Forgot your password?{" "}
          <a href="#" className="text-blueTheme font-medium hover:underline">
            Reset it here
          </a>
        </p>
      </div>
    </div>
  );
}
