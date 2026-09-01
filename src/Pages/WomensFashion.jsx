import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { ProductCardSkeleton } from "../Components/SkeletonLoader";
import ErrorMessage from "../Components/ErrorMessage";
import FastDelivery from "../Components/FastDelivery";
import { FaSearch, FaSlidersH } from "react-icons/fa";

const SUBCATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "dresses", name: "Dresses & Gowns" },
  { id: "shoes", name: "Footwear & Heels" },
  { id: "bags", name: "Handbags & Purses" },
  { id: "jewellery", name: "Jewelry & Luxury" },
  { id: "tops", name: "Tops & Blouses" },
  { id: "watches", name: "Watches & Accessories" },
];

const FALLBACK_WOMENS_PRODUCTS = [
  {
    id: 901,
    title: "Elegant Floral Summer Dress",
    name: "Elegant Floral Summer Dress",
    price: 69,
    originalPriceNumber: 99,
    formattedPrice: "$69",
    originalPrice: "$99",
    discount: "-30%",
    discountPercentage: 30,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 124,
    stock: 22,
    category: "womens-dresses",
    brand: "SavvyCouture",
    description: "Breathable lightweight floral dress designed for effortless summer elegance.",
  },
  {
    id: 902,
    title: "Classic Leather Shoulder Handbag",
    name: "Classic Leather Shoulder Handbag",
    price: 119,
    originalPriceNumber: 159,
    formattedPrice: "$119",
    originalPrice: "$159",
    discount: "-25%",
    discountPercentage: 25,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 88,
    stock: 14,
    category: "womens-bags",
    brand: "LuxeLeather",
    description: "Handcrafted genuine leather handbag with spacious compartments and premium metallic hardware.",
  },
  {
    id: 903,
    title: "Crystal Embedded Rose Gold Watch",
    name: "Crystal Embedded Rose Gold Watch",
    price: 149,
    originalPriceNumber: 199,
    formattedPrice: "$149",
    originalPrice: "$199",
    discount: "-25%",
    discountPercentage: 25,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: 65,
    stock: 10,
    category: "womens-watches",
    brand: "AuraTime",
    description: "Stunning rose gold analog wristwatch studded with Swarovski crystals.",
  },
  {
    id: 904,
    title: "Designer High Heel Stilettos",
    name: "Designer High Heel Stilettos",
    price: 89,
    originalPriceNumber: 129,
    formattedPrice: "$89",
    originalPrice: "$129",
    discount: "-31%",
    discountPercentage: 31,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80",
    rating: 4.6,
    ratingCount: 92,
    stock: 18,
    category: "womens-shoes",
    brand: "VelvetStep",
    description: "Sleek pointed-toe pumps crafted with ergonomic cushioning for all-day glamour.",
  },
  {
    id: 905,
    title: "18K Gold Plated Statement Necklace",
    name: "18K Gold Plated Statement Necklace",
    price: 79,
    originalPriceNumber: 110,
    formattedPrice: "$79",
    originalPrice: "$110",
    discount: "-28%",
    discountPercentage: 28,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 140,
    stock: 30,
    category: "womens-jewellery",
    brand: "GildedShine",
    description: "Hypoallergenic tarnish-proof gold necklace designed to elevate any evening attire.",
  },
  {
    id: 906,
    title: "Silk Touch Satin Blouse",
    name: "Silk Touch Satin Blouse",
    price: 49,
    originalPriceNumber: 69,
    formattedPrice: "$49",
    originalPrice: "$69",
    discount: "-29%",
    discountPercentage: 29,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
    rating: 4.5,
    ratingCount: 77,
    stock: 25,
    category: "tops",
    brand: "SavvyCouture",
    description: "Soft satin button-down shirt with structured cuffs and a relaxed elegant fit.",
  },
];

export default function WomensFashion() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSub, setSelectedSub] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchFashionProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const categoriesToFetch = ["womens-dresses", "womens-shoes", "womens-bags", "womens-jewellery", "tops"];
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
          image: p.thumbnail || p.images?.[0] || "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
          rating: p.rating || 4.7,
          ratingCount: p.reviews ? p.reviews.length * 12 : 55,
          stock: p.stock || 15,
          category: p.category,
          brand: p.brand || "SavvyCouture",
          description: p.description,
        }));

        const combined = [...normalizedApi, ...FALLBACK_WOMENS_PRODUCTS];
        const unique = Array.from(new Map(combined.map((item) => [item.id, item])).values());
        setProducts(unique);
      } catch (err) {
        console.error("Error fetching women's fashion:", err);
        setProducts(FALLBACK_WOMENS_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchFashionProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSub =
      selectedSub === "all"
        ? true
        : p.category.toLowerCase().includes(selectedSub.toLowerCase()) ||
          (selectedSub === "shoes" && p.category.includes("shoes")) ||
          (selectedSub === "dresses" && p.category.includes("dresses")) ||
          (selectedSub === "bags" && p.category.includes("bags")) ||
          (selectedSub === "jewellery" && (p.category.includes("jewel") || p.category.includes("jewellery"))) ||
          (selectedSub === "tops" && p.category.includes("top"));

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
          <span className="font-semibold text-gray-900">Women's Fashion</span>
        </nav>

        {/* Exclusive Header Tag */}
        <div className="flex items-center text-red-500 gap-2 mb-2">
          <div className="bg-red-500 w-4 h-8 sm:w-5 sm:h-10 rounded-[3px]"></div>
          <p className="font-semibold text-sm sm:text-base">Categories</p>
        </div>

        {/* Page Title & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 pb-5 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-gray-900 tracking-tight">
            Women's Fashion
          </h1>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search Women's..."
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
              <h3 className="text-lg font-bold text-gray-800 mb-1">No Fashion Products Found</h3>
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
