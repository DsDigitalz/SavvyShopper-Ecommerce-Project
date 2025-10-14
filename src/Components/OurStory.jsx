import React from "react";
import girls from "./Assets/girls.png";

export default function OurStory() {
  return (
  
      <section className="ourStory flex flex-col  justify-center lg:flex-row items-center px-4 lg:px-20 gap-[75px] pt-20 lg:pt-[100px]">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[54px] mb-[40px] font-semibold">Our Story</h1>
          <p className="mb-[24px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="flex-1">
          <img src={girls} alt="" />
        </div>
      </section>
   
  );
}
