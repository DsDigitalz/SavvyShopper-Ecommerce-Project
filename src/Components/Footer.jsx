import React from "react";
import share from "./Assets/share.png";
import scan from "./Assets/scan.png";
import socials from "./Assets/socials.png";
export default function Footer() {
  return (
    <section className=" bg-black mt-[140px] py-15 flex flex-col justify-center">
      <div className="flex gap-20 flex-wrap  text-white p-10 w-full justify-center">
        <div>
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[24px] font-bold">Exclusive</h1>
            <p className="text-[20px] font-semibold">Subscribe</p>
            <p>Get 10% off your first order</p>

            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="border-gray-400 border-1 rounded-[3px] w-[214px] p-3 outline-none"
              />
              <div className=" top-3 absolute left-[170px]">
                <img src={share} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-[24px] w-[175px]">
            <p className="text-[20px] font-semibold">Support</p>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] w-[175px]">
          <p className="text-[20px] font-semibold">Account</p>
          <p>My Account</p>
          <p>Login/Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="flex flex-col gap-[24px] w-[175px]">
          <p className="text-[20px] font-semibold">Quick Link</p>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col gap-[24px] w-[175px]">
          <p className="text-[20px] font-semibold">Download App</p>
          <p>Save $3 with App New User Only</p>
          <p>Terms Of Use</p>
          <img src={scan} alt="" />
          <img src={socials} alt="" />
        </div>
      </div>
      <div className="mt-[76px] mx-auto text-zinc-400">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </section>
  );
}
