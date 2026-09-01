import React from "react";
import man from "./Assets/man.png";
import woman from "./Assets/woman.png";
import man2 from "./Assets/man2.png";
import handles from "./Assets/handles.png";
import Frame from "./Assets/Frame.png";

export default function Staff() {
  const staffMembers = [
    {
      id: 1,
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: man,
    },
    {
      id: 2,
      name: "Emma Watson",
      role: "Managing Director",
      image: woman,
    },
    {
      id: 3,
      name: "Ben Smith",
      role: "Product Designer",
      image: man2,
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-100">
      {/* Header */}
      <div className="flex items-center text-red-500 gap-2 mb-3">
        <div className="bg-red-500 w-4 sm:w-5 h-8 sm:h-9 rounded-[4px]" />
        <p className="font-bold text-sm sm:text-base tracking-wide">Our Team</p>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-10">
        Executive Leadership
      </h2>

      {/* Staff Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {staffMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center text-center bg-white rounded-3xl border border-zinc-200 p-6 shadow-xs hover:shadow-md transition-all duration-300 w-full max-w-sm group"
          >
            <div className="w-full bg-zinc-50 rounded-2xl overflow-hidden p-4 mb-5 flex items-center justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-56 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-xl font-bold text-gray-900 mb-1">{member.name}</p>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">{member.role}</p>
            <img src={handles} alt="social handles" className="w-24 opacity-80 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </section>
  );
}
