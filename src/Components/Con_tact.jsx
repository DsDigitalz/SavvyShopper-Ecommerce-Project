import React from "react";
import iconsphone from "./Assets/icons-phone.png";
import iconsmail from "./Assets/icons-mail.png";

export default function Con_tact() {
  return (
    <section className="contact flex pt-[200px] px-20 gap-[36px]">
      <div className="border-zinc-100 border-1 shadow-lg w-[340px] p-10">
        <div className="border-zinc-400 border-b-1 w-[280px]">
          <div className="flex items-center gap-[16px] font-medium mb-[32px]">
            <img src={iconsphone} alt="" />
            <h1>Call To Us</h1>
          </div>
          <div>
            <p className="text-[14px] mb-[16px]">
              We are available 24/7, 7 days a week.{" "}
            </p>
            <p className="text-[14px] mb-[32px]">Phone: +8801611112222</p>
          </div>
        </div>
        <div className="mt-[32px]">
          <div className="flex items-center gap-[16px] font-medium mb-[32px]">
            <img src={iconsmail} alt="" />
            <h1>Write To Us</h1>
          </div>
          <div>
            <p className="text-[14px] mb-[16px]">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-[14px] mb-[16px]">
              Emails: customer@exclusive.com
            </p>
            <p className="text-[14px]">Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] border-zinc-100 border-1 shadow-lg w-[100%] p-10">
        <div className="flex gap-[16px] h-12 mx-auto">
          <div className="bg-zinc-100 w-[235px] p-3">
            <input
              type="text"
              name="fullname"
              id=""
              placeholder="Your Name"
              className="outline-none"
            />
          </div>
          <div className="bg-zinc-100 w-[235px] p-3">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
              className="outline-none"
            />
          </div>
          <div className="bg-zinc-100 w-[235px] p-3">
            <input
              type="text"
              name="phone no"
              id="phone no"
              placeholder="Your Phone No"
              className="outline-none"
            />
          </div>
        </div>
        <div className="bg-zinc-100 w-[737px] h-[207px] p-3 mx-auto">
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            className="w-full h-full outline-none"
          ></textarea>
        </div>

        <button className="bg-red-500 text-white p-3 w-[20%] mx-auto cursor-pointer active:bg-red-600">
          Send Message
        </button>
      </div>
    </section>
  );
}
