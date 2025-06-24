import React from "react";

// import bag from "./Assets/bag.png";
import del from "./Assets/del.png";
import cart from "./Assets/Cart1.png";

export default function WishlistCard({cardDetails}) {
  return (
    <div className=" bg-zinc-100 w-[200px] h-[322px] flex  flex-col shadow-lg rounded relative  hover:scale-102 transition duration-300">
      <div className="flex justify-center">
        <img src={cardDetails.image} alt="" />
      </div>
      <div className="bg-black w-full h-[50px] flex items-center justify-center gap-3  active:bg-zinc-700">
        <div>
          <img src={cart} alt="" />
        </div>
        <p className="text-white text-[12px]">Add To Cart</p>
      </div>

      <div className="bg-white mt-auto h-[110px] flex flex-col gap-[8px] px-3">
        <p className="font-medium mt-[12px] text-[16px]">{cardDetails.name}</p>
        <p className="text-red-500 flex gap-[12px] font-medium text-[16px]">{cardDetails.price} <span className="line-through text-zinc-400">{cardDetails.originalPrice}</span>
        </p>
      </div>
      <div className="flex items-center justify-center bg-red-500 text-white w-[55px] p-1 text-[12px] rounded absolute top-3 left-3">
        <p>-35%</p>
      </div>
      <div className="absolute top-2 right-3 active:shadow-lg rounded-full">
        <img src={del} alt="" />
      </div>
    </div>
  );
}
