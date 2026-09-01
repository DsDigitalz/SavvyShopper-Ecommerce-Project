import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

import arrow from "./Assets/arrow.svg";
import search from "./Assets/search.svg";
import heart from "./Assets/heart.svg";
import cart from "./Assets/cart.svg";
import user from "./Assets/user.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full shadow-md z-[100] bg-white fixed top-0 left-0 right-0">
      {/* 🔹 Top Black Announcement Bar */}
      <div className="bg-black text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center text-xs">
          <div className="flex-1 text-center font-light text-[11px] sm:text-xs">
            <span>Flash Sale For All Smartphones & Electronics Accessories - UP TO 50% OFF!</span>
            <Link
              to="/shop"
              className="font-semibold ml-2 underline cursor-pointer hover:text-white transition duration-200 whitespace-nowrap"
            >
              Shop Now
            </Link>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-xs ml-4">
            <select className="bg-black py-0.5 px-1 text-gray-300 cursor-pointer outline-none text-xs">
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
            {/* <img
              src={arrow}
              alt="Language selector"
              className="w-3 h-3 pointer-events-none opacity-70"
            /> */}
          </div>
        </div>
      </div>

      <div className="border-b border-zinc-200 bg-white">
        {/* 🔹 Main Navbar */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3.5 sm:py-4">
          {/* 🔸 Logo Section */}
          <Link to="/home" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="SavvyShopper Logo"
              className="w-9 h-9 md:w-10 md:h-10 object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-xl sm:text-2xl font-black whitespace-nowrap text-gray-900 tracking-tight">
              SavvySho<span className="text-red-500">pp</span>er
            </h1>
          </Link>

          {/* 🔸 Desktop Nav Links */}
          <ul className="hidden lg:flex text-sm xl:text-base gap-8 xl:gap-10 font-medium text-gray-700">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-red-500 font-bold border-b-2 border-red-500"
                      : "hover:text-red-500"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-red-500 font-bold border-b-2 border-red-500"
                      : "hover:text-red-500"
                  }`
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-red-500 font-bold border-b-2 border-red-500"
                      : "hover:text-red-500"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-red-500 font-bold border-b-2 border-red-500"
                      : "hover:text-red-500"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* 🔸 Search & Interactive Icons */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search Bar (Desktop) */}
            <form onSubmit={handleSearchSubmit} className="relative hidden lg:block">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="bg-zinc-100 py-2 px-3 pr-9 text-xs sm:text-sm border border-zinc-200 outline-none rounded-xl focus:ring-2 focus:ring-red-500 focus:bg-white w-44 xl:w-60 transition-all"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-60 hover:opacity-100 transition"
              >
                <img src={search} alt="Search" className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Icons Group */}
            <div className="flex items-center gap-3.5">
              {/* Wishlist Icon */}
              <NavLink
                to="/likes"
                className="relative p-1.5 rounded-lg hover:bg-zinc-100 transition"
                aria-label="View Wishlist"
              >
                <img
                  src={heart}
                  alt="Wishlist"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </NavLink>

              {/* Cart Icon */}
              <NavLink
                to="/cart"
                className="relative p-1.5 rounded-lg hover:bg-zinc-100 transition"
                aria-label="View Cart"
              >
                <img
                  src={cart}
                  alt="Cart"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                    {cartCount}
                  </span>
                )}
              </NavLink>

              {/* Profile Icon */}
              <NavLink
                to="/edit_profile"
                className="p-1 rounded-lg hover:bg-zinc-100 transition"
                aria-label="User Account"
              >
                <img
                  src={user}
                  alt="User Profile"
                  className="w-7 h-7 rounded-full object-cover border border-zinc-300 hover:border-red-400 transition"
                />
              </NavLink>
            </div>

            {/* Hamburger Menu Toggle Button */}
            <button
              aria-label="Toggle navigation menu"
              className="lg:hidden text-xl text-gray-800 p-1.5 rounded-lg hover:bg-zinc-100 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>

      {/* 🔹 Mobile Menu Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } w-full bg-white border-t border-zinc-200`}
      >
        <div className="flex flex-col p-4 space-y-3 font-medium">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative w-full mb-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gadgets, smartphones..."
              className="bg-zinc-100 p-2.5 pr-10 text-sm border border-zinc-200 outline-none rounded-lg w-full"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <img src={search} alt="Search" className="w-4 h-4" />
            </button>
          </form>

          {/* Mobile Links */}
          <NavLink
            to="/home"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 hover:bg-zinc-100 rounded px-3 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 hover:bg-zinc-100 rounded px-3 transition"
          >
            Shop Products
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 hover:bg-zinc-100 rounded px-3 transition"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 hover:bg-zinc-100 rounded px-3 transition"
          >
            Contact
          </NavLink>
          <NavLink
            to="/sign_up"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 hover:bg-zinc-100 rounded px-3 transition text-red-500 font-semibold"
          >
            Sign Up / Login
          </NavLink>
        </div>
      </div>
    </header>
  );
}
