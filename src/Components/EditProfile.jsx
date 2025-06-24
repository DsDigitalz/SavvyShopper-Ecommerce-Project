import React from "react";

export default function EditProfile() {
  return (
    <section className="flex px-20 mt-[100px] ">
      <div className="mx-auto shadow-xl p-15">
        <h1 className="text-red-500 text-[20px] mb-[16px] font-medium">
          Edit Profile
        </h1>

        <div className="flex gap-[50px]">
          <div>
            <p>First Name</p>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Sanu"
              className="w-[330px] p-3 bg-zinc-100 outline-none"
            />
          </div>
          <div>
            <p>Last Name</p>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Daniel"
              className="w-[330px] p-3 bg-zinc-100 outline-none"
            />
          </div>
        </div>
        <div className="flex gap-[50px] mt-[26px]">
          <div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="sanudaniel@gmail.com"
              className="w-[330px] p-3 bg-zinc-100 outline-none"
            />
          </div>
          <div>
            <p>Address</p>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Kingston, 5236, United State"
              className="w-[330px] p-3 bg-zinc-100 outline-none"
            />
          </div>
        </div>
        <div className="flex gap-[50px] mt-[26px]">
          <div className="flex flex-col gap-[16px]">
            <p>Password Changes</p>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Current Password"
              className="w-[710px] p-3 bg-zinc-100 outline-none"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="New Password"
              className="w-[710px] p-3 bg-zinc-100 outline-none"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Confirm New Password "
              className="w-[710px] p-3 bg-zinc-100 outline-none"
            />
          </div>
        </div>
        <div className="flex gap-[10px] justify-center mt-[24px]">
            <button className="cursor-pointer active:bg-zinc-100 p-4 px-7 rounded font-medium">Cancel</button>
            <button className="bg-red-500 p-4 px-7 rounded font-medium text-white cursor-pointer active:bg-red-600">Save Changes</button>
        </div>
      </div>
    </section>
  );
}
