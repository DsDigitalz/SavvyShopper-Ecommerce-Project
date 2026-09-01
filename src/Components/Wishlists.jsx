import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaTrash, FaShoppingCart } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";

export default function Wishlists() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleMoveAllToCart = () => {
    wishlist.forEach((item) => {
      addToCart(item, 1);
    });
    clearWishlist();
  };

  if (wishlist.length === 0) {
    return (
      <div className="pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="bg-red-50 p-6 rounded-3xl text-red-500 text-5xl mb-6 shadow-inner">
          <FaHeart />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Your Wishlist is Empty
        </h2>
        <p className="text-zinc-500 max-w-md mb-8 text-sm sm:text-base leading-relaxed">
          Save your favorite smartphones, gadgets, and tech accessories here to buy them later.
        </p>
        <Link
          to="/shop"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition duration-200 cursor-pointer text-sm"
        >
          Explore Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-zinc-500 mb-8 flex items-center gap-2">
        <Link to="/home" className="hover:text-red-500 transition">
          Home
        </Link>
        <span>/</span>
        <span className="font-semibold text-gray-900">Wishlist</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Wishlist ({wishlist.length})
        </h1>
        <div className="flex gap-4">
          <button
            onClick={handleMoveAllToCart}
            className="flex items-center gap-2 bg-zinc-900 hover:bg-red-500 text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-xl shadow-md transition cursor-pointer active:scale-98"
          >
            <FaShoppingCart />
            <span>Move All To Cart</span>
          </button>
        </div>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
