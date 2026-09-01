import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { fetchProducts } from "../services/productService";
import { ProductCardSkeleton } from "../Components/SkeletonLoader";
import ErrorMessage from "../Components/ErrorMessage";
import { FaSearch, FaFilter, FaTimes, FaSlidersH } from "react-icons/fa";

const CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "smartphones", name: "Smartphones" },
  { id: "laptops", name: "Laptops & Computers" },
  { id: "mobile-accessories", name: "Gadget Accessories" },
  { id: "tablets", name: "Tablets" },
  { id: "mens-watches", name: "Smartwatches" },
  { id: "sports-accessories", name: "Audio & Sports" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState("default");
  const [priceLimit, setPriceLimit] = useState(2000);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync state with URL params
  useEffect(() => {
    const cat = searchParams.get("category") || "all";
    const q = searchParams.get("search") || "";
    setSelectedCategory(cat);
    setSearchQuery(q);
  }, [searchParams]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProducts({
        category: selectedCategory === "all" ? "" : selectedCategory,
        search: searchQuery,
        limit: 100,
      });
      setProducts(data.products || []);
    } catch (err) {
      console.error("Error loading products for shop:", err);
      setError("Could not load products. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (catId === "all") {
        newParams.delete("category");
      } else {
        newParams.set("category", catId);
      }
      return newParams;
    });
    setMobileFilterOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (searchQuery.trim()) {
        newParams.set("search", searchQuery.trim());
      } else {
        newParams.delete("search");
      }
      return newParams;
    });
  };

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSortBy("default");
    setPriceLimit(2000);
    setSearchParams({});
  };

  // Filter & Sort logic
  let filteredProducts = products.filter((p) => p.price <= priceLimit);

  if (sortBy === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "name") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Shop Page Banner / Header */}
      <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-red-950 text-white rounded-3xl p-6 sm:p-10 mb-8 shadow-lg border border-zinc-800 flex flex-col justify-center">
        <span className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">Explore All Products</span>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
          Gadgets & Electronics Catalog
        </h1>
        <p className="text-zinc-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
          Discover top-tier smartphones, laptops, smartwatches, audio gear, and high-performance tech accessories with instant global shipping.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar Filters (Desktop - 3 cols) */}
        <aside className="hidden lg:block lg:col-span-3 space-y-6 bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm sticky top-28">
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaFilter className="text-red-500 text-xs" />
              <span>Categories</span>
            </h3>
            <div className="space-y-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition duration-200 cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-red-500 text-white font-bold shadow-xs"
                      : "text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-zinc-100 pt-5">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Max Price: ${priceLimit}</h3>
            <input
              type="range"
              min="10"
              max="2000"
              step="50"
              value={priceLimit}
              onChange={(e) => setPriceLimit(Number(e.target.value))}
              className="w-full accent-red-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-zinc-400 mt-1 font-semibold">
              <span>$10</span>
              <span>$2,000+</span>
            </div>
          </div>

          <button
            onClick={handleClearFilters}
            className="w-full text-xs font-bold text-red-500 hover:bg-red-50 py-2.5 rounded-xl border border-red-200 transition cursor-pointer"
          >
            Clear All Filters
          </button>
        </aside>

        {/* Main Content Area (9 cols) */}
        <main className="lg:col-span-9">
          {/* Top Controls Bar */}
          <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="relative w-full sm:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-2 px-3 pr-9 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-red-500">
                <FaSearch className="text-xs" />
              </button>
            </form>

            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 bg-zinc-100 px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-700"
              >
                <FaSlidersH /> Filters
              </button>

              {/* Sorting Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500 hidden sm:inline whitespace-nowrap">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-zinc-50 border border-zinc-200 rounded-xl py-2 px-3 text-xs sm:text-sm font-medium outline-none cursor-pointer focus:ring-2 focus:ring-red-500"
                >
                  <option value="default">Featured / Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Product Name (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Filter Chips */}
          {(selectedCategory !== "all" || searchQuery || sortBy !== "default" || priceLimit < 2000) && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs text-zinc-500 font-semibold">Active filters:</span>
              {selectedCategory !== "all" && (
                <span className="bg-red-50 text-red-600 border border-red-200 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                  Category: {CATEGORIES.find((c) => c.id === selectedCategory)?.name}
                  <FaTimes className="cursor-pointer text-[10px]" onClick={() => handleCategorySelect("all")} />
                </span>
              )}
              {searchQuery && (
                <span className="bg-red-50 text-red-600 border border-red-200 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                  Query: "{searchQuery}"
                  <FaTimes className="cursor-pointer text-[10px]" onClick={() => setSearchQuery("")} />
                </span>
              )}
              {priceLimit < 2000 && (
                <span className="bg-red-50 text-red-600 border border-red-200 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                  Under ${priceLimit}
                  <FaTimes className="cursor-pointer text-[10px]" onClick={() => setPriceLimit(2000)} />
                </span>
              )}
              <button
                onClick={handleClearFilters}
                className="text-xs text-zinc-500 hover:text-red-500 underline ml-2 cursor-pointer font-medium"
              >
                Reset All
              </button>
            </div>
          )}

          {/* Products Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <ErrorMessage message={error} onRetry={loadProducts} />
          ) : filteredProducts.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-zinc-200 text-center my-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-zinc-500 text-sm mb-6 max-w-md mx-auto">
                We couldn't find any electronics matching your filter criteria. Try adjusting your search query or price threshold.
              </p>
              <button
                onClick={handleClearFilters}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-xl text-sm transition shadow-md"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Mobile Drawer Filter Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 bg-black/50 z-[120] flex justify-end lg:hidden">
          <div className="bg-white w-4/5 max-w-xs h-full p-6 space-y-6 overflow-y-auto">
            <div className="flex justify-between items-center border-b border-zinc-200 pb-4">
              <h3 className="font-bold text-lg text-gray-900">Filter Products</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="p-2 text-zinc-500 text-lg">
                <FaTimes />
              </button>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3">Categories</h4>
              <div className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                      selectedCategory === cat.id ? "bg-red-500 text-white font-bold" : "text-zinc-700"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-zinc-200 pt-4">
              <h4 className="font-semibold text-sm mb-2">Max Price: ${priceLimit}</h4>
              <input
                type="range"
                min="10"
                max="2000"
                step="50"
                value={priceLimit}
                onChange={(e) => setPriceLimit(Number(e.target.value))}
                className="w-full accent-red-500"
              />
            </div>

            <button
              onClick={() => {
                handleClearFilters();
                setMobileFilterOpen(false);
              }}
              className="w-full bg-zinc-900 text-white py-2.5 rounded-lg text-sm font-semibold"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
