import React from "react";
import PlayStation from "./Assets/PS.png";
import WC from "./Assets/WC.png";

export default function NewArrival() {
  return (
    <section className="newArrival bg-zinc-100 flex flex-col gap-[5px] pb-20 px-20">
      <div className="flex items-center text-red-500 mt-[140px] gap-[10px]  font-semibold">
        <div className="bg-red-500 w-[20px] h-[40px] rounded-[3px]"></div>
        <div>
          <p>Featured</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[36px] font-semibold">New Arrival</h1>
        </div>
        <div className="bg-red-500 rounded-[5px] w-[159px] h-[56px] text-white flex justify-center">
          <button>View All</button>
        </div>
      </div>
      <div className="flex justify-between mt-[60px]">
        <div>
          <img src={PlayStation} alt="" />
        </div>
        <div>
          <img src={WC} alt="" />
        </div>
      </div>
    </section>
  );
}
