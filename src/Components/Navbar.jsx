import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBabyCarriage, FaBars, FaTimes } from "react-icons/fa";

// Assuming these assets are correctly imported or will be available
import arrow from "./Assets/arrow.svg";
import search from "./Assets/search.svg";
import heart from "./Assets/heart.svg";
import cart from "./Assets/cart.svg";
import user from "./Assets/user.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // The main container is now a standard <header> tag for semantic markup
  return (
    <header className="w-full shadow-md z-50">
      {/* Black Top Bar */}
      <nav className="bg-black text-gray-300 flex justify-center items-center py-1 sm:px-10">
        <p className="text-start text-[12px]   sm:text-center  w-70 sm:w-full sm:py-3">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link
            to="/shop"
            className="font-medium ml-2 underline cursor-pointer hover:text-zinc-300 transition duration-300 whitespace-nowrap"
          >
            Shop Now
          </Link>
        </p>
        <div className=" sm:right-10 flex  items-center text-xs sm:text-sm">
          <select className="bg-black text-gray-300 cursor-pointer appearance-none outline-none ">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
          <img
            src={arrow}
            alt="Language selector arrow"
            className="text-gray-300 w-3 h-3 pointer-events-none"
          />
        </div>
      </nav>

      <hr />

      {/* Main White Navbar */}
      <nav className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-10 max-w-full mx-auto">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-2">
          <FaBabyCarriage className="text-red-500 text-2xl sm:text-3xl" />
          <h1 className="text-xl sm:text-2xl font-bold whitespace-nowrap">
            SavvySho<span className="text-red-500">pp</span>er
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex text-base gap-8 xl:gap-12">
          <li className="cursor-pointer hover:text-zinc-800 transition duration-300">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-zinc-800 transition duration-300">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              About
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-zinc-800 transition duration-300">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-zinc-800 transition duration-300">
            <NavLink
              to="/sign_up"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>

        {/* Search, Icons & Mobile Menu Button */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Bar (Hidden on small screens) */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-zinc-100 p-2 sm:p-3 pr-10 text-sm border-none outline-none rounded focus:ring-2 focus:ring-red-500 w-40 lg:w-64"
            />
            <img
              src={search}
              alt="Search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer w-5 h-5"
            />
          </div>

          {/* Icons Group */}
          <div className="flex items-center gap-3 sm:gap-4">
            <NavLink to="/likes" aria-label="View liked items">
              <img
                src={heart}
                alt="Likes"
                className="cursor-pointer w-6 h-6 hover:opacity-75 transition"
              />
            </NavLink>
            <NavLink to="/cart" aria-label="View shopping cart">
              <img
                src={cart}
                alt="Cart"
                className="cursor-pointer w-6 h-6 hover:opacity-75 transition"
              />
            </NavLink>
            <NavLink to="/edit_profile" aria-label="Edit profile">
              <img
                src={user}
                alt="User profile"
                className="cursor-pointer w-6 h-6 rounded-full hover:ring-2 hover:ring-red-500 transition"
              />
            </NavLink>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            aria-label="Toggle navigation menu"
            className="lg:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Conditionally rendered) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } w-full bg-white`}
      >
        <div className="flex flex-col p-4 space-y-2 border-t border-zinc-200">
          <div className="relative md:hidden w-full mb-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-zinc-100 p-2 pr-10 text-sm border-none outline-none rounded focus:ring-2 focus:ring-red-500 w-full"
            />
            <img
              src={search}
              alt="Search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer w-5 h-5"
            />
          </div>
          <NavLink
            to="/home"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 hover:bg-zinc-100 rounded px-2"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 hover:bg-zinc-100 rounded px-2"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 hover:bg-zinc-100 rounded px-2"
          >
            Contact
          </NavLink>
          <NavLink
            to="/sign_up"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 hover:bg-zinc-100 rounded px-2"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
}
