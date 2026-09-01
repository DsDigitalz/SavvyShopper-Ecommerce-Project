import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { ProductCardSkeleton } from "../Components/SkeletonLoader";
import ErrorMessage from "../Components/ErrorMessage";
import FastDelivery from "../Components/FastDelivery";
import { FaSearch } from "react-icons/fa";

const SUBCATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "fitness", name: "Fitness & Gym Gear" },
  { id: "sports-accessories", name: "Sports Accessories" },
  { id: "camping", name: "Camping & Outdoor" },
  { id: "athletics", name: "Athletic Wear" },
];

const FALLBACK_SPORTS_PRODUCTS = [
  {
    id: 951,
    title: "Pro Adjustable Resistance Fitness Dumbbells",
    name: "Pro Adjustable Resistance Fitness Dumbbells",
    price: 129,
    originalPriceNumber: 179,
    formattedPrice: "$129",
    originalPrice: "$179",
    discount: "-28%",
    discountPercentage: 28,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 140,
    stock: 15,
    category: "fitness",
    brand: "TitanFit",
    description: "Compact space-saving dial adjustable dumbbells ranging from 5lbs to 52.5lbs.",
  },
  {
    id: 952,
    title: "Waterproof 4-Person Camping Dome Tent",
    name: "Waterproof 4-Person Camping Dome Tent",
    price: 99,
    originalPriceNumber: 140,
    formattedPrice: "$99",
    originalPrice: "$140",
    discount: "-29%",
    discountPercentage: 29,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 98,
    stock: 12,
    category: "camping",
    brand: "WildPeak",
    description: "Double-layer weather-resistant dome tent with pop-up setup mechanism and ventilation rainfly.",
  },
  {
    id: 953,
    title: "Non-Slip Eco-Friendly TPE Yoga Mat",
    name: "Non-Slip Eco-Friendly TPE Yoga Mat",
    price: 35,
    originalPriceNumber: 50,
    formattedPrice: "$35",
    originalPrice: "$50",
    discount: "-30%",
    discountPercentage: 30,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 310,
    stock: 45,
    category: "fitness",
    brand: "ZenFlow",
    description: "Extra thick 6mm dual-sided textured yoga mat with carrying strap included.",
  },
  {
    id: 954,
    title: "Smart GPS Fitness Tracker Sport Watch",
    name: "Smart GPS Fitness Tracker Sport Watch",
    price: 89,
    originalPriceNumber: 125,
    formattedPrice: "$89",
    originalPrice: "$125",
    discount: "-29%",
    discountPercentage: 29,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: 165,
    stock: 22,
    category: "sports-accessories",
    brand: "PulsePacer",
    description: "Multi-sport activity tracking watch with heart rate monitor, sleep tracking, and 50m waterproof rating.",
  },
  {
    id: 955,
    title: "Thermal Insulated Stainless Water Bottle (1L)",
    name: "Thermal Insulated Stainless Water Bottle (1L)",
    price: 25,
    originalPriceNumber: 38,
    formattedPrice: "$25",
    originalPrice: "$38",
    discount: "-34%",
    discountPercentage: 34,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 420,
    stock: 50,
    category: "camping",
    brand: "HydroVault",
    description: "Double-wall vacuum insulated flask keeping drinks cold for 24 hours or hot for 12 hours.",
  },
  {
    id: 956,
    title: "Professional Composite Leather Basketball",
    name: "Professional Composite Leather Basketball",
    price: 39,
    originalPriceNumber: 55,
    formattedPrice: "$39",
    originalPrice: "$55",
    discount: "-29%",
    discountPercentage: 29,
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 175,
    stock: 28,
    category: "sports-accessories",
    brand: "ProCourts",
    description: "Official indoor/outdoor size 7 basketball engineered with deep channels for ultimate grip control.",
  },
];

export default function SportsOutdoor() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSub, setSelectedSub] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchSportsProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://dummyjson.com/products/category/sports-accessories");
        const data = await res.json();
        const normalized = (data.products || []).map((p) => ({
          id: p.id,
          title: p.title,
          name: p.title,
          price: p.price,
          originalPriceNumber: Math.round(p.price * 1.3),
          formattedPrice: `$${p.price}`,
          originalPrice: `$${Math.round(p.price * 1.3)}`,
          discount: `-${Math.round(p.discountPercentage || 20)}%`,
          discountPercentage: Math.round(p.discountPercentage || 20),
          image: p.thumbnail || p.images?.[0] || "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=80",
          rating: p.rating || 4.7,
          ratingCount: p.reviews ? p.reviews.length * 9 : 45,
          stock: p.stock || 15,
          category: p.category,
          brand: p.brand || "TitanFit",
          description: p.description,
        }));

        const combined = [...normalized, ...FALLBACK_SPORTS_PRODUCTS];
        const unique = Array.from(new Map(combined.map((item) => [item.id, item])).values());
        setProducts(unique);
      } catch (err) {
        console.error("Error fetching sports products:", err);
        setProducts(FALLBACK_SPORTS_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchSportsProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSub =
      selectedSub === "all"
        ? true
        : p.category.toLowerCase().includes(selectedSub.toLowerCase()) ||
          (selectedSub === "fitness" && (p.category.includes("fit") || p.title.toLowerCase().includes("dumb") || p.title.toLowerCase().includes("mat"))) ||
          (selectedSub === "camping" && (p.category.includes("camp") || p.title.toLowerCase().includes("tent") || p.title.toLowerCase().includes("bottle"))) ||
          (selectedSub === "sports-accessories" && p.category.includes("sports"));

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
          <span className="font-semibold text-gray-900">Sports & Outdoor</span>
        </nav>

        {/* Exclusive Header Tag */}
        <div className="flex items-center text-red-500 gap-2 mb-2">
          <div className="bg-red-500 w-4 h-8 sm:w-5 sm:h-10 rounded-[3px]"></div>
          <p className="font-semibold text-sm sm:text-base">Categories</p>
        </div>

        {/* Page Title & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 pb-5 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-gray-900 tracking-tight">
            Sports & Outdoor
          </h1>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search Sports..."
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
              <h3 className="text-lg font-bold text-gray-800 mb-1">No Sports Items Found</h3>
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
