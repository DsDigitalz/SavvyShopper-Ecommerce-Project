import React from 'react'
import ServicesFour from "./Assets/ServicesFour.png";
import ServicesFive from "./Assets/ServicesFive.png";
import ServicesSix from "./Assets/ServicesSix.png";
import ServicesSeven from "./Assets/ServicesSeven.png";
export default function Sellers() {
  return (
 
      <section className="sellers pt-[170px] flex justify-between px-20">
        <div className="flex items-center flex-col w-[260px] gap-[24px] border-1 border-zinc-400 py-7">
          <div className="flex">
            <img src={ServicesFour} alt="" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[32px] font-semibold">10.5K</p>
            <p className="text-[14px]">Sellers active our site</p>
          </div>
        </div>
        <div className="flex items-center flex-col w-[260px] gap-[24px] bg-red-500 text-white py-7">
          <div className="flex">
            <img src={ServicesFive} alt="" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[32px] font-semibold">33K</p>
            <p className="text-[14px]">Monthly Produduct Sale</p>
          </div>
        </div>
        <div className="flex items-center flex-col w-[260px] gap-[24px] border-1 border-zinc-400 py-7">
          <div className="flex">
            <img src={ServicesSix} alt="" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[32px] font-semibold">45.5k</p>
            <p className="text-[14px]">Customer active in our site</p>
          </div>
        </div>
        <div className="flex items-center flex-col w-[260px] gap-[24px] border-1 border-zinc-400 py-7">
          <div className="flex">
            <img src={ServicesSeven} alt="" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[32px] font-semibold">25K</p>
            <p className="text-[14px]">Annual gross sale in our site</p>
          </div>
        </div>
      </section>
    
  )
}
