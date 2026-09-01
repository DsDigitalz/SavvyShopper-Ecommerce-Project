import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../services/productService";
import { ProductCardSkeleton } from "./SkeletonLoader";
import ErrorMessage from "./ErrorMessage";

// --- Timer Unit Component ---
const TimerUnit = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <p className="font-semibold text-[10px] sm:text-[12px] text-gray-500">
      {label}
    </p>
    <h3 className="text-xl sm:text-3xl font-bold leading-none text-gray-900">
      {value}
    </h3>
  </div>
);

export default function FlashSales() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loadFlashSales = async () => {
    try {
      setLoading(true);
      setError(null);
      // Fetch 8 products for Flash Sales section
      const data = await fetchProducts({ limit: 8 });
      setProducts(data.products || []);
    } catch (err) {
      console.error("Failed to load flash sales products:", err);
      setError("Unable to load flash sales. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFlashSales();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-100">
      {/* Tag */}
      <div className="flex items-center text-red-500 gap-2 mb-3">
        <div className="bg-red-500 w-4 sm:w-5 h-8 sm:h-9 rounded-[4px]" />
        <p className="font-bold text-sm sm:text-base tracking-wide">Today's</p>
      </div>

      {/* Header with Title + Timer */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-gray-900 tracking-tight">
            Flash Sales
          </h2>

          {/* Countdown Timer Box */}
          <div className="flex items-center gap-3 bg-red-50/80 px-4 py-2.5 rounded-2xl border border-red-100/80 shadow-xs">
            <TimerUnit label="Days" value="03" />
            <span className="text-lg sm:text-2xl text-red-500 font-bold mb-1">:</span>
            <TimerUnit label="Hours" value="23" />
            <span className="text-lg sm:text-2xl text-red-500 font-bold mb-1">:</span>
            <TimerUnit label="Minutes" value="19" />
            <span className="text-lg sm:text-2xl text-red-500 font-bold mb-1">:</span>
            <TimerUnit label="Seconds" value="56" />
          </div>
        </div>

        <button
          onClick={() => navigate("/shop")}
          className="text-sm font-bold text-red-500 hover:text-red-600 self-start lg:self-auto flex items-center gap-1.5 transition"
        >
          <span>Explore All Flash Deals</span>
          <span>&rarr;</span>
        </button>
      </div>

      {/* Product Content */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <ErrorMessage message={error} onRetry={loadFlashSales} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* View All Products Button */}
      <div className="w-full flex justify-center mt-12">
        <button
          onClick={() => navigate("/shop")}
          className="bg-red-500 hover:bg-red-600 transition-all duration-200 rounded-xl py-3.5 px-10 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
        >
          View All Products
        </button>
      </div>
    </section>
  );
}
