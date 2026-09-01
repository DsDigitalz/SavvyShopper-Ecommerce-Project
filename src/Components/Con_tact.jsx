import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconsphone from "./Assets/icons-phone.png";
import iconsmail from "./Assets/icons-mail.png";
import Modal from "./Modal";
import toast from "react-hot-toast";

export default function Con_tact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFormData({ fullname: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <div className="pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-zinc-500 mb-8 flex items-center gap-2">
          <Link to="/home" className="hover:text-red-500 transition">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-gray-900">Contact</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT CONTACT INFO CARD (4 cols) */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200 shadow-sm flex flex-col gap-6">
            {/* Phone Section */}
            <div className="border-b border-zinc-100 pb-6">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="p-2.5 bg-red-50 text-red-500 rounded-2xl">
                  <img src={iconsphone} alt="phone" className="w-5 h-5" />
                </div>
                <h2 className="text-base font-bold text-gray-900">Call To Us</h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mb-2 leading-relaxed">
                We are available 24/7, 7 days a week to help with your tech orders.
              </p>
              <p className="text-xs sm:text-sm font-bold text-gray-900">Phone: +880 161 111 2222</p>
            </div>

            {/* Email Section */}
            <div>
              <div className="flex items-center gap-3.5 mb-3">
                <div className="p-2.5 bg-red-50 text-red-500 rounded-2xl">
                  <img src={iconsmail} alt="mail" className="w-5 h-5" />
                </div>
                <h2 className="text-base font-bold text-gray-900">Write To Us</h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mb-3 leading-relaxed">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-xs sm:text-sm text-gray-800 font-medium">Emails: customer@savvyshopper.com</p>
              <p className="text-xs sm:text-sm text-gray-800 font-medium mt-1">Emails: support@savvyshopper.com</p>
            </div>
          </div>

          {/* RIGHT CONTACT FORM (8 cols) */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-zinc-200 shadow-sm flex flex-col gap-6"
          >
            {/* Input Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-3 focus-within:ring-2 focus-within:ring-red-500 focus-within:bg-white transition">
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="w-full bg-transparent outline-none text-xs sm:text-sm"
                />
              </div>
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-3 focus-within:ring-2 focus-within:ring-red-500 focus-within:bg-white transition">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  required
                  className="w-full bg-transparent outline-none text-xs sm:text-sm"
                />
              </div>
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-3 focus-within:ring-2 focus-within:ring-red-500 focus-within:bg-white transition">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="w-full bg-transparent outline-none text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Textarea */}
            <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-4 focus-within:ring-2 focus-within:ring-red-500 focus-within:bg-white transition">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message *"
                required
                rows={6}
                className="w-full bg-transparent outline-none text-xs sm:text-sm resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm cursor-pointer active:scale-98"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <Modal handleClose={handleCloseModal} title="Message Received">
          <div className="text-center space-y-3 p-2">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto">
              ✓
            </div>
            <h2 className="text-xl font-bold text-gray-900">Thank You, {formData.fullname}!</h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Your message has been sent successfully. Our support team will get back to you shortly at <strong>{formData.email}</strong>.
            </p>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
