import React from "react";
import iconsArrowLeft from "./Assets/iconsArrowLeft.svg";
import iconsArrowRight from "./Assets/iconsArrowRight.svg";
// Assuming these assets are correctly imported
import cellphone from "./Assets/cellphone.png";
import computer from "./Assets/computer.png";
import smartwatch from "./Assets/smartwatch.png";
import camera from "./Assets/camera.png";
import headphone from "./Assets/headphone.png";
import gamepad from "./Assets/gamepad.png";

// Category data for clean mapping
const categoriesData = [
  { name: "Phones", image: cellphone, active: false },
  { name: "Computers", image: computer, active: false },
  { name: "Smartwatch", image: smartwatch, active: false },
  { name: "Camera", image: camera, active: true }, // The active/highlighted one
  { name: "Headphone", image: headphone, active: false },
  { name: "Gaming", image: gamepad, active: false },
];

// Reusable Category Card Component
const CategoryCard = ({ name, image, active }) => {
  const baseClasses =
    "flex flex-col items-center justify-center p-4 border border-zinc-400 rounded-md transition duration-300 transform hover:scale-105 min-w-[120px] sm:min-w-[140px] md:min-w-0 h-[145px]";
  const activeClasses = "bg-red-500 border-red-500 text-white shadow-lg";
  const inactiveClasses =
    "bg-white border-zinc-300 text-gray-800 hover:bg-red-50 hover:border-red-500";

  return (
    <div
      className={
        active
          ? `${baseClasses} ${activeClasses}`
          : `${baseClasses} ${inactiveClasses}`
      }
    >
      <img src={image} alt={name} className="w-10 h-10 mb-4" />
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
};

export default function Categories() {
  return (
    // Semantic markup: <section> is the main container
    <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* 1. Section Header: "Categories" Tag */}
      <div className="flex items-center text-red-500 gap-2 mb-4 mt-10 sm:mt-16">
        <div className="bg-red-500 w-4 h-8 sm:w-5 sm:h-10 rounded-[3px]"></div>
        <p className="font-semibold text-sm sm:text-base">Categories</p>
      </div>

      {/* 2. Title and Navigation Arrows */}
      <div className="flex items-center justify-between border-b border-zinc-300 pb-5 mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-gray-900 whitespace-nowrap">
          Browse By Category
        </h2>

        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button
            aria-label="Previous category"
            className="bg-zinc-100 hover:bg-zinc-200 transition duration-300 rounded-full p-2 sm:p-3"
          >
            <img src={iconsArrowLeft} alt="Arrow Left" className="w-4 h-4" />
          </button>
          <button
            aria-label="Next category"
            className="bg-zinc-100 hover:bg-zinc-200 transition duration-300 rounded-full p-2 sm:p-3"
          >
            <img src={iconsArrowRight} alt="Arrow Right" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. Category Icons Grid/Carousel */}
      <div className="w-full pb-8">
        {/* Mobile/Tablet: Horizontal scroll with fixed card size */}
        <div className="flex overflow-x-scroll lg:overflow-x-hidden pb-4 space-x-4 lg:space-x-0 snap-x snap-mandatory scroll-smooth">
          {/* Desktop/Large Screens: Switches to a proper grid layout */}
          <div className="grid grid-flow-col lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-8 justify-start lg:justify-between w-full">
            {categoriesData.map((category) => (
              <div key={category.name} className="flex-shrink-0 snap-start">
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
