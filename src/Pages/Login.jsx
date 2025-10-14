import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

// import eyeOpen from "./Assets/eye-open.svg";
// import eyeClosed from "./Assets/eye-closed.svg";
// import googleIcon from "./Assets/IconGoogle.png";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function validateForm() {
    let newErrors = {};
    let isValid = true;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  function updateFormData(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  function handleLogin(e) {
    e.preventDefault();

    if (validateForm()) {
      const storedUser = JSON.parse(localStorage.getItem("userAccount"));

      if (
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        toast.success("Logged in successfully!");
        navigate("/home");
      } else {
        toast.error("Invalid email or password.");
      }
    } else {
      toast.error("Please correct the form errors.");
    }
  }

  return (
    <div className="login flex flex-col lg:flex-row items-center justify-center min-h-screen gap-10 lg:gap-20 px-6 sm:px-10 lg:px-20 py-10 bg-gray-50">
      {/* IMAGE SECTION */}
      <div className="w-full flex-1 lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <img
          src="./iphone.png"
          alt="iPhone"
          className="w-3/4 sm:w-2/3 lg:w-full"
        />
      </div>

      {/* FORM SECTION */}
      <form
        onSubmit={handleLogin}
        className="flex-1 flex flex-col shadow-xl rounded-lg p-6 sm:p-10 lg:p-16 w-full lg:w-1/2 bg-white"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-8 text-center">
          <h1 className="font-semibold text-2xl sm:text-3xl mb-2">
            Log in to your account
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Enter your details below
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col space-y-4 mb-6">
          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              className={`h-10 w-full border-b-2 p-1 outline-none text-sm sm:text-base ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 focus:border-red-500"
              }`}
              value={formData.email}
              onChange={updateFormData}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className={`h-10 w-full border-b-2 p-1 outline-none pr-10 text-sm sm:text-base ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-300 focus:border-red-500"
              }`}
              value={formData.password}
              onChange={updateFormData}
            />
            <span
              className="absolute right-2 top-2.5 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <button
          type="submit"
          className="bg-red-500 text-white font-medium py-3 rounded-md hover:bg-red-600 transition-colors mb-4"
        >
          Log In
        </button>

        <button className="flex items-center justify-center gap-3 border-2 border-gray-300 py-3 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
          {/* <img src={googleIcon} alt="Google" className="w-5 h-5" /> */}
          <span>Log in with Google</span>
        </button>

        {/* Redirect */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <NavLink to="/sign_up" className="text-red-500 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </form>
    </div>
  );
}
