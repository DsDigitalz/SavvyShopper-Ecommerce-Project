import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import FastDelivery from "../Components/FastDelivery";
import { FaSearch } from "react-icons/fa";

const SUBCATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "monitors", name: "Health Monitors" },
  { id: "supplements", name: "Vitamins & Supplements" },
  { id: "first-aid", name: "First Aid Kits" },
  { id: "personal-care", name: "Personal Care & Hygiene" },
];

const MEDICINE_PRODUCTS = [
  {
    id: 941,
    title: "Digital Bluetooth Blood Pressure Monitor",
    name: "Digital Bluetooth Blood Pressure Monitor",
    price: 49,
    originalPriceNumber: 75,
    formattedPrice: "$49",
    originalPrice: "$75",
    discount: "-35%",
    discountPercentage: 35,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 310,
    stock: 25,
    category: "monitors",
    brand: "MediTech",
    description: "Clinical-grade automated upper arm blood pressure monitor with mobile app sync.",
  },
  {
    id: 942,
    title: "OLED Fingertip Pulse Oximeter",
    name: "OLED Fingertip Pulse Oximeter",
    price: 29,
    originalPriceNumber: 45,
    formattedPrice: "$29",
    originalPrice: "$45",
    discount: "-35%",
    discountPercentage: 35,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 240,
    stock: 40,
    category: "monitors",
    brand: "MediTech",
    description: "Instant SpO2 oxygen saturation level and heart rate pulse monitor with multi-angle OLED screen.",
  },
  {
    id: 943,
    title: "Comprehensive 120-Piece Emergency First Aid Kit",
    name: "Comprehensive 120-Piece Emergency First Aid Kit",
    price: 39,
    originalPriceNumber: 59,
    formattedPrice: "$39",
    originalPrice: "$59",
    discount: "-34%",
    discountPercentage: 34,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 180,
    stock: 30,
    category: "first-aid",
    brand: "SafetyGuard",
    description: "Compact waterproof hard case loaded with medical supplies, bandages, antiseptics, and burn treatment.",
  },
  {
    id: 944,
    title: "Multivitamin & Mineral Softgel Capsules",
    name: "Multivitamin & Mineral Softgel Capsules",
    price: 24,
    originalPriceNumber: 35,
    formattedPrice: "$24",
    originalPrice: "$35",
    discount: "-31%",
    discountPercentage: 31,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: 420,
    stock: 60,
    category: "supplements",
    brand: "VitaBoost",
    description: "High potency daily multivitamin packed with Vitamin C, D3, Zinc, and essential antioxidants.",
  },
  {
    id: 945,
    title: "Infrared Non-Contact Forehead Thermometer",
    name: "Infrared Non-Contact Forehead Thermometer",
    price: 34,
    originalPriceNumber: 50,
    formattedPrice: "$34",
    originalPrice: "$50",
    discount: "-32%",
    discountPercentage: 32,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 195,
    stock: 22,
    category: "monitors",
    brand: "MediTech",
    description: "Ultra-fast 1-second temperature reader with color fever alarm indicator.",
  },
  {
    id: 946,
    title: "Organic Omega-3 Triple Strength Fish Oil",
    name: "Organic Omega-3 Triple Strength Fish Oil",
    price: 28,
    originalPriceNumber: 42,
    formattedPrice: "$28",
    originalPrice: "$42",
    discount: "-33%",
    discountPercentage: 33,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 290,
    stock: 45,
    category: "supplements",
    brand: "VitaBoost",
    description: "Purified molecularly distilled fish oil softgels supporting heart, brain, and joint health.",
  },
];

export default function Medicine() {
  const [selectedSub, setSelectedSub] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = MEDICINE_PRODUCTS.filter((p) => {
    const matchesSub = selectedSub === "all" || p.category === selectedSub;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSub && matchesSearch;
  });

  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <main className="w-full pt-28 sm:pt-32 lg:pt-36 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link to="/home" className="hover:text-red-500 transition">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-red-500 transition">Shop</Link>
          <span>/</span>
          <span className="font-semibold text-gray-900">Medicine</span>
        </nav>

        {/* Exclusive Header Tag */}
        <div className="flex items-center text-red-500 gap-2 mb-2">
          <div className="bg-red-500 w-4 h-8 sm:w-5 sm:h-10 rounded-[3px]"></div>
          <p className="font-semibold text-sm sm:text-base">Categories</p>
        </div>

        {/* Page Title & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 pb-5 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-gray-900 tracking-tight">
            Medicine & Healthcare
          </h1>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search Medicine..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-zinc-100 rounded-lg text-sm outline-none focus:ring-2 focus:ring-red-500 border border-zinc-200"
              />
              <FaSearch className="absolute left-3 top-3 text-zinc-400 text-xs" />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-zinc-100 text-sm rounded-lg px-3 py-2 text-gray-700 outline-none border border-zinc-200 focus:ring-2 focus:ring-red-500 cursor-pointer"
            >
              <option value="default">Sort by: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Subcategories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-zinc-100 scrollbar-none">
          {SUBCATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedSub(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition duration-200 cursor-pointer whitespace-nowrap ${
                selectedSub === cat.id
                  ? "bg-red-500 text-white shadow"
                  : "bg-zinc-100 text-gray-700 hover:bg-zinc-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <section id="products-grid">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-zinc-50 rounded-xl border border-zinc-200">
              <h3 className="text-lg font-bold text-gray-800 mb-1">No Medical Products Found</h3>
              <p className="text-gray-500 text-sm mb-4">Try clearing filters or search queries.</p>
              <button
                onClick={() => {
                  setSelectedSub("all");
                  setSearchQuery("");
                }}
                className="bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>

        {/* Feature Section */}
        <div className="mt-16">
          <FastDelivery />
        </div>
      </div>
    </main>
  );
}
