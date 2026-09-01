import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../services/productService";
import { ProductCardSkeleton } from "./SkeletonLoader";
import ErrorMessage from "./ErrorMessage";

export default function BestProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loadBestProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      // Fetch products sorted by rating or top electronics
      const data = await fetchProducts({ limit: 12, sortBy: "rating" });
      setProducts(data.products || []);
    } catch (err) {
      console.error("Failed to load best selling products:", err);
      setError("Unable to load best selling products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBestProducts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-100">
      {/* Section Header */}
      <div className="flex items-center text-red-500 gap-2 mb-3">
        <div className="bg-red-500 w-4 sm:w-5 h-8 sm:h-9 rounded-[4px]" />
        <p className="font-bold text-sm sm:text-base tracking-wide">This Month</p>
      </div>

      {/* Header with Title + View All */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 gap-4">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-gray-900 tracking-tight">
          Best Selling Products
        </h2>
        <button
          onClick={() => navigate("/shop")}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 cursor-pointer text-sm"
        >
          View All Products
        </button>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <ErrorMessage message={error} onRetry={loadBestProducts} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
