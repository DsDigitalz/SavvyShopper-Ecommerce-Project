import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
// import googleIcon from "./Assets/IconGoogle.png";
// import eyeOpen from "./Assets/eye-open.svg";
// import eyeClosed from "./Assets/eye-closed.svg";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function validateForm() {
    let newErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
      isValid = false;
    } else if (formData.fullName.trim().split(" ").length < 2) {
      newErrors.fullName = "Please enter your first and last name.";
      isValid = false;
    }

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
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  function handleRegister(e) {
    e.preventDefault();

    if (validateForm()) {
      const storedUser = JSON.parse(localStorage.getItem("userAccount"));
      if (storedUser && storedUser.email === formData.email) {
        toast.error("An account with this email already exists.");
        return;
      }

      localStorage.setItem("userAccount", JSON.stringify(formData));
      toast.success("Account created successfully!");
      navigate("/log_in");
    } else {
      toast.error("Please correct the form errors.");
    }
  }

  function updateFormData(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  return (
    <div className="signup flex flex-col lg:flex-row items-center justify-center min-h-screen gap-10 lg:gap-20 px-6 sm:px-10 lg:px-20 py-10">
      {/* IMAGE SECTION */}
      <div className="w-full flex-1 lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <img
          src="./iphone.png"
          alt="Sign up illustration"
          className="w-3/4 sm:w-2/3 lg:w-full"
        />
      </div>

      {/* FORM SECTION */}
      <form
        onSubmit={handleRegister}
        className="flex-1 flex flex-col shadow-xl rounded-lg p-6 sm:p-10 lg:p-16 w-full lg:w-1/2 bg-white"
      >
        <div className="flex flex-col items-center mb-8 text-center">
          <h1 className="font-semibold text-2xl sm:text-3xl mb-2">
            Create an account
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Enter your details below
          </p>
        </div>

        {/* FORM INPUTS */}
        <div className="flex flex-col space-y-4 mb-6">
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className={`h-10 w-full border-b-2 p-1 outline-none text-sm sm:text-base ${
                errors.fullName
                  ? "border-red-500"
                  : "border-gray-300 focus:border-red-500"
              }`}
              value={formData.fullName}
              onChange={updateFormData}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

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
              {/* <img src={showPassword ? eyeClosed : eyeOpen} alt="toggle" className="w-5 h-5" /> */}
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
          Create Account
        </button>

        <button className="flex items-center justify-center gap-3 border-2 border-gray-300 py-3 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
          {/* <img src={googleIcon} alt="Google" className="w-5 h-5" /> */}
          <span>Sign up with Google</span>
        </button>

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <NavLink to="/login" className="text-red-500 hover:underline">
            Log In
          </NavLink>
        </p>
      </form>
    </div>
  );
}
