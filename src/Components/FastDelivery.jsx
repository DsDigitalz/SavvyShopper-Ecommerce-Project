import React from "react";
import Services from "./Assets/Services.png";
import ServicesTwo from "./Assets/ServicesTwo.png";
import ServicesThree from "./Assets/ServicesThree.png";
export default function FastDelivery() {
  return (
    <section className="mt-[140px] flex justify-center gap-[88px] px-20 ">
      <div className="flex items-center flex-col w-[260px] gap-[24px]">
        <div className="flex">
          <img src={Services} alt="" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-[20px] font-semibold">FREE AND FAST DELIVERY</p>
          <p className="text-[14px]">Free delivery for all orders over $140</p>
        </div>
      </div>
      <div className="flex items-center flex-col w-[260px] gap-[24px]">
        <div className="flex">
          <img src={ServicesTwo} alt="" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-[20px] font-semibold">24/7 CUSTOMER SERVICE</p>
          <p className="text-[14px]">Friendly 24/7 customer support</p>
        </div>
      </div>
      <div className="flex items-center flex-col w-[260px] gap-[24px]">
        <div className="flex">
          <img src={ServicesThree} alt="" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-[20px] font-semibold">MONEY BACK GUARANTEE</p>
          <p className="text-[14px]">We reurn money within 30 days</p>
        </div>
      </div>
    </section>
  );
}
