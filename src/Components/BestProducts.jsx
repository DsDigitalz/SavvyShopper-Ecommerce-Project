import React from "react";
import iconsArrowLeft from "./Assets/iconsArrowLeft.svg";
import iconsArrowRight from "./Assets/iconsArrowRight.svg";
import FlashsalesCard from "./FlashsalesCard"; // Assuming correct component

// --- Product Data ---
const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    originalPrice: "$160",
    discount: "-35%",
    image: "./Game.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: "$960",
    originalPrice: "$1160",
    discount: "-20%",
    image: "./keyboard.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: "$370",
    originalPrice: "$400",
    discount: "-25%",
    image: "/plasma.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: "$375",
    originalPrice: "$400",
    discount: "-25%",
    image: "/chair.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 5,
    name: "Logitech G502 Hero Mouse",
    price: "$80",
    originalPrice: "$100",
    discount: "-20%",
    image: "./logitech-g502.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 6,
    name: "Razer BlackWidow V3 Keyboard",
    price: "$130",
    originalPrice: "$160",
    discount: "-19%",
    image: "./razer-blackwidow.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 7,
    name: "Corsair K95 RGB Mechanical Keyboard",
    price: "$200",
    originalPrice: "$250",
    discount: "-20%",
    image: "./corsair-k95.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 8,
    name: "ASUS ROG Strix Gaming Monitor",
    price: "$300",
    originalPrice: "$400",
    discount: "-25%",
    image: "./asus-rog-monitor.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 9,
    name: "HyperX Cloud Alpha Headset",
    price: "$99",
    originalPrice: "$129",
    discount: "-23%",
    image: "./hyperx-headset.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "audio",
  },
  {
    id: 10,
    name: "Samsung SSD 1TB 870 EVO",
    price: "$79",
    originalPrice: "$99",
    discount: "-20%",
    image: "./samsung-ssd.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "storage",
  },
  {
    id: 11,
    name: "Apple iPad Air (5th Gen)",
    price: "$499",
    originalPrice: "$599",
    discount: "-17%",
    image: "./ipad-air.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "tablet",
  },
  {
    id: 12,
    name: "DJI Mini 3 Pro Drone",
    price: "$750",
    originalPrice: "$900",
    discount: "-16%",
    image: "./dji-drone.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "drone",
  },
  {
    id: 13,
    name: "Google Pixel 8 Pro",
    price: "$899",
    originalPrice: "$999",
    discount: "-10%",
    image: "./pixel-8-pro.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "mobile",
  },
  {
    id: 14,
    name: "Bose QuietComfort Earbuds II",
    price: "$249",
    originalPrice: "$299",
    discount: "-17%",
    image: "./bose-qc.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "audio",
  },
  {
    id: 15,
    name: "Amazon Echo Show 10",
    price: "$199",
    originalPrice: "$249",
    discount: "-20%",
    image: "./echo-show.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "smart-home",
  },
];

// --- Timer Unit ---
const TimerUnit = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <p className="font-semibold text-[10px] sm:text-[12px] text-gray-500">
      {label}
    </p>
    <h1 className="text-xl sm:text-[32px] font-bold leading-none text-gray-900">
      {value}
    </h1>
  </div>
);

// --- Main Component ---
export default function BestProducts() {
  const displayedProducts = products.slice(0, 16);

  return (
    <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex items-center text-red-500 gap-2 mb-4">
        <div className="bg-red-500 w-4 h-8 sm:w-5 sm:h-10 rounded-[3px]" />
        <p className="font-semibold text-sm sm:text-base">Today's</p>
      </div>

      {/* Title + Timer + Arrows */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 sm:mb-10">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 w-full lg:w-auto">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-gray-900 whitespace-nowrap">
            Flash Sales
          </h2>

          <div className="flex items-center gap-2 sm:gap-4 justify-between w-full md:w-auto">
            <TimerUnit label="Days" value="03" />
            <span className="text-xl sm:text-3xl mt-3 text-red-500 font-bold">
              :
            </span>
            <TimerUnit label="Hours" value="23" />
            <span className="text-xl sm:text-3xl mt-3 text-red-500 font-bold">
              :
            </span>
            <TimerUnit label="Minutes" value="19" />
            <span className="hidden xs:flex text-xl sm:text-3xl mt-3 text-red-500 font-bold">
              :
            </span>
            <div className="hidden xs:flex">
              <TimerUnit label="Seconds" value="56" />
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-2 mt-4 lg:mt-0 justify-end w-full lg:w-auto">
          <button
            aria-label="Previous products"
            className="bg-zinc-100 hover:bg-zinc-200 transition rounded-full p-2 sm:p-3"
          >
            <img src={iconsArrowLeft} alt="Arrow Left" className="w-4 h-4" />
          </button>
          <button
            aria-label="Next products"
            className="bg-zinc-100 hover:bg-zinc-200 transition rounded-full p-2 sm:p-3"
          >
            <img src={iconsArrowRight} alt="Arrow Right" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="w-full overflow-x-auto pb-4 scroll-smooth">
        <section className="flex lg:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 justify-start">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[270px] lg:w-full snap-start"
            >
              <FlashsalesCard cardDetails={product} />
            </div>
          ))}
        </section>
      </div>

      {/* View All Button */}
      <div className="w-full flex justify-center mt-8 sm:mt-12 border-t border-zinc-200 pt-8">
        <button className="bg-red-500 hover:bg-red-600 transition rounded py-3 px-10 text-white font-medium text-base w-full max-w-sm">
          View All Products
        </button>
      </div>
    </section>
  );
}
