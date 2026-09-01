import React from "react";

import { Link } from "react-router-dom";

export default function Page_Not_Found() {
  return (
    <div className="pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center text-center max-w-md">
        <span className="text-8xl sm:text-9xl font-black text-red-500/90 mb-4 tracking-tighter">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-zinc-500 text-xs sm:text-sm mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          to="/home"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition duration-200 text-sm cursor-pointer active:scale-98"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
