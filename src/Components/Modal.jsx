import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { duration: 0.1, type: "spring", damping: 25, stiffness: 500 },
  },
  exit: { y: "100vh", opacity: 0 },
};

const Modal = ({ handleClose, title, children }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal-container"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Modal Header */}
          {title && (
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-5">
              <h2 className="text-lg font-bold text-gray-900">{title}</h2>
              <button
                onClick={handleClose}
                className="text-zinc-400 hover:text-zinc-800 text-2xl transition leading-none cursor-pointer"
              >
                &times;
              </button>
            </div>
          )}

          {/* Modal Body */}
          <div>{children}</div>

          {/* Close button shown only if there's no title header */}
          {!title && (
            <button
              onClick={handleClose}
              className="modal-close-button"
            >
              &times;
            </button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
