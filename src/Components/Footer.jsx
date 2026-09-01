import React from "react";
import { Link } from "react-router-dom";
import scan from "./Assets/scan.png";
import socials from "./Assets/socials.png";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white mt-16 sm:mt-24 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Brand & Subscribe */}
          <div className="space-y-4">
            <Link to="/home" className="text-2xl font-black text-white hover:text-red-500 transition tracking-tight inline-block">
              SavvySho<span className="text-red-500">pp</span>er
            </Link>
            <p className="text-base font-semibold text-gray-200">Subscribe</p>
            <p className="text-gray-400 text-xs sm:text-sm">Get 10% off your first order</p>

            <form onSubmit={(e) => e.preventDefault()} className="relative mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-2.5 px-3 text-xs sm:text-sm text-white placeholder-gray-500 outline-none focus:border-red-500 transition"
              />
            </form>
          </div>

          {/* Column 2: Support */}
          <div className="space-y-3">
            <p className="text-base font-bold text-gray-200">Support</p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm hover:text-white transition">
              <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
            </p>
            <p className="text-gray-400 text-xs sm:text-sm hover:text-white transition">
              <a href="tel:+88015888889999">+88015-88888-9999</a>
            </p>
          </div>

          {/* Column 3: Account */}
          <div className="space-y-3">
            <p className="text-base font-bold text-gray-200">Account</p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <Link to="/edit_profile" className="hover:text-red-400 transition">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-red-400 transition">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-red-400 transition">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/likes" className="hover:text-red-400 transition">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-red-400 transition">
                  Shop Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Link */}
          <div className="space-y-3">
            <p className="text-base font-bold text-gray-200">Quick Links</p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <Link to="/privacy-policy" className="hover:text-red-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="hover:text-red-400 transition">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-red-400 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Download App */}
          <div className="space-y-3">
            <p className="text-base font-bold text-gray-200">Download App</p>
            <p className="text-gray-400 text-xs">Save $3 with App New User Only</p>
            <Link to="/download-app" className="block group">
              <img
                src={scan}
                alt="Download App"
                className="w-40 sm:w-44 h-auto object-contain group-hover:opacity-90 transition rounded-lg"
              />
            </Link>
            <img src={socials} alt="Social Media Links" className="w-36 h-auto object-contain pt-1 opacity-80" />
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-zinc-800 py-4 text-center text-xs text-gray-500">
        <p>© Copyright SavvyShopper 2026. All rights reserved</p>
      </div>
    </footer>
  );
}
