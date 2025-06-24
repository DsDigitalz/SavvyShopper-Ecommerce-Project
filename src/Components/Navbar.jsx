import React, { useState } from "react";
import arrow from "./Assets/arrow.svg";
import search from "./Assets/search.svg";
import heart from "./Assets/heart.svg";
import cart from "./Assets/cart.svg";
import user from "./Assets/user.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  // const[menu, set]
  return (
    // Black navbar
    <div className="navbar">
      <nav className=" bg-black w-[1440px} h-[55px] text-white flex justify-center items-center text-[14px]">
        <p className="text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-[500] ml-[10px] underline cursor-pointer active:text-zinc-300 transition duration-300">
            ShopNow
          </span>
        </p>
        <div className="ml-[231px] flex gap-2">
          <p>English</p>
          <img src={arrow} alt="" />
        </div>
      </nav>

      {/* {menu === 'home'?<hr />:<></>}   */}

      {/* // White navbar */}
      <nav className="flex justify-between mt-[40px] items-center border-b-1 border-zinc-300 pb-3 px-20">
        <h1 className="text-[24px] font-bold">Exclusive</h1>
        <ul className="flex text-[16px] gap-[48px] ">
          <li className="cursor-pointer hover:text-zinc-800 transition duration-300">
            <NavLink to="/home">Home </NavLink>
          </li>
          <li className="cursor-pointer hover:text-zinc-800 transition duration-300">
            {" "}
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="cursor-pointer hover:text-zinc-800 transition duration-300">
            {" "}
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="cursor-pointer hover:text-zinc-800 transition duration-300">
            {" "}
            <NavLink to="/sign_up">Sign Up</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-[24px]">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-zinc-50 p-3  pr-25 text-[15px] border-1 border-zinc-500 outline-zinc-800 relative"
            />

            <img
              src={search}
              alt=""
              className="absolute top-3 left-[260px] cursor-pointer  active:bg-zinc-200 rounded-full"
            />
          </div>
          <NavLink to="/likes">
            <img
              src={heart}
              alt=""
              className="cursor-pointer active:bg-zinc-100 rounded my-1.5"
            />
          </NavLink>
          <NavLink to="/cart">
            <img
              src={cart}
              alt=""
              className="cursor-pointer  active:bg-zinc-100 rounded-full"
            />
          </NavLink>

          <NavLink to="/edit_profile">
            <img
              src={user}
              alt=""
              className="cursor-pointer active:bg-zinc-100 rounded-full"
            />
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
