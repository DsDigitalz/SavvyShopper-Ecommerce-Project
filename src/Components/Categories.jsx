import React from "react";
import iconsArrowLeft from "./Assets/iconsArrowLeft.svg";
import iconsArrowRight from "./Assets/iconsArrowRight.svg";
import cellphone from "./Assets/cellphone.png";
import computer from "./Assets/computer.png";
import smartwatch from "./Assets/smartwatch.png";
import camera from "./Assets/camera.png";
import headphone from "./Assets/headphone.png";
import gamepad from "./Assets/gamepad.png";

export default function Categories() {
  return (
    <section className="bg-zinc-100 categories flex flex-col gap-[10px] px-20">
      <div className="bg-white rounded p-5 flex items-center text-red-500 mt-[140px] gap-[10px]  font-semibold">
        <div className="bg-red-500 w-[20px] h-[40px] rounded-[3px]"></div>
        <div>
          <p>Categories</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded flex items-center justify-between">
        <h1 className="text-[36px] font-semibold">Browse By Category</h1>

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
      </div>
      {/* Icons */}
      <div className="bg-white rounded flex items-center justify-between w-full p-20 mt-[60px] border-b-1 border-zinc-300 mb-[70px]">
        <div className="flex justify-center border-1 border-zinc-400 w-[170px] h-[145px]">
          <div className="mt-[25px] flex flex-col items-center gap-[16px]">
            <img src={cellphone} alt="" />
            <p>Phones</p>
          </div>
        </div>
        <div className="flex justify-center border-1 border-zinc-400 w-[170px] h-[145px]">
          <div className="mt-[25px] flex flex-col items-center gap-[16px]">
            <img src={computer} alt="" />
            <p>Computers</p>
          </div>
        </div>
        <div className="flex justify-center border-1 border-zinc-400 w-[170px] h-[145px]">
          <div className="mt-[25px] flex flex-col items-center gap-[16px]">
            <img src={smartwatch} alt="" />
            <p>Smartwatch</p>
          </div>
        </div>
        <div className="flex justify-center bg-red-500 w-[170px] h-[145px]">
          <div className="mt-[25px] flex flex-col items-center gap-[16px]">
            <img src={camera} alt="" />
            <p className="text-white">Camera</p>
          </div>
        </div>

        <div className="flex justify-center border-1 border-zinc-400 w-[170px] h-[145px]">
          <div className="mt-[25px] flex flex-col items-center gap-[16px]">
            <img src={headphone} alt="" />
            <p>Headphone</p>
          </div>
        </div>
        <div className="flex justify-center border-1 border-zinc-400 w-[170px] h-[145px]">
          <div className="mt-[25px] flex flex-col items-center gap-[16px]">
            <img src={gamepad} alt="" />
            <p>Gaming</p>
          </div>
        </div>
      </div>
    </section>
  );
}
