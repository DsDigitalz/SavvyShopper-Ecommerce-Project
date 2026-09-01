import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "./Assets/banner.jpg";
import rightArrow from "./Assets/rightArrow.svg";

export default function Banner() {
  const navigate = useNavigate();

  // Sidebar category list matching original layout and routing to dedicated category pages
  const categories = [
    { name: "Women's Fashion", path: "/category/womens-fashion", hasArrow: true },
    { name: "Men's Fashion", path: "/category/mens-fashion", hasArrow: true },
    { name: "Electronics", path: "/category/electronics", hasArrow: false },
    { name: "Home & Lifestyle", path: "/category/home-lifestyle", hasArrow: false },
    { name: "Medicine", path: "/category/medicine", hasArrow: false },
    { name: "Sports & Outdoor", path: "/category/sports-outdoor", hasArrow: false },
    { name: "Groceries & Pets", path: "/category/groceries-pets", hasArrow: false },
    { name: "Health & Beauty", path: "/category/health-beauty", hasArrow: false },
  ];

  return (
    <section className="pt-28 sm:pt-32 lg:pt-36 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Category Sidebar (Contained in a polished panel) */}
        <aside className="hidden lg:flex lg:col-span-3 flex-col justify-between bg-white border border-zinc-200/80 rounded-2xl p-5 shadow-sm">
          <div className="pb-3 border-b border-zinc-100 mb-2">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Top Categories</h3>
          </div>
          <ul className="flex flex-col gap-1 text-sm font-medium text-gray-700">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => navigate(category.path)}
                className="hover:text-red-500 hover:bg-red-50/50 px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer flex justify-between items-center group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  {category.name}
                </span>
                {category.hasArrow && (
                  <img
                    src={rightArrow}
                    alt="Right arrow"
                    className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition duration-200"
                  />
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Banner Promotional Container */}
        <div className="w-full lg:col-span-9 flex flex-col justify-center">
          <div
            className="w-full relative group cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 shadow-md hover:shadow-xl transition-all duration-300 bg-zinc-950 flex items-center min-h-[300px] sm:min-h-[360px] lg:min-h-[390px]"
            onClick={() => navigate("/category/electronics")}
          >
            <img
              src={banner}
              alt="Promotional Banner"
              className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl group-hover:scale-103 transition-transform duration-700"
            />

            {/* Subtle Gradient Vignette on Left */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent rounded-2xl pointer-events-none" />

            {/* Clean Hero Text Content */}
            <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-sm sm:max-w-md flex flex-col items-start text-white">
              <span className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-xs">
                Featured Deal
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-2 sm:mb-3">
                Flagship Tech <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-red-400">
                  & Studio Sound
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 mb-6 max-w-xs leading-relaxed">
                Up to 30% off premium smartphones, headphones, and wireless accessories.
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/category/electronics");
                }}
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition duration-200 cursor-pointer active:scale-95 group-hover:translate-x-1"
              >
                <span>Shop Now</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
