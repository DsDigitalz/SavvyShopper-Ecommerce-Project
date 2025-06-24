import React from "react";
import iconsArrowLeft from "./Assets/iconsArrowLeft.svg";
import iconsArrowRight from "./Assets/iconsArrowRight.svg";
import FlashsalesCard from "./FlashsalesCard";
// import cart from "./Assets/Cart1.png";

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
    name: "S-Series Comfort Chair ",
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
    name: "HyperX Cloud II Gaming Headset",
    price: "$100",
    originalPrice: "$120",
    discount: "-17%",
    image: "./hyperx-cloud-ii.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 10,
    name: "SteelSeries Rival 600 Gaming Mouse",
    price: "$90",
    originalPrice: "$110",
    discount: "-18%",
    image: "./steelseries-rival-600.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 11,
    name: "BenQ ZOWIE XL2411P Gaming Monitor",
    price: "$250",
    originalPrice: "$300",
    discount: "-17%",
    image: "./benq-zowie-xl2411p.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 12,
    name: "Turtle Beach Stealth 600 Headset",
    price: "$120",
    originalPrice: "$150",
    discount: "-20%",
    image: "./turtle-beach-stealth-600.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 13,
    name: "Acer Predator Helios 300 Laptop",
    price: "$1200",
    originalPrice: "$1400",
    discount: "-14%",
    image: "./acer-predator-helios-300.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 14,
    name: "MSI Gaming Desktop PC",
    price: "$1500",
    originalPrice: "$1800",
    discount: "-17%",
    image: "./msi-gaming-desktop.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 15,
    name: "Razer Kraken X Lite Headset",
    price: "$50",
    originalPrice: "$70",
    discount: "-29%",
    image: "./razer-kraken-x-lite.png",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  ,
];

export default function FlashSales() {
  return (
    <section className="bg-zinc-100 flashsales rounded flex flex-col gap-[10px] px-20">
      <div className="bg-white p-5 rounded flex items-center text-red-500 mt-20 gap-[10px]  font-semibold">
        <div className="bg-red-500 w-[20px] h-[40px] rounded-[3px]"></div>
        <div>
          <p>Today's</p>
        </div>
      </div>

      <div className="bg-white rounded p-5 flex items-center justify-between">
        <h1 className="text-[36px] font-semibold">Flash Sales</h1>
        <div className="flex items-center gap-[17px]">
          <div className="flex flex-col">
            <p className="font-semibold text-[12px]">Days</p>
            <h1 className="text-[32px] font-bold">03</h1>
          </div>
          <div className="text-3xl mt-3 text-red-500">:</div>
          <div className="flex flex-col">
            <p className="font-semibold text-[12px]">Hours</p>
            <h1 className="text-[32px] font-bold">23</h1>
          </div>
          <div className="text-3xl mt-3 text-red-500">:</div>
          <div className="flex flex-col">
            <p className="font-semibold text-[12px]">Minutes</p>
            <h1 className="text-[32px] font-bold">19</h1>
          </div>

          <div className="text-3xl mt-3 text-red-500">:</div>
          <div className="flex flex-col">
            <p className="font-semibold text-[12px]">Seconds</p>
            <h1 className="text-[32px] font-bold">56</h1>
          </div>
        </div>
        <div className="flex gap-[10px]">
          <img
            src={iconsArrowLeft}
            alt=""
            className=" bg-zinc-100 rounded-full p-3"
          />
          <img
            src={iconsArrowRight}
            alt=""
            className="bg-zinc-100 rounded-full p-3"
          />
        </div>
        {/* Products */}
      </div>
      <div className="bg-white w-full p-10 mt-10">
        <section className="grid grid-cols-5 gap-10 justify-items-center">
          {products.map(function (product) {
            return <FlashsalesCard key={product.id} cardDetails={product} />;
          })}
        </section>
      </div>

      <div className="bg-red-500 rounded-[5px] w-[234px] h-[56px] text-white flex justify-center mx-auto mt-[60px]">
        <button>View All Products</button>
      </div>
    </section>
  );
}
