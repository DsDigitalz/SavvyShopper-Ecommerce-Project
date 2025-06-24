import React from "react";
import banner from "./Assets/banner.jpg";
import rightArrow from "./Assets/rightArrow.svg";
export default function Banner() {
  return (
    <div className="banner">
      <div className=" w-[100%] flex pb-10 justify-between items-center">
        {/* Aside section */}
        <div className="w-[30%] border-r-1 border-zinc-300 py-3">
          <div className=" flex flex-col gap-[18px] mt-[40px] pl-20 py-10">
            <p className="flex gap-[51px]">
              Women's Fashion <img src={rightArrow} alt="" />
            </p>
            <p className="flex gap-[80px]">
              Men's Fashion <img src={rightArrow} alt="" />
            </p>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>Groceries & Pets</p>
            <p> Health & Beauty</p>
          </div>
        </div>
        <div className="mt-[35px] w-full px-9 pr-20">
          <img src={banner} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}
