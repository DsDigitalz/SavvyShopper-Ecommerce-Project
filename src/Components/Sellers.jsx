import React from "react";
import ServicesFour from "./Assets/ServicesFour.png";
import ServicesFive from "./Assets/ServicesFive.png";
import ServicesSix from "./Assets/ServicesSix.png";
import ServicesSeven from "./Assets/ServicesSeven.png";

export default function Sellers() {
  const stats = [
    {
      id: 1,
      icon: ServicesFour,
      value: "10.5K",
      label: "Sellers active on our site",
      highlight: false,
    },
    {
      id: 2,
      icon: ServicesFive,
      value: "33K",
      label: "Monthly Product Sale",
      highlight: true,
    },
    {
      id: 3,
      icon: ServicesSix,
      value: "45.5K",
      label: "Customers active on our site",
      highlight: false,
    },
    {
      id: 4,
      icon: ServicesSeven,
      value: "25K",
      label: "Annual gross sale on our site",
      highlight: false,
    },
  ];

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center justify-center p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xs hover:shadow-md ${
              item.highlight
                ? "bg-red-500 text-white shadow-red-500/20"
                : "bg-white text-gray-900 border border-zinc-200 hover:border-red-500"
            }`}
          >
            <div className={`p-3 rounded-2xl mb-4 ${item.highlight ? "bg-white/20" : "bg-zinc-50"}`}>
              <img src={item.icon} alt={item.label} className="w-14 h-14 object-contain" />
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <p className="text-3xl font-black">{item.value}</p>
              <p className={`text-xs sm:text-sm font-medium ${item.highlight ? "text-red-100" : "text-gray-500"}`}>
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
