import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

// Assuming you have these assets in your project
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

    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
      isValid = false;
    } else if (formData.fullName.trim().split(" ").length < 2) {
      newErrors.fullName = "Please enter your first and last name.";
      isValid = false;
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
      isValid = false;
    }

    // Validate Password
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  function handleRegister(e) {
    e.preventDefault();

    if (validateForm()) {
      // Step 1: Check if the user already exists in localStorage
      const storedUser = JSON.parse(localStorage.getItem("userAccount"));

      if (storedUser && storedUser.email === formData.email) {
        toast.error("An account with this email already exists.");
        return; // Stop the function here
      }

      // Step 2: Save new user in localStorage
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
    <div className="signup flex items-center h-screen gap-[100px] px-20">
      <div>
        <img src="./iphone.png" alt="iPhone" />
      </div>

      <form
        onSubmit={handleRegister}
        className="flex flex-col shadow-2xl p-20 w-[50%]"
      >
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-[36px]">Create an account</h1>
          <p>Enter your details below </p>
        </div>
        <div className="flex flex-col mt-[48px] my-5">
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Name"
            className={`h-[40px] p-1 mb-1 border-b-2 outline-none ${
              errors.fullName ? "border-red-500" : "border-zinc-400 focus:border-blue-500"
            }`}
            value={formData.fullName}
            onChange={updateFormData}
          />
          {errors.fullName && <p className="text-red-500 text-sm mb-3">{errors.fullName}</p>}

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email or Phone Number"
            className={`h-[40px] p-1 mb-1 border-b-2 outline-none ${
              errors.email ? "border-red-500" : "border-zinc-400 focus:border-blue-500"
            }`}
            value={formData.email}
            onChange={updateFormData}
          />
          {errors.email && <p className="text-red-500 text-sm mb-3">{errors.email}</p>}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className={`h-[40px] p-1 mb-1 border-b-2 w-full outline-none pr-10 ${
                errors.password ? "border-red-500" : "border-zinc-400 focus:border-blue-500"
              }`}
              value={formData.password}
              onChange={updateFormData}
            />
            <span
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {/* <img src={showPassword ? eyeClosed : eyeOpen} alt="toggle password visibility" className="w-5 h-5" /> */}
            </span>
          </div>
          {errors.password && <p className="text-red-500 text-sm mb-3">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="bg-red-500 p-3 mb-4 text-white font-medium rounded hover:bg-red-600 transition-colors"
        >
          Create Account
        </button>

        <button className="flex items-center justify-center gap-4 border-2 border-zinc-300 p-3 rounded text-zinc-700 hover:bg-zinc-50 transition-colors">
          {/* <img src={googleIcon} alt="Google icon" className="w-6 h-6" /> */}
          <span>Sign up with Google</span>
        </button>

        <p className="text-center mt-6 text-sm text-zinc-600">
          Already have an account?{" "}
          <NavLink to="/login" className="text-red-500 hover:underline">
            Log In
          </NavLink>
        </p>
      </form>
    </div>
  );
}