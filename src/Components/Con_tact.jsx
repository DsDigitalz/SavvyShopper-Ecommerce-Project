import React, { useState } from "react";
import iconsphone from "./Assets/icons-phone.png";
import iconsmail from "./Assets/icons-mail.png";
import Modal from "./Modal";

export default function Con_tact() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <section className="contact flex flex-col lg:flex-row items-start justify-center pt-20 lg:pt-40 px-6 sm:px-10 lg:px-20 gap-10">
        {/* LEFT CONTACT CARD */}
        <div className="border border-zinc-200 shadow-lg w-full lg:w-[340px] p-6 sm:p-8 rounded-lg bg-white">
          <div className="border-b border-zinc-300 pb-6 mb-6">
            <div className="flex items-center gap-4 font-medium mb-4">
              <img src={iconsphone} alt="phone" className="w-6 h-6" />
              <h1 className="text-lg font-semibold">Call To Us</h1>
            </div>
            <p className="text-sm mb-2">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-sm font-medium">Phone: +8801611112222</p>
          </div>

          <div>
            <div className="flex items-center gap-4 font-medium mb-4">
              <img src={iconsmail} alt="mail" className="w-6 h-6" />
              <h1 className="text-lg font-semibold">Write To Us</h1>
            </div>
            <p className="text-sm mb-2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm">Emails: customer@exclusive.com</p>
            <p className="text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="flex flex-col gap-6 border border-zinc-200 shadow-lg w-full p-6 sm:p-10 rounded-lg bg-white">
          {/* Input group */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <div className="bg-zinc-100 flex-1 min-w-[200px] p-3 rounded-md">
              <input
                type="text"
                name="fullname"
                placeholder="Your Name"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
            <div className="bg-zinc-100 flex-1 min-w-[200px] p-3 rounded-md">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
            <div className="bg-zinc-100 flex-1 min-w-[200px] p-3 rounded-md">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone No"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          {/* Textarea */}
          <div className="bg-zinc-100 p-3 rounded-md w-full">
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full h-40 sm:h-52 bg-transparent outline-none text-sm resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-md w-full sm:w-1/3 md:w-1/4 mx-auto active:bg-red-600 transition-all"
            onClick={handleOpenModal}
          >
            Send Message
          </button>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <Modal handleClose={handleCloseModal}>
          <div className="text-center space-y-2">
            <h2 className="text-xl font-semibold">Thank You!</h2>
            <p className="text-sm text-gray-600">
              Your message has been sent successfully. We’ll get back to you
              shortly.
            </p>
          </div>
        </Modal>
      )}
    </>
  );
}
