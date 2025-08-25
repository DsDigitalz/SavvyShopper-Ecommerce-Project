import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

// Assuming you have these assets in your project
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
      // Retrieve user data from localStorage
      const storedUser = JSON.parse(localStorage.getItem("userAccount"));

      // Basic authentication
      if (
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        toast.success("Logged in successfully!");
        navigate("/home"); // Navigate to the home page or dashboard
      } else {
        toast.error("Invalid email or password.");
      }
    } else {
      toast.error("Please correct the form errors.");
    }
  }

  return (
    <div className="login flex items-center h-screen gap-[100px] px-20">
      <div>
        <img src="./iphone.png" alt="iPhone" />
      </div>

      <form
        onSubmit={handleLogin}
        className="flex flex-col shadow-2xl p-20 w-[50%]"
      >
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-[36px]">Log in to your account</h1>
          <p>Enter your details below</p>
        </div>
        <div className="flex flex-col mt-[48px] my-5">
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
          Log In
        </button>
        <button className="flex items-center justify-center gap-4 border-2 border-zinc-300 p-3 rounded text-zinc-700 hover:bg-zinc-50 transition-colors">
          {/* <img src={googleIcon} alt="Google icon" className="w-6 h-6" /> */}
          <span>Log in with Google</span>
        </button>

        <p className="text-center mt-6 text-sm text-zinc-600">
          Don't have an account?{" "}
          <NavLink to="/sign_up" className="text-red-500 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </form>
    </div>
  );
}