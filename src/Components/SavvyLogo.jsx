import React from "react";

export default function SavvyLogo({ className = "w-9 h-9", showText = false, textClassName = "text-xl sm:text-2xl font-black text-gray-900 tracking-tight" }) {
  return (
    <div className="inline-flex items-center gap-2.5">
      <div className={`relative flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-tr from-red-600 via-red-500 to-rose-400 p-1.5 shadow-md shadow-red-500/25 group-hover:shadow-lg group-hover:shadow-red-500/35 group-hover:scale-105 transition-all duration-300 ${className}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          {/* Shopping Bag Handle */}
          <path
            d="M37 36V26C37 18.82 42.82 13 50 13C57.18 13 63 18.82 63 26V36"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Bag Body Silhouette */}
          <path
            d="M23 38C22.4 38 22 38.5 22 39.1L26.5 83.5C27 88.2 31 92 35.8 92H64.2C69 92 73 88.2 73.5 83.5L78 39.1C78 38.5 77.6 38 77 38H23Z"
            fill="currentColor"
            fillOpacity="0.18"
          />
          {/* Stylized S Curve */}
          <path
            d="M62 48C60 43 55.5 41 49.5 41C43.5 41 39 44 39 49C39 54 43 56 50 57.5C59 59.5 63 62.5 63 69C63 75.5 57 79 49.5 79C42 79 37 75 35.5 69"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Electric Spark Accent */}
          <circle cx="70" cy="38" r="3.5" fill="#FEF08A" />
        </svg>
      </div>

      {showText && (
        <span className={textClassName}>
          SavvySho<span className="text-red-500">pp</span>er
        </span>
      )}
    </div>
  );
}
