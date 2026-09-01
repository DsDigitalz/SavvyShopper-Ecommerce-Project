import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { ProductCardSkeleton } from "../Components/SkeletonLoader";
import ErrorMessage from "../Components/ErrorMessage";
import FastDelivery from "../Components/FastDelivery";
import { FaSearch } from "react-icons/fa";

const SUBCATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "groceries", name: "Fresh Groceries & Pantry" },
  { id: "pet-food", name: "Pet Food & Nutrition" },
  { id: "pet-toys", name: "Pet Toys & Accessories" },
  { id: "beverages", name: "Organic Beverages & Tea" },
];

const FALLBACK_GROCERIES_PRODUCTS = [
  {
    id: 961,
    title: "Organic Pure Cold-Pressed Extra Virgin Olive Oil (1L)",
    name: "Organic Pure Cold-Pressed Extra Virgin Olive Oil (1L)",
    price: 18,
    originalPriceNumber: 26,
    formattedPrice: "$18",
    originalPrice: "$26",
    discount: "-30%",
    discountPercentage: 30,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 380,
    stock: 50,
    category: "groceries",
    brand: "NatureHarvest",
    description: "Single-origin unrefined extra virgin olive oil bottled directly from Mediterranean groves.",
  },
  {
    id: 962,
    title: "Premium Grain-Free Salmon Adult Dog Food (5kg)",
    name: "Premium Grain-Free Salmon Adult Dog Food (5kg)",
    price: 42,
    originalPriceNumber: 60,
    formattedPrice: "$42",
    originalPrice: "$60",
    discount: "-30%",
    discountPercentage: 30,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 190,
    stock: 30,
    category: "pet-food",
    brand: "PawsitiveLife",
    description: "High-protein dry dog food infused with wild salmon oil for healthy coat and joint mobility.",
  },
  {
    id: 963,
    title: "Interactive Feather Cat Wand & Toy Set",
    name: "Interactive Feather Cat Wand & Toy Set",
    price: 15,
    originalPriceNumber: 22,
    formattedPrice: "$15",
    originalPrice: "$22",
    discount: "-31%",
    discountPercentage: 31,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 220,
    stock: 40,
    category: "pet-toys",
    brand: "PawsitiveLife",
    description: "Durable flexible wand with interchangeable catnip bells and natural feathers.",
  },
  {
    id: 964,
    title: "Artisanal Roasted Organic Whole Coffee Beans (1kg)",
    name: "Artisanal Roasted Organic Whole Coffee Beans (1kg)",
    price: 26,
    originalPriceNumber: 38,
    formattedPrice: "$26",
    originalPrice: "$38",
    discount: "-31%",
    discountPercentage: 31,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 450,
    stock: 60,
    category: "beverages",
    brand: "RoastMaster",
    description: "Medium-dark Arabica whole bean coffee with rich caramel notes and low acidity.",
  },
  {
    id: 965,
    title: "Orthopedic Memory Foam Pet Bed",
    name: "Orthopedic Memory Foam Pet Bed",
    price: 49,
    originalPriceNumber: 75,
    formattedPrice: "$49",
    originalPrice: "$75",
    discount: "-34%",
    discountPercentage: 34,
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 165,
    stock: 18,
    category: "pet-toys",
    brand: "PawsitiveLife",
    description: "Washable plush fleece pet bed with high-density orthopedic support base.",
  },
  {
    id: 966,
    title: "Raw Unfiltered Wildflower Honey (500g)",
    name: "Raw Unfiltered Wildflower Honey (500g)",
    price: 16,
    originalPriceNumber: 24,
    formattedPrice: "$16",
    originalPrice: "$24",
    discount: "-33%",
    discountPercentage: 33,
    image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 290,
    stock: 45,
    category: "groceries",
    brand: "NatureHarvest",
    description: "100% pure raw enzymatic wildflower honey packed directly from local apiaries.",
  },
];

export default function GroceriesPets() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSub, setSelectedSub] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchGroceries = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://dummyjson.com/products/category/groceries");
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
          image: p.thumbnail || p.images?.[0] || "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=80",
          rating: p.rating || 4.7,
          ratingCount: p.reviews ? p.reviews.length * 10 : 50,
          stock: p.stock || 20,
          category: "groceries",
          brand: p.brand || "NatureHarvest",
          description: p.description,
        }));

        const combined = [...normalized, ...FALLBACK_GROCERIES_PRODUCTS];
        const unique = Array.from(new Map(combined.map((item) => [item.id, item])).values());
        setProducts(unique);
      } catch (err) {
        console.error("Error fetching groceries & pets:", err);
        setProducts(FALLBACK_GROCERIES_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchGroceries();
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSub =
      selectedSub === "all"
        ? true
        : p.category === selectedSub ||
          (selectedSub === "groceries" && p.category.includes("grocer")) ||
          (selectedSub === "pet-food" && (p.category.includes("pet") || p.title.toLowerCase().includes("dog") || p.title.toLowerCase().includes("cat")));

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
          <span className="font-semibold text-gray-900">Groceries & Pets</span>
        </nav>

        {/* Exclusive Header Tag */}
        <div className="flex items-center text-red-500 gap-2 mb-2">
          <div className="bg-red-500 w-4 h-8 sm:w-5 sm:h-10 rounded-[3px]"></div>
          <p className="font-semibold text-sm sm:text-base">Categories</p>
        </div>

        {/* Page Title & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 pb-5 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-gray-900 tracking-tight">
            Groceries & Pets
          </h1>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search Groceries..."
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
              <h3 className="text-lg font-bold text-gray-800 mb-1">No Pantry Products Found</h3>
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
