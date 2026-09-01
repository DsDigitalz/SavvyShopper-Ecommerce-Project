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
    <div className="pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[85vh] flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
        {/* IMAGE SECTION (6 cols) */}
        <div className="hidden lg:flex lg:col-span-6 justify-center">
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-10 flex items-center justify-center w-full max-w-lg shadow-sm">
            <img
              src="/iphone.png"
              alt="Sign up illustration"
              className="max-h-[420px] object-contain hover:scale-105 transition duration-300"
              onError={(e) => {
                e.target.src = "/bag.png";
              }}
            />
          </div>
        </div>

        {/* FORM SECTION (6 cols) */}
        <form
          onSubmit={handleRegister}
          className="lg:col-span-6 flex flex-col bg-white border border-zinc-200 shadow-sm rounded-3xl p-6 sm:p-12 w-full max-w-lg mx-auto"
        >
          {/* Header */}
          <div className="mb-8 text-left">
            <div className="flex items-center text-red-500 gap-2 mb-2">
              <div className="bg-red-500 w-3.5 h-7 rounded-[3px]" />
              <p className="font-bold text-xs uppercase tracking-wider">Get Started</p>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
              Create an account
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm">
              Join SavvyShopper for exclusive gadgets, deals, and tracking
            </p>
          </div>

          {/* FORM INPUTS */}
          <div className="flex flex-col space-y-4 mb-6">
            {/* Full Name */}
            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1.5">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                className={`w-full p-3.5 bg-zinc-50 rounded-xl outline-none text-xs sm:text-sm border transition ${
                  errors.fullName
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-zinc-200 focus:border-red-500 focus:bg-white"
                }`}
                value={formData.fullName}
                onChange={updateFormData}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                className={`w-full p-3.5 bg-zinc-50 rounded-xl outline-none text-xs sm:text-sm border transition ${
                  errors.email
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-zinc-200 focus:border-red-500 focus:bg-white"
                }`}
                value={formData.email}
                onChange={updateFormData}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1.5">Password (8+ characters)</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a strong password"
                  className={`w-full p-3.5 bg-zinc-50 rounded-xl outline-none pr-10 text-xs sm:text-sm border transition ${
                    errors.password
                      ? "border-red-500 focus:ring-2 focus:ring-red-500"
                      : "border-zinc-200 focus:border-red-500 focus:bg-white"
                  }`}
                  value={formData.password}
                  onChange={updateFormData}
                />
                <button
                  type="button"
                  aria-label="Toggle password visibility"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer text-sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 font-medium">{errors.password}</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3.5 rounded-xl shadow-md transition-all duration-200 mb-4 cursor-pointer text-sm active:scale-98"
          >
            Create Account
          </button>

          <p className="text-center mt-4 text-xs sm:text-sm text-gray-500">
            Already have an account?{" "}
            <NavLink to="/login" className="text-red-500 font-bold hover:underline">
              Log In
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
