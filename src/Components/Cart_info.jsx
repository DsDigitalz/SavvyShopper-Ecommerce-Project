import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import Modal from "./Modal";
import toast from "react-hot-toast";

export default function Cart_info() {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal, shipping, total } = useCart();
  const [modalOpen, setModalOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const navigate = useNavigate();

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      toast.error("Please enter a coupon code.");
      return;
    }
    if (couponCode.toLowerCase() === "savvyshopper" || couponCode.toLowerCase() === "discount10") {
      setAppliedDiscount(0.1);
      toast.success("Coupon applied! 10% discount added.");
      handleCloseModal();
    } else {
      toast.error("Invalid coupon code. Try 'SAVVYSHOPPER'");
    }
  };

  const discountAmount = subtotal * appliedDiscount;
  const finalTotal = Math.max(0, total - discountAmount);

  if (cart.length === 0) {
    return (
      <div className="pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="bg-red-50 p-6 rounded-3xl text-red-500 text-5xl mb-6 shadow-inner">
          <FaShoppingBag />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Your Shopping Cart is Empty
        </h2>
        <p className="text-zinc-500 max-w-md mb-8 text-sm sm:text-base leading-relaxed">
          Looks like you haven't added any electronics or gadgets to your cart yet.
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
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="text-xs sm:text-sm text-red-500 hover:underline font-bold cursor-pointer"
        >
          Clear Cart
        </button>
      </div>

      <section className="bg-zinc-50 p-4 sm:p-8 rounded-2xl border border-zinc-200">
        {/* Table Header (Desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-4 bg-white p-4 rounded-xl border border-zinc-200 font-semibold text-gray-700 text-sm shadow-sm">
          <div className="col-span-6">Product</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-2 text-center">Quantity</div>
          <div className="col-span-2 text-right">Subtotal</div>
        </div>

        {/* Cart Item Rows */}
        <div className="space-y-4 mt-4">
          {cart.map(({ product, quantity }) => {
            const itemSubtotal = product.price * quantity;

            return (
              <div
                key={product.id}
                className="flex flex-col md:grid md:grid-cols-12 gap-4 items-center bg-white p-4 rounded-xl border border-zinc-200 shadow-sm hover:border-zinc-300 transition"
              >
                {/* Product Thumbnail & Details */}
                <div className="flex items-center gap-4 col-span-6 w-full">
                  <button
                    onClick={() => removeFromCart(product.id)}
                    aria-label="Remove item"
                    className="text-zinc-400 hover:text-red-500 transition p-1 cursor-pointer"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                  <img
                    src={product.image}
                    alt={product.title || product.name}
                    className="w-16 h-16 object-contain bg-zinc-50 p-2 rounded-lg border border-zinc-100 flex-shrink-0"
                    onError={(e) => {
                      e.target.src = "/bag.png";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${product.id}`}
                      className="font-semibold text-gray-900 text-sm sm:text-base hover:text-red-500 transition line-clamp-1"
                    >
                      {product.title || product.name}
                    </Link>
                    <p className="text-xs text-zinc-400 capitalize">{product.category}</p>
                  </div>
                </div>

                {/* Unit Price */}
                <div className="col-span-2 text-center w-full md:w-auto flex md:block justify-between items-center text-sm font-semibold text-gray-800">
                  <span className="md:hidden text-zinc-500 font-normal">Price:</span>
                  <span>{product.formattedPrice || `$${product.price}`}</span>
                </div>

                {/* Quantity Controls */}
                <div className="col-span-2 flex items-center justify-center gap-2 w-full md:w-auto">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="w-8 h-8 rounded-lg bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700 transition cursor-pointer"
                  >
                    <FaMinus className="text-xs" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => updateQuantity(product.id, e.target.value)}
                    className="w-12 text-center p-1 font-semibold text-sm border border-zinc-200 rounded-lg outline-none"
                  />
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700 transition cursor-pointer"
                  >
                    <FaPlus className="text-xs" />
                  </button>
                </div>

                {/* Item Subtotal */}
                <div className="col-span-2 text-right w-full md:w-auto flex md:block justify-between items-center text-sm font-bold text-red-500">
                  <span className="md:hidden text-zinc-500 font-normal">Subtotal:</span>
                  <span>${itemSubtotal.toLocaleString()}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
          <button
            onClick={() => navigate("/shop")}
            className="font-semibold text-sm border border-zinc-300 py-3 px-6 rounded-lg hover:bg-zinc-100 transition cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>

        {/* Coupon + Cart Summary */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mt-10">
          {/* Coupon Input */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto h-fit">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="w-full sm:w-[260px] p-3 border border-zinc-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Coupon Code (e.g. SAVVYSHOPPER)"
            />
            <button
              onClick={handleApplyCoupon}
              className="font-semibold w-full sm:w-auto bg-zinc-900 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition text-sm cursor-pointer whitespace-nowrap"
            >
              Apply Coupon
            </button>
          </div>

          {/* Cart Total Breakdown */}
          <div className="w-full lg:w-[380px] bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-zinc-100 pb-3">
              Cart Total
            </h3>

            <div className="flex justify-between text-sm text-zinc-600">
              <span>Subtotal:</span>
              <span className="font-semibold text-gray-900">${subtotal.toLocaleString()}</span>
            </div>

            {appliedDiscount > 0 && (
              <div className="flex justify-between text-sm text-emerald-600">
                <span>Discount (10%):</span>
                <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between text-sm text-zinc-600">
              <span>Shipping:</span>
              <span className="font-semibold text-gray-900">
                {shipping === 0 ? <span className="text-emerald-600 font-bold">Free</span> : `$${shipping}`}
              </span>
            </div>

            <div className="border-t border-zinc-200 pt-3 flex justify-between text-base font-bold text-gray-900">
              <span>Total:</span>
              <span className="text-xl text-red-500">${finalTotal.toFixed(2)}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white font-semibold p-3.5 rounded-xl shadow-md transition text-center cursor-pointer active:scale-98"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
