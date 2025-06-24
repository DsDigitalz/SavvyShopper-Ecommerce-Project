import React from "react";
import girls from "./Assets/girls.png";

export default function OurStory() {
  return (
  
      <section className="ourStory flex items-center px-20 gap-[75px] pt-[100px]">
        <div className="w-[525px]">
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
        <div>
          <img src={girls} alt="" />
        </div>
      </section>
   
  );
}
