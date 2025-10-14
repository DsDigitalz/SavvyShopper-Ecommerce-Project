import React, { useState } from "react";
import desktop from "./Assets/desktop.png";
import game_pad from "./Assets/game_pad.png";
import bankcard from "./Assets/bankcard.png";
import Modal from "./Modal";

export default function BillingDetails() {
  const [couponModalOpen, setCouponModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <>
      <section className="billing pt-30 my-20 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
        {/* LEFT SIDE: BILLING FORM */}
        <div className="flex-1">
          <h1 className="mb-10 text-2xl md:text-3xl font-semibold">
            Billing Details
          </h1>

          <div className="flex   flex-col gap-6">
            {[
              { id: "firstName", label: "First Name" },
              { id: "companyName", label: "Company Name" },
              { id: "streetAddress", label: "Street Address" },
              { id: "apartment", label: "Apartment, floor, etc. (optional)" },
              { id: "town_city", label: "Town/City" },
              { id: "PhoneNumber", label: "Phone Number" },
              { id: "emailAddress", label: "Email Address" },
            ].map(({ id, label }) => (
              <div key={id} className="flex flex-col gap-2">
                <label htmlFor={id} className="text-zinc-500 text-sm">
                  {label} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id={id}
                  className="w-full  p-3 bg-zinc-100 outline-none rounded"
                />
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 mt-6">
            <input type="checkbox" id="checkbox" className="mt-1" />
            <label htmlFor="checkbox" className="text-sm md:text-base">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        {/* RIGHT SIDE: ORDER SUMMARY */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          {/* Product List */}
          <div className="w-full max-w-[527px] space-y-4">
            {[
              { img: desktop, name: "LCD Monitor", price: "$650" },
              { img: game_pad, name: "H1 Gamepad", price: "$550" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-zinc-200 pb-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 h-10 object-contain"
                  />
                  <p>{item.name}</p>
                </div>
                <p className="font-medium">{item.price}</p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="w-full max-w-[527px] px-2 mt-6 space-y-3 text-sm md:text-base">
            <div className="flex justify-between border-b border-zinc-300 pb-2">
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>
            <div className="flex justify-between border-b border-zinc-300 pb-2">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between">
              <p>Total:</p>
              <p className="font-semibold">$1750</p>
            </div>
          </div>

          {/* Payment Options */}
          <div className="w-full max-w-[527px] mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" />
                <span>Bank</span>
              </label>
              <img src={bankcard} alt="Bank Card" className="w-12 md:w-16" />
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" />
              <span>Cash on Delivery</span>
            </label>
          </div>

          {/* Coupon + Order Buttons */}
          <div className="w-full max-w-[527px] mt-8 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 p-3 border border-zinc-300 rounded outline-none"
            />
            <button
              onClick={() => setCouponModalOpen(true)}
              className="w-full sm:w-[200px] bg-red-500 text-white p-3 rounded font-medium active:bg-red-600"
            >
              Apply Coupon
            </button>
          </div>

          <button
            onClick={() => setOrderModalOpen(true)}
            className="mt-6 w-full max-w-[527px] bg-red-500 text-white p-3 rounded font-medium active:bg-red-600"
          >
            Place Order
          </button>
        </div>
      </section>

      {/* Coupon Modal */}
      {couponModalOpen && (
        <Modal
          handleClose={() => setCouponModalOpen(false)}
          title="Apply Your Coupon"
        >
          <div className="flex flex-col items-center">
            <h3>Enter a valid coupon code</h3>
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full p-2 border border-gray-300 rounded-md my-4 outline-none"
            />
            <button
              onClick={() => setCouponModalOpen(false)}
              className="w-full p-3 bg-red-500 text-white rounded-md cursor-pointer active:bg-red-600"
            >
              Confirm
            </button>
          </div>
        </Modal>
      )}

      {/* Order Modal */}
      {orderModalOpen && (
        <Modal
          handleClose={() => setOrderModalOpen(false)}
          title="Order Placed!"
        >
          <div className="flex flex-col items-center text-center">
            <h3>Thank you for your purchase!</h3>
            <p className="my-4">
              Your order has been placed successfully and will be processed
              shortly. You’ll receive an email confirmation soon.
            </p>
            <button
              onClick={() => setOrderModalOpen(false)}
              className="w-full p-3 bg-red-500 text-white rounded-md cursor-pointer active:bg-red-600"
            >
              Continue Shopping
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
