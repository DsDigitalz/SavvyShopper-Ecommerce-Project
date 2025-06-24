import React from "react";
import BestProductsCard from "./BestProductsCard";
const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    discount: "-35%",
    image: "/images/gamepad.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 2,
    name: "Logitech G502 Hero Mouse",
    price: 80,
    originalPrice: 100,
    discount: "-20%",
    image: "/images/g502.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 3,
    name: "Razer BlackWidow Keyboard",
    price: 150,
    originalPrice: 200,
    discount: "-25%",
    image: "/images/blackwidow.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 3,
    name: "Razer BlackWidow Keyboard",
    price: 150,
    originalPrice: 200,
    discount: "-25%",
    image: "/images/blackwidow.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 3,
    name: "Razer BlackWidow Keyboard",
    price: 150,
    originalPrice: 200,
    discount: "-25%",
    image: "/images/blackwidow.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 3,
    name: "Razer BlackWidow Keyboard",
    price: 150,
    originalPrice: 200,
    discount: "-25%",
    image: "/images/blackwidow.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 3,
    name: "Razer BlackWidow Keyboard",
    price: 150,
    originalPrice: 200,
    discount: "-25%",
    image: "/images/blackwidow.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 3,
    name: "Razer BlackWidow Keyboard",
    price: 150,
    originalPrice: 200,
    discount: "-25%",
    image: "/images/blackwidow.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 3,
    name: "Razer BlackWidow Keyboard",
    price: 150,
    originalPrice: 200,
    discount: "-25%",
    image: "/images/blackwidow.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 3,
    name: "Razer BlackWidow Keyboard",
    price: 150,
    originalPrice: 200,
    discount: "-25%",
    image: "/images/blackwidow.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 3,
    name: "Razer BlackWidow Keyboard",
    price: 150,
    originalPrice: 200,
    discount: "-25%",
    image: "/images/blackwidow.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 3,
    name: "Razer BlackWidow Keyboard",
    price: 150,
    originalPrice: 200,
    discount: "-25%",
    image: "/images/blackwidow.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 3,
    name: "Razer BlackWidow Keyboard",
    price: 150,
    originalPrice: 200,
    discount: "-25%",
    image: "/images/blackwidow.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 3,
    name: "Razer BlackWidow Keyboard",
    price: 150,
    originalPrice: 200,
    discount: "-25%",
    image: "/images/blackwidow.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
  {
    id: 3,
    name: "Razer BlackWidow Keyboard",
    price: 150,
    originalPrice: 200,
    discount: "-25%",
    image: "/images/blackwidow.jpg",
    heartIcon: "/icons/heart.svg",
    eyeIcon: "/icons/eye.svg",
    category: "gaming",
  },
];

export default function BestProducts() {
  return (
    <section className="bestProducts bg-zinc-100 rounded  bestProducts flex flex-col gap-[10px] pb-20 px-20">
      <div className="bg-white rounded p-5 flex items-center text-red-500 mt-[140px] gap-[10px]  font-semibold">
        <div className="bg-red-500 w-[20px] h-[40px] rounded-[3px]"></div>
        <div>
          <p>This Month</p>
        </div>
      </div>
      <div className="bg-white rounded p-5 flex items-center justify-between">
        <div>
          <h1 className="text-[36px] font-semibold">Best Selling Products</h1>
        </div>
        <div className="bg-red-500 rounded-[5px] w-[159px] h-[56px] text-white flex justify-center">
          <button>View All</button>
        </div>
      </div>
      <div className="bg-white w-full p-[300px] mt-10 rounded ">
        <section className="gri grid-cols-5 justify-items-center gap-10">
          {products.map(function(product){
            return <BestProductsCard key={products.id} cardDetails={product}/>
          })}
        </section>
      </div>
    </section>
  );
}
