import React from "react";
import { useNavigate } from "react-router-dom";

export default function BannerTwo() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-zinc-950 via-neutral-900 to-zinc-900 text-white rounded-3xl overflow-hidden shadow-xl border border-zinc-800">
        <div className="flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 lg:p-14 gap-8">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-lg">
            <span className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-red-500/30">
              Featured Experience
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-4">
              Enhance Your{" "}
              <span className="text-red-500">Digital Life</span>
              <br />
              with Premium Gear
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Shop premium smartphones, laptops, accessories, and wearables at competitive prices with guaranteed authentic products and 1-year warranty.
            </p>
          </div>

          {/* Right Stats & CTA */}
          <div className="flex flex-col items-center lg:items-end gap-6 text-center lg:text-right">
            <div className="flex gap-8 sm:gap-12">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">500+</p>
                <p className="text-zinc-400 text-xs mt-1 font-medium">Products Listed</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">50+</p>
                <p className="text-zinc-400 text-xs mt-1 font-medium">Global Brands</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-red-400">99%</p>
                <p className="text-zinc-400 text-xs mt-1 font-medium">Satisfaction</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/shop")}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-red-500/20 transition-all duration-200 cursor-pointer text-sm active:scale-95"
            >
              Browse Full Catalog &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
