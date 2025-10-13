import React from "react";
// Assuming these assets are correctly imported or will be available
import banner from "./Assets/banner.jpg";
import rightArrow from "./Assets/rightArrow.svg";

export default function Banner() {
  // Category List data for cleaner rendering
  const categories = [
    { name: "Women's Fashion", hasArrow: true },
    { name: "Men's Fashion", hasArrow: true },
    { name: "Electronics", hasArrow: false },
    { name: "Home & Lifestyle", hasArrow: false },
    { name: "Medicine", hasArrow: false },
    { name: "Sports & Outdoor", hasArrow: false },
    { name: "Groceries & Pets", hasArrow: false },
    { name: "Health & Beauty", hasArrow: false },
  ];

  return (
    // Use <section> for semantic markup
    <section className="banner  py-5 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl  mx-auto flex w-full">
        {/* Aside section - Categories (Visible on large screens, hidden on others) */}
        <aside className="hidden lg:block w-1/4 xl:w-[25%] pr-10 border-r border-zinc-300">
          <ul className="flex flex-col gap-4 text-sm xl:text-base pt-4">
            {categories.map((category, index) => (
              <li
                key={index}
                className="hover:text-red-500 transition duration-300 cursor-pointer flex justify-between items-center"
              >
                {category.name}
                {category.hasArrow && (
                  // Adjusted gap and alignment for better control
                  <img src={rightArrow} alt="Right arrow" className="w-4 h-4" />
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Banner Content - Takes full width on small screens, remaining width on large screens */}
        <div className="w-full lg:w-3/4 xl:w-[75%] lg:pl-10">
          <article className="flex flex-col justify-center items-start h-full">
            {/* The banner image container */}
            <div className="w-full">
              <img
                src={banner}
                alt="Promotional Banner"
                className="w-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Optional: Add a mobile-friendly title/description for the banner if needed */}
            <div className="lg:hidden mt-4 text-center w-full">
              <h2 className="text-xl font-semibold">Latest Deals & Offers</h2>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
