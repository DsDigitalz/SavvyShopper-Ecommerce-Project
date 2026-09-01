import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaStar, FaShoppingCart, FaEye } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  if (!product) return null;

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product, 1);
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    e.preventDefault();
    toggleWishlist(product);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    e.preventDefault();
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="group bg-white border border-zinc-200 hover:border-zinc-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative">
      {/* Top Discount Badge */}
      {product.discount && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-lg z-10 shadow-sm">
          {product.discount}
        </div>
      )}

      {/* Floating Action Icons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
        <button
          onClick={handleToggleWishlist}
          aria-label="Add to Wishlist"
          className="bg-white/90 hover:bg-white text-zinc-700 p-2 rounded-full shadow-md hover:scale-110 transition duration-200 cursor-pointer"
        >
          {inWishlist ? (
            <FaHeart className="text-red-500 text-sm" />
          ) : (
            <FaRegHeart className="text-zinc-600 hover:text-red-500 text-sm" />
          )}
        </button>
        <button
          onClick={handleQuickView}
          aria-label="View Details"
          className="bg-white/90 hover:bg-white text-zinc-700 p-2 rounded-full shadow-md hover:scale-110 transition duration-200 cursor-pointer"
        >
          <FaEye className="text-zinc-600 hover:text-zinc-900 text-sm" />
        </button>
      </div>

      {/* Product Image Container */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden p-6 bg-zinc-50/80 relative group">
        <div className="w-full h-48 sm:h-52 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title || product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              e.target.src = "/bag.png";
            }}
          />
        </div>
      </Link>

      {/* Product Info & Actions */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
        <div>
          {/* Category / Brand */}
          <div className="flex justify-between items-center text-[11px] sm:text-xs text-zinc-400 mb-1 capitalize font-medium">
            <span>{product.category || "Gadget"}</span>
            <span>{product.brand || "Authentic"}</span>
          </div>

          {/* Product Title (guaranteed 2-line height for visual rhythm) */}
          <Link
            to={`/product/${product.id}`}
            className="block text-sm sm:text-base font-semibold text-gray-900 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] hover:text-red-500 transition duration-200 mb-2 leading-snug"
          >
            {product.title || product.name}
          </Link>

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-3 text-amber-400 text-xs sm:text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.floor(product.rating || 4.5)
                    ? "fill-amber-400"
                    : "text-zinc-300"
                }
              />
            ))}
            <span className="text-zinc-500 text-xs ml-1 font-medium">
              ({product.rating || 4.5})
            </span>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="pt-3 border-t border-zinc-100 flex flex-col gap-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-red-500">
              {product.formattedPrice || `$${product.price}`}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-zinc-400 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-zinc-900 hover:bg-red-500 text-white font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-98 text-xs sm:text-sm"
          >
            <FaShoppingCart className="text-xs sm:text-sm" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
