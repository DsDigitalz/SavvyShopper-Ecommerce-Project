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
    <section className="max-w-7xl mx-auto mt-20 px-6 sm:px-10 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 justify-items-center">
        {servicesData.map((service) => (
          <article
            key={service.id}
            className="flex flex-col items-center text-center bg-transparent w-full max-w-[280px] sm:max-w-[260px] gap-5"
          >
            <div className="flex justify-center">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="w-16 sm:w-20 object-contain"
              />
            </div>

            <div className="flex flex-col items-center gap-2">
              <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
