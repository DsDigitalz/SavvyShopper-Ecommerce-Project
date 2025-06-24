import React from "react";
import desktop from "./Assets/desktop.png";
import game_pad from "./Assets/game_pad.png";
import { NavLink } from "react-router";
export default function Cart_info() {
  return (
    <div className="cart bg-zinc-100">
      <section className="bg-white-[180px] px-20 py-20 my-20">
        <div className="flex px-20 shadow p-5 items-center bg-white">
          <div className="flex gap-[360px]">
            <div>
              <p>Product</p>
            </div>
            <div>
              <p className="">Price</p>
            </div>
          </div>

          <div className="flex px-68 gap-68">
            <div>
              <p>Quantity</p>
            </div>
            <div>
              <p>Subtotal</p>
            </div>
          </div>
        </div>
        <div className="bg-white flex items-center justify-between px-20 shadow p-5 my-[40px]">
          <div className="flex items-center gap-3">
            <img src={desktop} alt="" />
            <p>LCD Monitor</p>
          </div>
          <div>
            <p>$650</p>
          </div>
          <div className="w-[90px] p-3">
            <input
              type="number"
              name="number"
              id="number"
              placeholder="01"
              className="w-full p-2 "
            />
          </div>
          <div>
            <p>$650</p>
          </div>
        </div>
        <div className="bg-white flex items-center justify-between px-20 shadow p-5 my-[40px]">
          <div className="flex items-center gap-3">
            <img src={game_pad} alt="" />
            <p>H1 Gamepad</p>
          </div>
          <div>
            <p>$550</p>
          </div>
          <div className="w-[90px] p-3">
            <input
              type="number"
              name="number"
              id="number"
              placeholder="01"
              className="w-full p-2 "
            />
          </div>
          <div>
            <p>$1100</p>
          </div>
        </div>
        <div className="bg-white flex justify-between">
          <button className="font-medium w-[218px] border-1 border-zinc-300 p-3 cursor-pointer rounded active:bg-zinc-100">
            Return To Shop
          </button>
          <button className="font-medium w-[218px] border-1 border-zinc-300 p-3 cursor-pointer rounded active:bg-zinc-100">
            Update Cart
          </button>
        </div>

        <div className="bg-white p-10 mt-[80px] flex justify-between">
          <div className="flex gap-[16px]">
            <div>
              <input
                type="text"
                name="coupon_code"
                id="coupon_code"
                className="w-[300px] p-3 border-1 border-zinc-300 rounded outline-none"
                placeholder="Coupon Code"
              />
            </div>
            <div>
              <button className="font-medium w-[218px] bg-red-500 text-white p-3 cursor-pointer rounded active:bg-red-600">
                Apply Coupon
              </button>
            </div>
          </div>

          <div className="w-[470px] flex flex-col gap-[10px] border-1 p-7">
            <h1 className="text-[20px] font-medium mb-2">Cart Total</h1>
            <div className="border-b-1 border-zinc-400 flex justify-between pb-3">
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>
            <div className="border-b-1 border-zinc-400 flex justify-between pb-3">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between pb-3">
              <p>Total</p>
              <p>$1750</p>
            </div>
            <div className="flex justify-center">
              <NavLink to="/checkout">
                <button className="font-medium w-[218px] bg-red-500 text-white p-3 cursor-pointer rounded active:bg-red-600">
                  Proceed to checkout
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
