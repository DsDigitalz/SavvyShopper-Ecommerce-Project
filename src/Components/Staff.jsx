import React from "react";
import man from "./Assets/man.png";
import woman from "./Assets/woman.png";
import man2 from "./Assets/man2.png";
import handles from "./Assets/handles.png";
import Frame from "./Assets/Frame.png";


export default function Staff() {
  return (
    <div>
      <section className="flex flex-col items-center px-20 mt-[140px] border-1 border-zinc-300 py-7">
        <div className="flex items-center justify-between gap-25">
          <div>
            <img src={man} alt="" />
            <div>
              <p className="text-[32px] font-medium mt-[18px] ">Tom Cruise</p>
              <p className="mb-[16px]">Founder & Chairman</p>
              <img src={handles} alt="" />
            </div>
          </div>
          <div>
            <img src={woman} alt="" />
            <div>
              <p className="text-[32px] font-medium mt-[18px] ">Emma Watson</p>
              <p className="mb-[16px]">Managing Director</p>
              <img src={handles} alt="" />
            </div>
          </div>
          <div>
            <img src={man2} alt="" />
            <div>
              <p className="text-[32px] font-medium mt-[18px] ">Ben Smith</p>
              <p className="mb-[16px]">Product Designer</p>
              <img src={handles} alt="" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-[40px]">
          <img src={Frame} alt="" />
        </div>
      </section>
    </div>
  );
}
