import React from "react";
import { FaExclamationTriangle, FaRedo } from "react-icons/fa";

export default function ErrorMessage({
  title = "Failed to load products",
  message = "Something went wrong while communicating with the products server. Please check your internet connection and try again.",
  onRetry,
}) {
  return (
    <div className="flex flex-col items-center justify-center p-8 my-10 bg-red-50 border border-red-200 rounded-xl text-center max-w-xl mx-auto shadow-sm">
      <div className="bg-red-100 p-4 rounded-full text-red-500 text-3xl mb-4">
        <FaExclamationTriangle />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-6 rounded-lg transition duration-200 shadow-md active:scale-95 cursor-pointer"
        >
          <FaRedo className="text-sm" />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
}
