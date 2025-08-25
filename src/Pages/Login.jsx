import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // show forgotten password
  // const [showForgottenPassword, setShowForgottenPassword] = useState(false);

  // function toggleShowForgottenPassword() {
  //   setShowForgottenPassword((prevValue) => !prevValue);
  // }

  function handleRegister(e) {
    console.log(e);
    e.preventDefault();
    // Fetching the registered information
    const fetchedUserInfo = localStorage.getItem("userAccount");
    console.log(fetchedUserInfo);

    if (!formData.email || !formData.password) {
      console.log("All fields required");
      toast.error("Pls Provide a Valid Email and Password")
      return;
    }

    // verification
    if (
      formData.email !== fetchedUserInfo.email &&
      formData.password !== fetchedUserInfo.password
    ) {
      toast.error("Invalid Email or Password");
      return;
    }
    // localStorage.setItem("userAccount", JSON.stringify(formData));
    // toast.success('Login Successfully')
    toast("Login Successfully", {
      icon: "✅",
      duration: 5000,
      style: {
        background: "black",
        color: "white",
        padding: "1rem",
      },
    });
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
              setFormData({ ...formData, password: e.target.value })
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
      {/* <button className="border" onClick={toggleShowForgottenPassword}>
        Show forgotten password
      </button> */}
    </div>
  );
}
