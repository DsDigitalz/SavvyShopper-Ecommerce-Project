import React from "react";
import { useNavigate } from "react-router-dom";
import iconsArrowLeft from "./Assets/iconsArrowLeft.svg";
import iconsArrowRight from "./Assets/iconsArrowRight.svg";

import cellphone from "./Assets/cellphone.png";
import computer from "./Assets/computer.png";
import smartwatch from "./Assets/smartwatch.png";
import camera from "./Assets/camera.png";
import headphone from "./Assets/headphone.png";
import gamepad from "./Assets/gamepad.png";

// Tech Category Data Mapping with API slugs
const categoriesData = [
  { name: "Phones", slug: "smartphones", image: cellphone },
  { name: "Computers", slug: "laptops", image: computer },
  { name: "Smartwatches", slug: "mens-watches", image: smartwatch },
  { name: "Accessories", slug: "mobile-accessories", image: camera },
  { name: "Audio", slug: "sports-accessories", image: headphone },
  { name: "Tablets", slug: "tablets", image: gamepad },
];

export default function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (slug) => {
    navigate(`/shop?category=${slug}`);
  };

  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-100">
      {/* 1. Tag Header */}
      <div className="flex items-center text-red-500 gap-2 mb-3">
        <div className="bg-red-500 w-4 sm:w-5 h-8 sm:h-9 rounded-[4px]"></div>
        <p className="font-bold text-sm sm:text-base tracking-wide">Categories</p>
      </div>

      {/* 2. Title + Navigation Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-gray-900 tracking-tight">
          Browse By Category
        </h2>

        <button
          onClick={() => navigate("/shop")}
          className="text-sm font-bold text-red-500 hover:text-red-600 self-start sm:self-auto flex items-center gap-1.5 transition"
        >
          <span>View All Categories</span>
          <span>&rarr;</span>
        </button>
      </div>

      {/* 3. Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {categoriesData.map((cat) => (
          <div
            key={cat.slug}
            onClick={() => handleCategoryClick(cat.slug)}
            className="flex flex-col items-center justify-center p-6 sm:p-7 border border-zinc-200 hover:border-red-500 rounded-2xl bg-white hover:bg-red-50/40 transition-all duration-300 transform hover:-translate-y-1 shadow-xs hover:shadow-md cursor-pointer group text-center min-h-[140px]"
          >
            <div className="w-12 h-12 mb-3 flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition duration-300"
              />
            </div>
            <p className="text-sm font-bold text-gray-800 group-hover:text-red-500 transition">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
