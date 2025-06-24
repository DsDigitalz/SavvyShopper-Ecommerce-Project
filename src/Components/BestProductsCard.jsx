import React from "react";
// import gamepad from './Assets/Game.png'
import heart from './Assets/heart.png'
import eye from './Assets/eye.png'

export default function BestProductsCard() {
  return (
    <div>
      <div className="bg-zinc-100 w-[230px] h-[302px] flex  flex-col rounded shadow-lg relative  hover:scale-102 transition duration-300">
        <div className="flex justify-center mt-8">
          {/* <img src="" alt="" /> */}
        </div>
        {/* <div className="bg-black w-full h-[50px] flex items-center justify-center gap-3  active:bg-zinc-700">
                    <div>
                      <img src={cart} alt="" />
                    </div>
                    <p className="text-white text-[12px]">Add To Cart</p>
                  </div> */}

        <div className="bg-white mt-auto h-[100px] flex flex-col gap-[8px] px-3">
          <p className="font-medium mt-[12px]">HAVIT HV-G92 Gamepad</p>
          <p className="text-red-500 flex gap-[12px]">
            $120 <span className="line-through text-zinc-400">$160</span>
          </p>
        </div>
        <div className="flex items-center justify-center bg-red-500 text-white w-[55px] p-1 text-[12px] rounded absolute top-3 left-3">
          <p>-35%</p>
        </div>
        <div className="absolute top-2 right-3 active:shadow-lg rounded-full">
          <img src={heart} alt="" />
        </div>
        <div className="absolute top-12 right-3 active:shadow-lg rounded-full">
          <img src={eye} alt="" />
        </div>
      </div>
    </div>
  );
}
