import React from "react";
import Services from "./Assets/Services.png";
import ServicesTwo from "./Assets/ServicesTwo.png";
import ServicesThree from "./Assets/ServicesThree.png";

const servicesData = [
  {
    icon: Services,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    id: 1,
  },
  {
    icon: ServicesTwo,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    id: 2,
  },
  {
    icon: ServicesThree,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    id: 3,
  },
];

export default function FastDelivery() {
  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 justify-items-center">
        {servicesData.map((service) => (
          <article
            key={service.id}
            className="flex flex-col items-center text-center bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200/80 shadow-xs hover:shadow-md transition-all duration-300 w-full max-w-sm gap-4"
          >
            <div className="flex justify-center p-3 bg-zinc-50 rounded-2xl">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="w-14 sm:w-16 h-14 sm:h-16 object-contain"
              />
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
