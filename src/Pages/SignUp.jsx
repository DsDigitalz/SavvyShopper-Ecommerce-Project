import React, { useState } from "react";
// import iphone from "./Assets/iphone.png";
// import googleIcon from "./Assets/IconGoogle.png";
import { NavLink, useNavigate } from "react-router";

export default function SignUp() {
  const navigate = useNavigate();
  // create a function to store user information
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  // update user info
  function updateFormData(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // prevent event default
  function handleRegister(e) {
    console.log(e);
    e.preventDefault();
    console.log(formData);

    // Verification
    if (!formData.fullName || !formData.email || !formData.password) {
      console.log("All fields required");
      return;
    }

    // Save in global storage
    localStorage.setItem("userAccount", JSON.stringify(formData));

    // Navigate to the login page
    navigate("/login");
  }

  return (
    <div className="signup flex items-center h-screen gap-[100px] px-20">
      <div>
        <img src="./iphone.png" alt="" />
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
            className="h-[40px] p-1 mb-3 border-b-1 border-zinc-400 outline-none"
            value={formData.fullName}
            onChange={updateFormData}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email or Phone Number"
            className="h-[40px] p-1 mb-3 border-b-1 border-zinc-400 outline-none"
            value={formData.email}
            onChange={updateFormData}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="h-[40px] p-1 mb-3 border-b-1 border-zinc-400 outline-none"
            value={formData.password}
            onChange={updateFormData}
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 p-3 mb-[16px] text-white cursor-pointer active:bg-red-600"
        >
          Create Account
        </button>
        <button className=" flex items-center justify-center gap-[16px] border-1 border-zinc-400 p-3 mb-[32px] cursor-pointer active:bg-zinc-100">
          <div>
            <img src="./IconGoogle.png" alt="" />
          </div>
          <div>Sign up with Google </div>
        </button>
        <p className="text-center">
          Already have account?{" "}
          <span className="underline cursor-pointer active:text-zinc-700">
            <NavLink to="/log_in">Log In</NavLink>
          </span>
        </p>
      </form>
    </div>
  );
}
