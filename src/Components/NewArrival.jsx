import React from "react";
import PlayStation from "./Assets/PS.png";
import WC from "./Assets/WC.png";

export default function NewArrival() {
  return (
    // Semantic markup: <section> is the main container. Added mx-auto and max-w-7xl for better centering.
    <section className="bg-zinc-100 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* 1. Header: Tag and Title */}
        <header className="flex flex-col gap-2 mt-20 sm:mt-[140px]">
          {/* Tag: "Featured" */}
          <div className="flex items-center text-red-500 gap-[10px] font-semibold">
            <div className="bg-red-500 w-[20px] h-[40px] rounded-[3px]"></div>
            <p>Featured</p>
          </div>

          {/* Title and Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Semantic markup: <h2> for the section title */}
            <h2 className="text-2xl sm:text-[36px] font-semibold">
              New Arrival
            </h2>
            {/* View All Button (Original styling preserved) */}
            <div className="bg-red-500 rounded-[5px] w-full md:w-[170px] h-[56px] text-white flex justify-center items-center">
              <button className="h-full w-full">View All</button>
            </div>
          </div>
        </header>

        {/* 2. Content Blocks (Responsive Grid) */}
        <div className="mt-[60px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Block 1: PlayStation (Uses article for semantic structure, and inline style for background image) */}
          <article
            className="relative bg-black text-white p-6 md:p-12 rounded-lg col-span-1 lg:col-span-1 min-h-[500px] flex flex-col justify-end"
            style={{
              backgroundImage: `url(${PlayStation})`,
              backgroundSize: "contain",
              backgroundPosition: "right bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Content over image */}
            <div className="max-w-md">
              <h3 className="text-4xl font-semibold mb-4">PlayStation 5</h3>
              <p className="mb-6 text-sm opacity-80">
                Experience next-gen gaming with lightning-fast loading and
                deeper immersion.
              </p>
              {/* Semantic markup: <a> for CTA */}
              <a
                href="#"
                className="border-b border-white pb-1 text-sm font-medium hover:opacity-80 transition"
              >
                Shop Now
              </a>
            </div>
          </article>

          {/* Group for the smaller items (stacked on all screens) */}
          <div className="grid grid-cols-1 gap-8">
            {/* Block 2: Wireless Charger */}
            <article
              className="relative bg-black text-white p-6 md:p-12 rounded-lg min-h-[245px] flex flex-col justify-end"
              style={{
                backgroundImage: `url(${WC})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Content over image */}
              <div className="max-w-xs">
                <h3 className="text-2xl font-semibold mb-2">
                  Wireless Charger
                </h3>
                <p className="mb-4 text-xs opacity-80">
                  Fast charging for all your devices, cord-free convenience.
                </p>
                <a
                  href="#"
                  className="border-b border-white pb-1 text-sm font-medium hover:opacity-80 transition"
                >
                  Shop Now
                </a>
              </div>
            </article>

            {/* Placeholder Block 3 (For symmetrical layout) */}
            <article
              className="relative bg-black text-white p-6 md:p-12 rounded-lg min-h-[245px] flex flex-col justify-end opacity-70"
              style={{ backgroundColor: "#2d3748" }}
            >
              <div className="max-w-xs">
                <h3 className="text-2xl font-semibold mb-2">Cool Gadgets</h3>
                <p className="mb-4 text-xs opacity-80">
                  Discover the latest tech accessories.
                </p>
                <a
                  href="#"
                  className="border-b border-white pb-1 text-sm font-medium hover:opacity-80 transition"
                >
                  Explore
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
