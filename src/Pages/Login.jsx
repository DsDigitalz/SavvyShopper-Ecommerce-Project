import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleRegister(e) {
    console.log(e);
    e.preventDefault();
    console.log(formData);

    if (!formData.email || !formData.password) {
      console.log("All fields required");
      return;
    }

    localStorage.setItem("userAccount", JSON.stringify(formData));
    navigate("/home");
  }

  return (
    <div className="login flex items-center h-screen gap-[100px] px-20">
      <div>
        <img src="./iphone.png" alt="" />
      </div>

      <form
        onSubmit={handleRegister}
        className="flex flex-col shadow-2xl p-20 w-[50%]"
      >
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-[36px]">Login to Exclusive</h1>
          <p>Enter your details below </p>
        </div>
        <div className="flex flex-col mt-[48px] my-5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email or Phone Number"
            className="h-[40px] p-1 mb-3 border-b-1 border-zinc-400 outline-none"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="h-[40px] p-1 mb-3 border-b-1 border-zinc-400 outline-none"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-red-500 p-3 text-white cursor-pointer active:bg-red-600 w-[40%]">
            Login
          </button>
          <p className="text-red-500 cursor-pointer active:text-red-700">
            Forgot Password?
          </p>
        </div>
      </form>
    </div>
  );
}
