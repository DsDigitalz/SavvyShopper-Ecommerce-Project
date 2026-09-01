import React from "react";
import { useNavigate } from "react-router-dom";
import PlayStation from "./Assets/PS.png";
import WC from "./Assets/WC.png";

export default function NewArrival() {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-100">
      {/* Header */}
      <div className="flex items-center text-red-500 gap-2 mb-3">
        <div className="bg-red-500 w-4 sm:w-5 h-8 sm:h-9 rounded-[4px]" />
        <p className="font-bold text-sm sm:text-base tracking-wide">Featured</p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-gray-900 tracking-tight">
          New Arrival
        </h2>
        <button
          onClick={() => navigate("/shop")}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all duration-200 text-sm cursor-pointer active:scale-98"
        >
          View All Products
        </button>
      </div>

      {/* Arrival Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Big Card — PlayStation */}
        <article
          className="relative bg-zinc-900 text-white p-8 md:p-12 rounded-2xl min-h-[480px] flex flex-col justify-end overflow-hidden shadow-lg group cursor-pointer"
          style={{
            backgroundImage: `url(${PlayStation})`,
            backgroundSize: "60%",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => navigate("/shop?category=smartphones")}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent rounded-2xl" />
          <div className="relative z-10 max-w-xs">
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
              PlayStation 5
            </h3>
            <p className="text-zinc-300 text-sm mb-5 leading-relaxed">
              Experience next-gen gaming with lightning-fast loading and deeper immersion in every world.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/shop?category=smartphones");
              }}
              className="inline-flex items-center gap-2 border-b-2 border-white text-white text-sm font-bold hover:text-red-400 hover:border-red-400 transition duration-200 cursor-pointer"
            >
              Shop Now <span>→</span>
            </button>
          </div>
        </article>

        {/* Right Column: 2 smaller cards */}
        <div className="grid grid-cols-1 gap-6">
          {/* Wireless Charger */}
          <article
            className="relative bg-zinc-900 text-white p-8 md:p-10 rounded-2xl min-h-[220px] flex flex-col justify-end overflow-hidden shadow-lg group cursor-pointer"
            style={{
              backgroundImage: `url(${WC})`,
              backgroundSize: "45%",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => navigate("/shop?category=mobile-accessories")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent rounded-2xl" />
            <div className="relative z-10 max-w-xs">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Wireless Charger</h3>
              <p className="text-zinc-300 text-xs mb-4 leading-relaxed">
                Fast wireless charging for all your devices. No cables, no hassle.
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/shop?category=mobile-accessories");
                }}
                className="inline-flex items-center gap-2 border-b border-white text-white text-xs font-bold hover:text-red-400 hover:border-red-400 transition duration-200 cursor-pointer"
              >
                Shop Now <span>→</span>
              </button>
            </div>
          </article>

          {/* Latest Gadgets */}
          <article
            className="relative bg-gradient-to-br from-zinc-700 to-zinc-900 text-white p-8 md:p-10 rounded-2xl min-h-[220px] flex flex-col justify-end overflow-hidden shadow-lg group cursor-pointer"
            onClick={() => navigate("/shop")}
          >
            <div className="absolute top-4 right-4 text-zinc-600 text-6xl font-black select-none opacity-40">
              🎮
            </div>
            <div className="relative z-10 max-w-xs">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Latest Gadgets</h3>
              <p className="text-zinc-300 text-xs mb-4 leading-relaxed">
                Discover cutting-edge tech accessories, smartwatches, and audio gear curated just for you.
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/shop");
                }}
                className="inline-flex items-center gap-2 border-b border-white text-white text-xs font-bold hover:text-red-400 hover:border-red-400 transition duration-200 cursor-pointer"
              >
                Explore All <span>→</span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
