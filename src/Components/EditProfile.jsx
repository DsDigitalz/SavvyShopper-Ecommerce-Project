import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function EditProfile() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <div className="pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-zinc-500 mb-8 flex items-center gap-2">
          <Link to="/home" className="hover:text-red-500 transition">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-gray-900">My Profile</span>
        </nav>

        <div className="bg-white shadow-sm border border-zinc-200 rounded-3xl p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 border-b border-zinc-100 pb-4 tracking-tight">
            Edit Profile
          </h1>

          {/* Name fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                defaultValue="Sanu"
                className="w-full p-3.5 bg-zinc-50 rounded-xl outline-none border border-zinc-200 focus:border-red-500 focus:bg-white text-xs sm:text-sm transition"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                defaultValue="Daniel"
                className="w-full p-3.5 bg-zinc-50 rounded-xl outline-none border border-zinc-200 focus:border-red-500 focus:bg-white text-xs sm:text-sm transition"
              />
            </div>
          </div>

          {/* Email and address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue="sanudaniel@gmail.com"
                className="w-full p-3.5 bg-zinc-50 rounded-xl outline-none border border-zinc-200 focus:border-red-500 focus:bg-white text-xs sm:text-sm transition"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                defaultValue="Kingston, 5236, United States"
                className="w-full p-3.5 bg-zinc-50 rounded-xl outline-none border border-zinc-200 focus:border-red-500 focus:bg-white text-xs sm:text-sm transition"
              />
            </div>
          </div>

          {/* Password section */}
          <div className="mt-8 border-t border-zinc-100 pt-6">
            <h3 className="mb-4 text-base font-bold text-gray-900">
              Password Changes
            </h3>
            <div className="flex flex-col gap-4">
              <input
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                className="w-full p-3.5 bg-zinc-50 rounded-xl outline-none border border-zinc-200 focus:border-red-500 focus:bg-white text-xs sm:text-sm transition"
              />
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                className="w-full p-3.5 bg-zinc-50 rounded-xl outline-none border border-zinc-200 focus:border-red-500 focus:bg-white text-xs sm:text-sm transition"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm New Password"
                className="w-full p-3.5 bg-zinc-50 rounded-xl outline-none border border-zinc-200 focus:border-red-500 focus:bg-white text-xs sm:text-sm transition"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
            <button className="w-full sm:w-auto px-6 py-3 border border-zinc-300 rounded-xl font-bold text-xs sm:text-sm text-zinc-700 hover:bg-zinc-100 transition cursor-pointer">
              Cancel
            </button>
            <button
              className="w-full sm:w-auto px-8 py-3.5 bg-red-500 text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-red-600 shadow-md transition cursor-pointer active:scale-98"
              onClick={handleOpenModal}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <Modal handleClose={handleCloseModal} title="Profile Updated">
          <div className="flex flex-col items-center text-center p-2">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mb-3">
              ✓
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Changes Saved Successfully!
            </h3>
            <p className="mb-6 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Your profile information has been updated. The changes will be reflected across your account.
            </p>
            <button
              onClick={handleCloseModal}
              className="w-full p-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition text-sm cursor-pointer"
            >
              OK
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
