import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaStar, FaHeart, FaRegHeart, FaShoppingCart, FaTruck, FaShieldAlt, FaUndo, FaPlus, FaMinus } from "react-icons/fa";
import { fetchProductById, fetchProducts } from "../services/productService";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { ProductDetailSkeleton } from "../Components/SkeletonLoader";
import ErrorMessage from "../Components/ErrorMessage";
import ProductCard from "../Components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const loadProduct = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProductById(id);
      setProduct(data);
      setSelectedImage(data.image || (data.images && data.images[0]) || "/bag.png");

      // Load related products from same category
      if (data.category) {
        const relatedData = await fetchProducts({ category: data.category, limit: 5 });
        setRelatedProducts(
          (relatedData.products || []).filter((p) => p.id !== data.id).slice(0, 4)
        );
      }
    } catch (err) {
      console.error("Error loading product detail:", err);
      setError("Unable to load product information. It may have been removed or is temporarily unavailable.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <ProductDetailSkeleton />;
  if (error || !product) return <ErrorMessage message={error} onRetry={loadProduct} />;

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="text-xs sm:text-sm text-zinc-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link to="/home" className="hover:text-red-500 transition">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-red-500 transition">Shop</Link>
        <span>/</span>
        <span className="capitalize">{product.category}</span>
        <span>/</span>
        <span className="text-gray-900 font-semibold truncate max-w-[200px] sm:max-w-xs">{product.title}</span>
      </nav>

      {/* Main Product Details Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white p-6 sm:p-10 rounded-3xl border border-zinc-200 shadow-sm mb-16 items-start">
        {/* Left Column: Image Gallery (5 cols) */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 flex items-center justify-center min-h-[350px] sm:min-h-[420px] relative overflow-hidden">
            {product.discount && (
              <span className="absolute top-4 left-4 bg-red-500 text-white font-bold text-xs px-3 py-1 rounded-lg shadow-sm">
                {product.discount}
              </span>
            )}
            <img
              src={selectedImage}
              alt={product.title}
              className="max-h-[360px] max-w-full object-contain hover:scale-105 transition duration-300"
              onError={(e) => {
                e.target.src = "/bag.png";
              }}
            />
          </div>

          {/* Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 rounded-xl bg-zinc-50 border p-1.5 flex items-center justify-center flex-shrink-0 cursor-pointer transition ${
                    selectedImage === img ? "border-red-500 ring-2 ring-red-500/20" : "border-zinc-200 hover:border-zinc-400"
                  }`}
                >
                  <img src={img} alt="" className="max-h-full max-w-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Information & Buying Actions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div>
            {/* Category & Brand */}
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">
              <span>{product.brand}</span>
              <span>•</span>
              <span className="text-red-500">{product.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
              {product.title}
            </h1>

            {/* Ratings & Stock Status */}
            <div className="flex items-center gap-4 text-xs sm:text-sm mb-4">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.floor(product.rating) ? "fill-amber-400" : "text-zinc-300"}
                  />
                ))}
                <span className="text-gray-800 font-bold ml-1">{product.rating}</span>
                <span className="text-zinc-400">({product.ratingCount} reviews)</span>
              </div>

              <span className="text-zinc-300">|</span>

              <span
                className={`font-bold px-3 py-1 rounded-full text-xs ${
                  product.stock > 0 ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                }`}
              >
                {product.availabilityStatus || (product.stock > 0 ? "In Stock" : "Out of Stock")}
              </span>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-extrabold text-red-500">{product.formattedPrice || `$${product.price}`}</span>
              {product.originalPrice && (
                <span className="text-base text-zinc-400 line-through font-medium">{product.originalPrice}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-zinc-600 text-sm leading-relaxed mb-6 border-t border-b border-zinc-100 py-4">
              {product.description}
            </p>

            {/* Quantity Selector & Action Buttons */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center border border-zinc-300 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition cursor-pointer"
                  >
                    <FaMinus className="text-xs" />
                  </button>
                  <span className="w-12 text-center font-bold text-sm text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition cursor-pointer"
                  >
                    <FaPlus className="text-xs" />
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition cursor-pointer active:scale-98 text-sm"
                >
                  <FaShoppingCart />
                  <span>Buy Now / Add to Cart</span>
                </button>

                {/* Add to Wishlist */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3.5 border rounded-xl shadow-xs transition cursor-pointer ${
                    inWishlist
                      ? "border-red-500 bg-red-50 text-red-500"
                      : "border-zinc-300 bg-white text-zinc-700 hover:border-red-500 hover:text-red-500"
                  }`}
                  aria-label="Wishlist"
                >
                  {inWishlist ? <FaHeart className="text-lg" /> : <FaRegHeart className="text-lg" />}
                </button>
              </div>
            </div>

            {/* Value Proposition Badges */}
            <div className="border border-zinc-200 rounded-2xl p-4 divide-y divide-zinc-200 bg-zinc-50/50 space-y-3">
              <div className="flex items-center gap-3 pt-1 text-xs text-gray-700">
                <FaTruck className="text-red-500 text-base flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">{product.shippingInformation || "Free Express Delivery"}</p>
                  <p className="text-zinc-500 text-[11px]">Enter your postal code for delivery availability</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-3 text-xs text-gray-700">
                <FaUndo className="text-red-500 text-base flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">{product.returnPolicy || "30 Days Return Guarantee"}</p>
                  <p className="text-zinc-500 text-[11px]">Free return policy on all eligible tech items</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-3 text-xs text-gray-700">
                <FaShieldAlt className="text-red-500 text-base flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">{product.warrantyInformation || "1 Year Manufacturer Warranty"}</p>
                  <p className="text-zinc-500 text-[11px]">100% Authentic product warranty included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <div className="flex items-center text-red-500 gap-2 mb-3">
            <div className="bg-red-500 w-4 sm:w-5 h-8 sm:h-9 rounded-[4px]" />
            <p className="font-bold text-sm sm:text-base tracking-wide">Related Items</p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
            Explore Similar Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

