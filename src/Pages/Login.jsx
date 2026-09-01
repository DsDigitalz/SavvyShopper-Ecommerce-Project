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
    <div className="pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[85vh] flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
        {/* IMAGE SECTION (6 cols) */}
        <div className="hidden lg:flex lg:col-span-6 justify-center">
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-10 flex items-center justify-center w-full max-w-lg shadow-sm">
            <img
              src="/iphone.png"
              alt="iPhone"
              className="max-h-[420px] object-contain hover:scale-105 transition duration-300"
              onError={(e) => {
                e.target.src = "/bag.png";
              }}
            />
          </div>
        </div>

        {/* FORM SECTION (6 cols) */}
        <form
          onSubmit={handleLogin}
          className="lg:col-span-6 flex flex-col bg-white border border-zinc-200 shadow-sm rounded-3xl p-6 sm:p-12 w-full max-w-lg mx-auto"
        >
          {/* Header */}
          <div className="mb-8 text-left">
            <div className="flex items-center text-red-500 gap-2 mb-2">
              <div className="bg-red-500 w-3.5 h-7 rounded-[3px]" />
              <p className="font-bold text-xs uppercase tracking-wider">Welcome Back</p>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
              Log in to SavvyShopper
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm">
              Enter your credentials to access your account & orders
            </p>
          </div>

          {/* Inputs */}
          <div className="flex flex-col space-y-4 mb-6">
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
              <label className="text-xs font-semibold text-gray-700 block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
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
            Log In
          </button>

          {/* Redirect */}
          <p className="text-center mt-4 text-xs sm:text-sm text-gray-500">
            Don't have an account?{" "}
            <NavLink to="/sign_up" className="text-red-500 font-bold hover:underline">
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
