import React from "react";
import man from "./Assets/man.png";
import woman from "./Assets/woman.png";
import man2 from "./Assets/man2.png";
import handles from "./Assets/handles.png";
import Frame from "./Assets/Frame.png";

export default function Staff() {
  return (
    <section className="flex flex-col items-center px-6 md:px-12 lg:px-20 mt-20 border border-zinc-300 py-10">
      {/* Staff Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 w-full justify-items-center">
        {/* Staff 1 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={man}
            alt="Tom Cruise"
            className="w-56 sm:w-64 md:w-72 object-contain"
          />
          <p className="text-2xl md:text-[28px] font-medium mt-4">Tom Cruise</p>
          <p className="mb-3 text-gray-500">Founder & Chairman</p>
          <img src={handles} alt="social handles" className="w-28" />
        </div>

        {/* Staff 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={woman}
            alt="Emma Watson"
            className="w-56 sm:w-64 md:w-72 object-contain"
          />
          <p className="text-2xl md:text-[28px] font-medium mt-4">
            Emma Watson
          </p>
          <p className="mb-3 text-gray-500">Managing Director</p>
          <img src={handles} alt="social handles" className="w-28" />
        </div>

        {/* Staff 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={man2}
            alt="Ben Smith"
            className="w-56 sm:w-64 md:w-72 object-contain"
          />
          <p className="text-2xl md:text-[28px] font-medium mt-4">Ben Smith</p>
          <p className="mb-3 text-gray-500">Product Designer</p>
          <img src={handles} alt="social handles" className="w-28" />
        </div>
      </div>

      {/* Frame */}
      <div className="flex justify-center mt-10">
        <img
          src={Frame}
          alt="frame"
          className="w-40 sm:w-48 md:w-56 lg:w-64 object-contain"
        />
      </div>
    </section>
  );
}
