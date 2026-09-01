import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { ProductCardSkeleton } from "../Components/SkeletonLoader";
import ErrorMessage from "../Components/ErrorMessage";
import FastDelivery from "../Components/FastDelivery";
import { FaSearch } from "react-icons/fa";

const SUBCATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "beauty", name: "Cosmetics & Makeup" },
  { id: "skin-care", name: "Skincare & Serums" },
  { id: "fragrances", name: "Luxury Fragrances" },
  { id: "haircare", name: "Haircare & Treatments" },
];

const FALLBACK_BEAUTY_PRODUCTS = [
  {
    id: 971,
    title: "Hyaluronic Acid Hydrating Face Serum",
    name: "Hyaluronic Acid Hydrating Face Serum",
    price: 38,
    originalPriceNumber: 55,
    formattedPrice: "$38",
    originalPrice: "$55",
    discount: "-31%",
    discountPercentage: 31,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 320,
    stock: 35,
    category: "skin-care",
    brand: "GlowLab",
    description: "Deeply moisturizing facial serum with triple-weight hyaluronic acid and Vitamin B5.",
  },
  {
    id: 972,
    title: "Velvet Matte Waterproof Liquid Lipstick",
    name: "Velvet Matte Waterproof Liquid Lipstick",
    price: 22,
    originalPriceNumber: 32,
    formattedPrice: "$22",
    originalPrice: "$32",
    discount: "-31%",
    discountPercentage: 31,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 260,
    stock: 45,
    category: "beauty",
    brand: "LuxeVibe",
    description: "Long-lasting non-drying smudge-proof matte lipstick infused with jojoba oil.",
  },
  {
    id: 973,
    title: "Elegance Eau De Parfum Spray (100ml)",
    name: "Elegance Eau De Parfum Spray (100ml)",
    price: 95,
    originalPriceNumber: 135,
    formattedPrice: "$95",
    originalPrice: "$135",
    discount: "-30%",
    discountPercentage: 30,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 185,
    stock: 20,
    category: "fragrances",
    brand: "MaisonPerfume",
    description: "Sensual floral woody fragrance featuring jasmine, amber, and Madagascar vanilla.",
  },
  {
    id: 974,
    title: "Argan Oil Repairing Hair Mask & Treatment",
    name: "Argan Oil Repairing Hair Mask & Treatment",
    price: 29,
    originalPriceNumber: 42,
    formattedPrice: "$29",
    originalPrice: "$42",
    discount: "-31%",
    discountPercentage: 31,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 210,
    stock: 30,
    category: "haircare",
    brand: "SilkStrands",
    description: "Deep conditioning Moroccan Argan oil mask designed to restore damaged, dry, or color-treated hair.",
  },
  {
    id: 975,
    title: "Natural Rose Quartz Facial Jade Roller & Gua Sha",
    name: "Natural Rose Quartz Facial Jade Roller & Gua Sha",
    price: 25,
    originalPriceNumber: 38,
    formattedPrice: "$25",
    originalPrice: "$38",
    discount: "-34%",
    discountPercentage: 34,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 380,
    stock: 40,
    category: "skin-care",
    brand: "GlowLab",
    description: "Authentic Brazilian rose quartz beauty roller tool for lymphatic drainage and reducing puffiness.",
  },
  {
    id: 976,
    title: "Multi-Tone Eyeshadow Palette (18 Colors)",
    name: "Multi-Tone Eyeshadow Palette (18 Colors)",
    price: 34,
    originalPriceNumber: 50,
    formattedPrice: "$34",
    originalPrice: "$50",
    discount: "-32%",
    discountPercentage: 32,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: 155,
    stock: 25,
    category: "beauty",
    brand: "LuxeVibe",
    description: "Highly pigmented ultra-blendable mattes, shimmers, and metallic glitters.",
  },
];

export default function HealthBeauty() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSub, setSelectedSub] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchBeautyProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const categoriesToFetch = ["beauty", "skin-care", "fragrances"];
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
          image: p.thumbnail || p.images?.[0] || "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80",
          rating: p.rating || 4.7,
          ratingCount: p.reviews ? p.reviews.length * 10 : 50,
          stock: p.stock || 20,
          category: p.category,
          brand: p.brand || "GlowLab",
          description: p.description,
        }));

        const combined = [...normalizedApi, ...FALLBACK_BEAUTY_PRODUCTS];
        const unique = Array.from(new Map(combined.map((item) => [item.id, item])).values());
        setProducts(unique);
      } catch (err) {
        console.error("Error fetching health & beauty:", err);
        setProducts(FALLBACK_BEAUTY_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchBeautyProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSub =
      selectedSub === "all"
        ? true
        : p.category.toLowerCase().includes(selectedSub.toLowerCase()) ||
          (selectedSub === "beauty" && p.category.includes("beauty")) ||
          (selectedSub === "skin-care" && (p.category.includes("skin") || p.category.includes("care"))) ||
          (selectedSub === "fragrances" && p.category.includes("fragrance")) ||
          (selectedSub === "haircare" && (p.category.includes("hair") || p.title.toLowerCase().includes("hair")));

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
          <span className="font-semibold text-gray-900">Health & Beauty</span>
        </nav>

        {/* Exclusive Header Tag */}
        <div className="flex items-center text-red-500 gap-2 mb-2">
          <div className="bg-red-500 w-4 h-8 sm:w-5 sm:h-10 rounded-[3px]"></div>
          <p className="font-semibold text-sm sm:text-base">Categories</p>
        </div>

        {/* Page Title & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 pb-5 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-gray-900 tracking-tight">
            Health & Beauty
          </h1>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search Beauty..."
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
              <h3 className="text-lg font-bold text-gray-800 mb-1">No Beauty Products Found</h3>
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
