import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { ProductCardSkeleton } from "../Components/SkeletonLoader";
import ErrorMessage from "../Components/ErrorMessage";
import FastDelivery from "../Components/FastDelivery";
import { FaSearch } from "react-icons/fa";

const SUBCATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "shirts", name: "Shirts & Polos" },
  { id: "shoes", name: "Footwear & Sneakers" },
  { id: "watches", name: "Luxury Watches" },
  { id: "jackets", name: "Outerwear & Jackets" },
  { id: "accessories", name: "Belts & Accessories" },
];

const FALLBACK_MENS_PRODUCTS = [
  {
    id: 921,
    title: "Classic Tailored Slim Fit Oxford Shirt",
    name: "Classic Tailored Slim Fit Oxford Shirt",
    price: 59,
    originalPriceNumber: 85,
    formattedPrice: "$59",
    originalPrice: "$85",
    discount: "-30%",
    discountPercentage: 30,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 110,
    stock: 25,
    category: "mens-shirts",
    brand: "SavvyGent",
    description: "Premium 100% breathable cotton slim fit shirt suitable for corporate and smart-casual wear.",
  },
  {
    id: 922,
    title: "Handcrafted Genuine Leather Dress Shoes",
    name: "Handcrafted Genuine Leather Dress Shoes",
    price: 139,
    originalPriceNumber: 189,
    formattedPrice: "$139",
    originalPrice: "$189",
    discount: "-26%",
    discountPercentage: 26,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 76,
    stock: 12,
    category: "mens-shoes",
    brand: "MonarchCraft",
    description: "Full-grain Italian leather Oxford dress shoes built with durable Goodyear welted soles.",
  },
  {
    id: 923,
    title: "Chronograph Automatic Stainless Watch",
    name: "Chronograph Automatic Stainless Watch",
    price: 189,
    originalPriceNumber: 250,
    formattedPrice: "$189",
    originalPrice: "$250",
    discount: "-24%",
    discountPercentage: 24,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 155,
    stock: 8,
    category: "mens-watches",
    brand: "ChronosLuxe",
    description: "Precision automatic chronograph watch featuring sapphire crystal dial and 100m water resistance.",
  },
  {
    id: 924,
    title: "Vintage Biker Genuine Leather Jacket",
    name: "Vintage Biker Genuine Leather Jacket",
    price: 199,
    originalPriceNumber: 280,
    formattedPrice: "$199",
    originalPrice: "$280",
    discount: "-29%",
    discountPercentage: 29,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: 94,
    stock: 15,
    category: "jackets",
    brand: "IronRider",
    description: "Rugged yet refined biker jacket made with genuine cowhide leather and quilted thermal lining.",
  },
  {
    id: 925,
    title: "Minimalist Italian Leather Belt & Wallet Set",
    name: "Minimalist Italian Leather Belt & Wallet Set",
    price: 49,
    originalPriceNumber: 75,
    formattedPrice: "$49",
    originalPrice: "$75",
    discount: "-34%",
    discountPercentage: 34,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 142,
    stock: 35,
    category: "accessories",
    brand: "SavvyGent",
    description: "Matching RFID-blocking bi-fold leather wallet paired with a reversible automatic buckle belt.",
  },
  {
    id: 926,
    title: "Urban Athletic Knit Performance Sneakers",
    name: "Urban Athletic Knit Performance Sneakers",
    price: 79,
    originalPriceNumber: 110,
    formattedPrice: "$79",
    originalPrice: "$110",
    discount: "-28%",
    discountPercentage: 28,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: 188,
    stock: 28,
    category: "mens-shoes",
    brand: "StriderFit",
    description: "Ultra-lightweight breathable mesh running sneakers with energy-returning foam cushioning.",
  },
];

export default function MensFashion() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSub, setSelectedSub] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchMensProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const categoriesToFetch = ["mens-shirts", "mens-shoes", "mens-watches"];
        const fetchPromises = categoriesToFetch.map((cat) =>
          fetch(`https://dummyjson.com/products/category/${cat}`).then((res) => {
            if (!res.ok) return { products: [] };
            return res.json();
          })
        );

        const results = await Promise.all(fetchPromises);
        let apiProducts = results.flatMap((res) => res.products || []);

        const normalizedApi = apiProducts.map((p) => ({
          id: p.id,
          title: p.title,
          name: p.title,
          price: p.price,
          originalPriceNumber: Math.round(p.price * 1.3),
          formattedPrice: `$${p.price}`,
          originalPrice: `$${Math.round(p.price * 1.3)}`,
          discount: `-${Math.round(p.discountPercentage || 20)}%`,
          discountPercentage: Math.round(p.discountPercentage || 20),
          image: p.thumbnail || p.images?.[0] || "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
          rating: p.rating || 4.7,
          ratingCount: p.reviews ? p.reviews.length * 10 : 48,
          stock: p.stock || 12,
          category: p.category,
          brand: p.brand || "SavvyGent",
          description: p.description,
        }));

        const combined = [...normalizedApi, ...FALLBACK_MENS_PRODUCTS];
        const unique = Array.from(new Map(combined.map((item) => [item.id, item])).values());
        setProducts(unique);
      } catch (err) {
        console.error("Error fetching men's fashion:", err);
        setProducts(FALLBACK_MENS_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchMensProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSub =
      selectedSub === "all"
        ? true
        : p.category.toLowerCase().includes(selectedSub.toLowerCase()) ||
          (selectedSub === "shirts" && (p.category.includes("shirt") || p.title.toLowerCase().includes("shirt"))) ||
          (selectedSub === "shoes" && p.category.includes("shoes")) ||
          (selectedSub === "watches" && p.category.includes("watches")) ||
          (selectedSub === "jackets" && (p.category.includes("jacket") || p.title.toLowerCase().includes("jacket"))) ||
          (selectedSub === "accessories" && p.category.includes("accessories"));

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
          <span className="font-semibold text-gray-900">Men's Fashion</span>
        </nav>

        {/* Exclusive Header Tag */}
        <div className="flex items-center text-red-500 gap-2 mb-2">
          <div className="bg-red-500 w-4 h-8 sm:w-5 sm:h-10 rounded-[3px]"></div>
          <p className="font-semibold text-sm sm:text-base">Categories</p>
        </div>

        {/* Page Title & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 pb-5 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-gray-900 tracking-tight">
            Men's Fashion
          </h1>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search Men's..."
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
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <ProductCardSkeleton key={n} />
              ))}
            </div>
          ) : error ? (
            <ErrorMessage message={error} />
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-zinc-50 rounded-xl border border-zinc-200">
              <h3 className="text-lg font-bold text-gray-800 mb-1">No Products Found</h3>
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
