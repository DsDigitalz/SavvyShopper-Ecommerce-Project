import React from "react";
import ServicesFour from "./Assets/ServicesFour.png";
import ServicesFive from "./Assets/ServicesFive.png";
import ServicesSix from "./Assets/ServicesSix.png";
import ServicesSeven from "./Assets/ServicesSeven.png";

export default function Sellers() {
  return (
    <section className="sellers pt-20 md:pt-32 px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-10">
      {/* Card 1 */}
      <div className="flex flex-col items-center w-full sm:w-[260px] gap-6 border border-zinc-400 py-7 rounded-xl shadow-sm">
        <img src={ServicesFour} alt="Sellers Active" className="w-16 sm:w-20" />
        <div className="flex flex-col items-center gap-1">
          <p className="text-3xl font-semibold">10.5K</p>
          <p className="text-sm text-gray-600 text-center">
            Sellers active on our site
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center w-full sm:w-[260px] gap-6 bg-red-500 text-white py-7 rounded-xl shadow-sm">
        <img
          src={ServicesFive}
          alt="Monthly Product Sale"
          className="w-16 sm:w-20"
        />
        <div className="flex flex-col items-center gap-1">
          <p className="text-3xl font-semibold">33K</p>
          <p className="text-sm text-center">Monthly Product Sale</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center w-full sm:w-[260px] gap-6 border border-zinc-400 py-7 rounded-xl shadow-sm">
        <img src={ServicesSix} alt="Customer Active" className="w-16 sm:w-20" />
        <div className="flex flex-col items-center gap-1">
          <p className="text-3xl font-semibold">45.5K</p>
          <p className="text-sm text-gray-600 text-center">
            Customers active on our site
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center w-full sm:w-[260px] gap-6 border border-zinc-400 py-7 rounded-xl shadow-sm">
        <img
          src={ServicesSeven}
          alt="Annual Gross Sale"
          className="w-16 sm:w-20"
        />
        <div className="flex flex-col items-center gap-1">
          <p className="text-3xl font-semibold">25K</p>
          <p className="text-sm text-gray-600 text-center">
            Annual gross sale on our site
          </p>
        </div>
      </div>
    </section>
  );
}
