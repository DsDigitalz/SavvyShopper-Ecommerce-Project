import React, { useState } from "react";
import desktop from "./Assets/desktop.png";
import game_pad from "./Assets/game_pad.png";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

export default function Cart_info() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="cart bg-zinc-100">
      <section className="px-4 sm:px-10 lg:px-20 py-10 sm:py-20 my-10 sm:my-20">
        {/* Header Row */}
        <div className="hidden md:flex justify-between items-center bg-white shadow p-4 rounded">
          <div className="flex gap-20">
            <p className="font-medium">Product</p>
            <p className="font-medium">Price</p>
          </div>
          <div className="flex gap-20">
            <p className="font-medium">Quantity</p>
            <p className="font-medium">Subtotal</p>
          </div>
        </div>

        {/* Cart Items */}
        <div className="space-y-6 mt-6">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between bg-white shadow p-4 rounded gap-4">
            <div className="flex items-center gap-3 flex-1">
              <img
                src={desktop}
                alt="LCD Monitor"
                className="w-16 sm:w-20 h-auto"
              />
              <p className="text-sm sm:text-base font-medium">LCD Monitor</p>
            </div>

            <p className="text-sm sm:text-base">$650</p>

            <div className="w-[80px]">
              <input
                type="number"
                name="quantity1"
                placeholder="01"
                className="w-full p-2 border border-zinc-300 rounded outline-none"
              />
            </div>

            <p className="text-sm sm:text-base font-semibold">$650</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between bg-white shadow p-4 rounded gap-4">
            <div className="flex items-center gap-3 flex-1">
              <img
                src={game_pad}
                alt="H1 Gamepad"
                className="w-16 sm:w-20 h-auto"
              />
              <p className="text-sm sm:text-base font-medium">H1 Gamepad</p>
            </div>

            <p className="text-sm sm:text-base">$550</p>

            <div className="w-[80px]">
              <input
                type="number"
                name="quantity2"
                placeholder="01"
                className="w-full p-2 border border-zinc-300 rounded outline-none"
              />
            </div>

            <p className="text-sm sm:text-base font-semibold">$1100</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
          <button className="font-medium w-full sm:w-[218px] border border-zinc-300 p-3 rounded hover:bg-zinc-100 transition">
            Return To Shop
          </button>
          <button className="font-medium w-full sm:w-[218px] border border-zinc-300 p-3 rounded hover:bg-zinc-100 transition">
            Update Cart
          </button>
        </div>

        {/* Coupon + Cart Total */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 bg-white p-6 sm:p-10 mt-10 rounded shadow">
          {/* Coupon Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <input
              type="text"
              name="coupon_code"
              id="coupon_code"
              className="w-full sm:w-[300px] p-3 border border-zinc-300 rounded outline-none"
              placeholder="Coupon Code"
            />
            <button
              className="font-medium w-full sm:w-[218px] bg-red-500 text-white p-3 rounded hover:bg-red-600 transition"
              onClick={handleOpenModal}
            >
              Apply Coupon
            </button>
          </div>

          {/* Cart Total Section */}
          <div className="w-full lg:w-[400px] border border-zinc-300 rounded p-6 flex flex-col gap-4">
            <h1 className="text-lg sm:text-xl font-semibold mb-2">
              Cart Total
            </h1>

            <div className="border-b border-zinc-300 flex justify-between pb-3 text-sm sm:text-base">
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>

            <div className="border-b border-zinc-300 flex justify-between pb-3 text-sm sm:text-base">
              <p>Shipping:</p>
              <p>Free</p>
            </div>

            <div className="flex justify-between pb-3 text-sm sm:text-base font-semibold">
              <p>Total:</p>
              <p>$1750</p>
            </div>

            <NavLink to="/checkout" className="mt-3">
              <button className="font-medium w-full bg-red-500 text-white p-3 rounded hover:bg-red-600 transition">
                Proceed to Checkout
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Coupon Modal */}
      {modalOpen && (
        <Modal handleClose={handleCloseModal} title="Apply Your Coupon">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-medium">Enter a valid coupon code</h3>
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full p-2 border border-gray-300 rounded-md my-4 outline-none"
            />
            <button
              onClick={handleCloseModal}
              className="w-full p-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Confirm
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
