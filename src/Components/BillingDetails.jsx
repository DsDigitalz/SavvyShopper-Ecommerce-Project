import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import bankcard from "./Assets/bankcard.png";
import Modal from "./Modal";
import toast from "react-hot-toast";

export default function BillingDetails() {
  const { cart, subtotal, shipping, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    emailAddress: "",
    paymentMethod: "cash",
  });

  const [couponModalOpen, setCouponModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === "savvyshopper" || couponCode.toLowerCase() === "discount10") {
      setAppliedDiscount(0.1);
      toast.success("Coupon applied! 10% discount subtracted.");
      setCouponModalOpen(false);
    } else {
      toast.error("Invalid coupon code. Try 'SAVVYSHOPPER'");
    }
  };

  const discountAmount = subtotal * appliedDiscount;
  const finalTotal = Math.max(0, total - discountAmount);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.streetAddress || !formData.townCity || !formData.phoneNumber || !formData.emailAddress) {
      toast.error("Please fill in all required billing fields marked with *");
      return;
    }
    setOrderModalOpen(true);
  };

  const handleFinishOrder = () => {
    clearCart();
    setOrderModalOpen(false);
    navigate("/home");
  };

  if (cart.length === 0 && !orderModalOpen) {
    return (
      <div className="bg-white px-4 md:px-10 pt-36 pb-20 max-w-7xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Your Cart is Empty
        </h2>
        <p className="text-zinc-500 max-w-md mb-8 text-sm">
          Please add items to your cart before proceeding to checkout.
        </p>
        <Link
          to="/shop"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-200"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT SIDE: BILLING FORM (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-zinc-200 shadow-sm">
            <h1 className="mb-8 text-2xl sm:text-3xl font-extrabold text-gray-900 border-b border-zinc-100 pb-4 tracking-tight">
              Billing Details
            </h1>

            <form onSubmit={handlePlaceOrder} className="flex flex-col gap-5">
              {[
                { id: "firstName", label: "Full Name", required: true },
                { id: "companyName", label: "Company Name", required: false },
                { id: "streetAddress", label: "Street Address", required: true },
                { id: "apartment", label: "Apartment, floor, unit (optional)", required: false },
                { id: "townCity", label: "Town / City", required: true },
                { id: "phoneNumber", label: "Phone Number", required: true, type: "tel" },
                { id: "emailAddress", label: "Email Address", required: true, type: "email" },
              ].map(({ id, label, required, type = "text" }) => (
                <div key={id} className="flex flex-col gap-1.5">
                  <label htmlFor={id} className="text-zinc-700 text-xs sm:text-sm font-semibold">
                    {label} {required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={type}
                    id={id}
                    value={formData[id]}
                    onChange={handleInputChange}
                    required={required}
                    className="w-full p-3 bg-zinc-50 border border-zinc-200 outline-none rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-red-500 focus:bg-white transition"
                  />
                </div>
              ))}

              <div className="flex items-center gap-3 mt-2">
                <input type="checkbox" id="saveInfo" className="w-4 h-4 text-red-500 rounded border-zinc-300 focus:ring-red-500 cursor-pointer" />
                <label htmlFor="saveInfo" className="text-xs sm:text-sm text-zinc-600 cursor-pointer select-none font-medium">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE: ORDER SUMMARY (5 cols) */}
          <div className="lg:col-span-5 bg-zinc-50/80 p-6 sm:p-8 rounded-3xl border border-zinc-200 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 border-b border-zinc-200 pb-4 mb-6 tracking-tight">
                Your Order Summary
              </h2>

              {/* Product List */}
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {cart.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between border-b border-zinc-200/70 pb-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={product.image}
                        alt={product.title || product.name}
                        className="w-12 h-12 object-contain bg-white p-1 rounded-xl border border-zinc-200 flex-shrink-0"
                        onError={(e) => {
                          e.target.src = "/bag.png";
                        }}
                      />
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                          {product.title || product.name}
                        </p>
                        <p className="text-xs text-zinc-500">Qty: {quantity}</p>
                      </div>
                    </div>
                    <p className="font-bold text-sm text-gray-900 ml-2">
                      ${(product.price * quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              {/* Price Calculations */}
              <div className="mt-6 space-y-3 text-sm border-b border-zinc-200 pb-4">
                <div className="flex justify-between text-zinc-600">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-gray-900">${subtotal.toLocaleString()}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount (10%):</span>
                    <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-zinc-600">
                  <span>Shipping:</span>
                  <span className="font-semibold text-gray-900">
                    {shipping === 0 ? <span className="text-emerald-600 font-bold">Free Express</span> : `$${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-zinc-200">
                  <span>Total:</span>
                  <span className="text-xl text-red-500">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mt-6 space-y-3">
                <label className="flex items-center justify-between p-3.5 bg-white border border-zinc-200 rounded-2xl cursor-pointer hover:border-red-500 transition shadow-xs">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === "bank"}
                      onChange={(e) => setFormData((prev) => ({ ...prev, paymentMethod: e.target.value }))}
                      className="text-red-500 focus:ring-red-500 cursor-pointer"
                    />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">Direct Bank Transfer / Card</span>
                  </div>
                  <img src={bankcard} alt="Cards" className="w-12 h-6 object-contain" />
                </label>

                <label className="flex items-center justify-between p-3.5 bg-white border border-zinc-200 rounded-2xl cursor-pointer hover:border-red-500 transition shadow-xs">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={(e) => setFormData((prev) => ({ ...prev, paymentMethod: e.target.value }))}
                      className="text-red-500 focus:ring-red-500 cursor-pointer"
                    />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">Cash on Delivery</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Coupon Code"
                  className="flex-1 p-3 border border-zinc-300 rounded-xl text-xs sm:text-sm outline-none focus:ring-2 focus:ring-red-500 bg-white"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="bg-zinc-900 hover:bg-red-500 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm transition cursor-pointer"
                >
                  Apply
                </button>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold p-4 rounded-xl shadow-lg hover:shadow-red-500/20 transition text-base cursor-pointer active:scale-98"
              >
                Place Order (${finalTotal.toFixed(2)})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Order Confirmation Modal */}
      {orderModalOpen && (
        <Modal handleClose={handleFinishOrder} title="Order Successfully Placed!">
          <div className="flex flex-col items-center text-center p-2">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center text-3xl mb-4">
              ✓
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you for your order!</h3>
            <p className="text-xs sm:text-sm text-zinc-600 mb-6">
              Your order for electronics & gadgets has been confirmed and is now being processed. An email confirmation has been sent to <strong>{formData.emailAddress || "your email"}</strong>.
            </p>
            <button
              onClick={handleFinishOrder}
              className="w-full p-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
