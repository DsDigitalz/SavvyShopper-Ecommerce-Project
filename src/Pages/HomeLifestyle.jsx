import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { ProductCardSkeleton } from "../Components/SkeletonLoader";
import ErrorMessage from "../Components/ErrorMessage";
import FastDelivery from "../Components/FastDelivery";
import { FaSearch } from "react-icons/fa";

const SUBCATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "furniture", name: "Modern Furniture" },
  { id: "home-decoration", name: "Home Decor & Art" },
  { id: "kitchen-accessories", name: "Kitchen & Dining" },
  { id: "lighting", name: "Lighting & Bedding" },
];

const FALLBACK_HOME_PRODUCTS = [
  {
    id: 931,
    title: "Nordic Minimalist Fabric Accent Armchair",
    name: "Nordic Minimalist Fabric Accent Armchair",
    price: 189,
    originalPriceNumber: 249,
    formattedPrice: "$189",
    originalPrice: "$249",
    discount: "-24%",
    discountPercentage: 24,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 88,
    stock: 10,
    category: "furniture",
    brand: "NordicHome",
    description: "Ergonomic scandinavian style lounge chair with solid wooden legs and linen fabric.",
  },
  {
    id: 932,
    title: "Smart Warm Ceramic Ambient Table Lamp",
    name: "Smart Warm Ceramic Ambient Table Lamp",
    price: 59,
    originalPriceNumber: 85,
    formattedPrice: "$59",
    originalPrice: "$85",
    discount: "-30%",
    discountPercentage: 30,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 114,
    stock: 20,
    category: "lighting",
    brand: "LuminaStyle",
    description: "Dimmable warm glow touch-control lamp with wireless charging pad built into the base.",
  },
  {
    id: 933,
    title: "Premium Non-Stick Granite Cookware Set (10 Pcs)",
    name: "Premium Non-Stick Granite Cookware Set (10 Pcs)",
    price: 149,
    originalPriceNumber: 199,
    formattedPrice: "$149",
    originalPrice: "$199",
    discount: "-25%",
    discountPercentage: 25,
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 165,
    stock: 14,
    category: "kitchen-accessories",
    brand: "ChefSelect",
    description: "PFOA-free granite coated induction cookware set with heat-resistant silicone handles.",
  },
  {
    id: 934,
    title: "Abstract Geometric Ceramic Floor Vase",
    name: "Abstract Geometric Ceramic Floor Vase",
    price: 45,
    originalPriceNumber: 65,
    formattedPrice: "$45",
    originalPrice: "$65",
    discount: "-30%",
    discountPercentage: 30,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: 92,
    stock: 25,
    category: "home-decoration",
    brand: "ArtisanCraft",
    description: "Handmade matte finish ceramic centerpiece vase perfect for dried flowers or decor.",
  },
  {
    id: 935,
    title: "100% Egyptian Cotton Duvet Bedding Cover",
    name: "100% Egyptian Cotton Duvet Bedding Cover",
    price: 79,
    originalPriceNumber: 110,
    formattedPrice: "$79",
    originalPrice: "$110",
    discount: "-28%",
    discountPercentage: 28,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 210,
    stock: 18,
    category: "lighting",
    brand: "SlumberLuxe",
    description: "800 thread count ultra-soft breathable duvet cover set including two matching pillowcases.",
  },
  {
    id: 936,
    title: "Modern Wooden Coffee Table with Drawers",
    name: "Modern Wooden Coffee Table with Drawers",
    price: 159,
    originalPriceNumber: 220,
    formattedPrice: "$159",
    originalPrice: "$220",
    discount: "-27%",
    discountPercentage: 27,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 74,
    stock: 9,
    category: "furniture",
    brand: "NordicHome",
    description: "Solid oak living room coffee table with dual slide-out storage drawers.",
  },
];

export default function HomeLifestyle() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSub, setSelectedSub] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchHomeProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const categoriesToFetch = ["furniture", "home-decoration", "kitchen-accessories"];
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
          image: p.thumbnail || p.images?.[0] || "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=80",
          rating: p.rating || 4.7,
          ratingCount: p.reviews ? p.reviews.length * 8 : 40,
          stock: p.stock || 15,
          category: p.category,
          brand: p.brand || "NordicHome",
          description: p.description,
        }));

        const combined = [...normalizedApi, ...FALLBACK_HOME_PRODUCTS];
        const unique = Array.from(new Map(combined.map((item) => [item.id, item])).values());
        setProducts(unique);
      } catch (err) {
        console.error("Error fetching home & lifestyle:", err);
        setProducts(FALLBACK_HOME_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSub =
      selectedSub === "all"
        ? true
        : p.category.toLowerCase().includes(selectedSub.toLowerCase()) ||
          (selectedSub === "furniture" && p.category.includes("furniture")) ||
          (selectedSub === "home-decoration" && p.category.includes("decor")) ||
          (selectedSub === "kitchen-accessories" && p.category.includes("kitchen")) ||
          (selectedSub === "lighting" && (p.category.includes("light") || p.category.includes("bed")));

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
          <span className="font-semibold text-gray-900">Home & Lifestyle</span>
        </nav>

        {/* Exclusive Header Tag */}
        <div className="flex items-center text-red-500 gap-2 mb-2">
          <div className="bg-red-500 w-4 h-8 sm:w-5 sm:h-10 rounded-[3px]"></div>
          <p className="font-semibold text-sm sm:text-base">Categories</p>
        </div>

        {/* Page Title & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 pb-5 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-gray-900 tracking-tight">
            Home & Lifestyle
          </h1>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search Home items..."
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
              <h3 className="text-lg font-bold text-gray-800 mb-1">No Home Products Found</h3>
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
