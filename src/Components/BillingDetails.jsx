import React from "react";
import desktop from "./Assets/desktop.png";
import game_pad from "./Assets/game_pad.png";
import bankcard from "./Assets/bankcard.png";
export default function BillingDetails() {
  return (
    <section className="billing my-[150px] p-20 flex justify-between">
      <div>
        <h1 className="mb-[48px] text-[36px]">Billing Details</h1>
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="firstName" className="text-zinc-400">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="w-[470px] p-3 bg-zinc-100 outline-none"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="companyName" className="text-zinc-400">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              className="w-[470px] p-3 bg-zinc-100 outline-none"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="streetAddress" className="text-zinc-400">
              Street Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              className="w-[470px] p-3 bg-zinc-100 outline-none"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="apartment" className="text-zinc-400">
              Apartment, floor, etc. (optional){" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="apartment"
              id="apartment"
              className="w-[470px] p-3 bg-zinc-100 outline-none"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="town_city" className="text-zinc-400">
              Town/City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="town_city"
              id="town_city"
              className="w-[470px] p-3 bg-zinc-100 outline-none"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="PhoneNumber" className="text-zinc-400">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="PhoneNumber"
              id="PhoneNumber"
              className="w-[470px] p-3 bg-zinc-100 outline-none"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="emailAddress" className="text-zinc-400">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              className="w-[470px] p-3 bg-zinc-100 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 mt-[24px]">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="bg-black"
          />
          <label>Save this information for faster check-out next time</label>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between mt-25  p-5  w-[527px] h-[100px]">
          <div className="flex items-center gap-3">
            <img src={desktop} alt="" />
            <p>LCD Monitor</p>
          </div>
          <div>
            <p>$650</p>
          </div>
        </div>

        <div className="flex items-center justify-between p-5  w-[527px] h-[100px]">
          <div className="flex items-center gap-3">
            <img src={game_pad} alt="" />
            <p>H1 Gamepad</p>
          </div>
          <div>
            <p>$550</p>
          </div>
        </div>
        <div className="w-full px-5 flex flex-col gap-[10px] mt-4">
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
        </div>
        <div className="flex items-center justify-between mt-[32px] w-full px-5">
          <div className="flex items-center gap-[12px] ">
            <input type="radio" name="bank" id="bank" />
            <label htmlFor="bank">Bank</label>
          </div>
          <div>
            <img src={bankcard} alt="" />
          </div>
        </div>
        <div className="flex items-center gap-[12px] w-full px-5 mt-[32px]">
          <input type="radio" name="bank" id="bank" />
          <label htmlFor="bank">Cash on delivery</label>
        </div>
        <div className="flex gap-[16px] mt-[32px]">
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
        <div className="flex mr-auto">
          <div>
            <button className="font-medium w-[218px] mt-[32px] bg-red-500 text-white p-3 cursor-pointer rounded active:bg-red-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
