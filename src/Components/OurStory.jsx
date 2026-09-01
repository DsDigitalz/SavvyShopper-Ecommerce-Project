import React from "react";
import { Link } from "react-router-dom";
import girls from "./Assets/girls.png";

export default function OurStory() {
  return (
    <section className="pt-28 sm:pt-32 lg:pt-36 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-zinc-500 mb-8 flex items-center gap-2">
        <Link to="/home" className="hover:text-red-500 transition">
          Home
        </Link>
        <span>/</span>
        <span className="font-semibold text-gray-900">About Us</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Story Text (6 cols) */}
        <div className="lg:col-span-6 text-left">
          <div className="flex items-center text-red-500 gap-2 mb-3">
            <div className="bg-red-500 w-4 sm:w-5 h-8 sm:h-9 rounded-[4px]" />
            <p className="font-bold text-sm sm:text-base tracking-wide">Our Mission</p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            Our Story
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
            Launched in 2015, SavvyShopper is South Asia's premier online shopping marketplace with an active presence across multiple regions. Supported by a wide range of tailored marketing, data, and service solutions, SavvyShopper connects over 10,500 verified sellers and 300 top global brands with 3 million satisfied customers.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            SavvyShopper has more than 1 Million products to offer, growing rapidly across smartphones, electronics, computers, and lifestyle gear, ensuring 100% authenticity and swift doorstep delivery.
          </p>
        </div>

        {/* Right Hero Visual (6 cols) */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full overflow-hidden rounded-3xl border border-zinc-200 shadow-sm bg-zinc-50 p-4">
            <img
              src={girls}
              alt="SavvyShopper Story"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

