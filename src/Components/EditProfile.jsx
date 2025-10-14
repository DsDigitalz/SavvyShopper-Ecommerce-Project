import React, { useState } from "react";
import Modal from "./Modal";

export default function EditProfile() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <section className="flex justify-center items-start px-4 sm:px-10 lg:px-20 mt-10">
        <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-6 sm:p-10">
          <h1 className="text-red-500 text-xl sm:text-2xl mb-6 font-semibold">
            Edit Profile
          </h1>

          {/* Name fields */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <p className="mb-1 text-sm font-medium text-gray-700">
                First Name
              </p>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Sanu"
                className="w-full p-3 bg-zinc-100 rounded outline-none border border-transparent focus:border-red-400 transition"
              />
            </div>
            <div className="flex-1">
              <p className="mb-1 text-sm font-medium text-gray-700">
                Last Name
              </p>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Daniel"
                className="w-full p-3 bg-zinc-100 rounded outline-none border border-transparent focus:border-red-400 transition"
              />
            </div>
          </div>

          {/* Email and address */}
          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <div className="flex-1">
              <p className="mb-1 text-sm font-medium text-gray-700">Email</p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="sanudaniel@gmail.com"
                className="w-full p-3 bg-zinc-100 rounded outline-none border border-transparent focus:border-red-400 transition"
              />
            </div>
            <div className="flex-1">
              <p className="mb-1 text-sm font-medium text-gray-700">Address</p>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Kingston, 5236, United States"
                className="w-full p-3 bg-zinc-100 rounded outline-none border border-transparent focus:border-red-400 transition"
              />
            </div>
          </div>

          {/* Password section */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-medium text-gray-700">
              Password Changes
            </p>
            <div className="flex flex-col gap-4">
              <input
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                className="w-full p-3 bg-zinc-100 rounded outline-none border border-transparent focus:border-red-400 transition"
              />
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                className="w-full p-3 bg-zinc-100 rounded outline-none border border-transparent focus:border-red-400 transition"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm New Password"
                className="w-full p-3 bg-zinc-100 rounded outline-none border border-transparent focus:border-red-400 transition"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="w-full sm:w-auto px-6 py-3 border border-zinc-300 rounded font-medium hover:bg-zinc-100 transition">
              Cancel
            </button>
            <button
              className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white rounded font-medium hover:bg-red-600 transition"
              onClick={handleOpenModal}
            >
              Save Changes
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <Modal handleClose={handleCloseModal} title="Profile Updated">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold">
              Changes Saved Successfully!
            </h3>
            <p className="my-4 text-gray-600">
              Your profile information has been updated. The changes will be
              reflected across your account.
            </p>
            <button
              onClick={handleCloseModal}
              className="w-full p-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              OK
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
