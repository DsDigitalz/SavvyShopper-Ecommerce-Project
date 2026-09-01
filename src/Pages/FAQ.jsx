import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaQuestionCircle, FaChevronDown, FaSearch, FaShippingFast, FaUndo, FaCreditCard, FaUserLock } from "react-icons/fa";

const FAQ_DATA = [
  {
    category: "Orders & Shipping",
    icon: FaShippingFast,
    questions: [
      {
        q: "How long does standard shipping take?",
        a: "Standard shipping typically delivers within 3 to 5 business days across major cities. Express same-day or 24-hour delivery options are available at checkout for eligible postal codes.",
      },
      {
        q: "How can I track my order status?",
        a: "Once your package leaves our fulfillment center, you will receive an automated email containing a tracking number and a link to live courier updates.",
      },
      {
        q: "Do you offer international shipping?",
        a: "Yes! We ship internationally to over 50 countries worldwide. International shipping rates and delivery estimates are calculated automatically at checkout based on destination.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    icon: FaUndo,
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a hassle-free 30-Day Money Back Guarantee. You can return any item within 30 days of receiving it, provided it is unused and in original packaging.",
      },
      {
        q: "How long does a refund take to process?",
        a: "Refunds are processed within 2-3 business days after our warehouse receives and inspects your returned package. Funds return directly to your original payment method.",
      },
    ],
  },
  {
    category: "Payments & Security",
    icon: FaCreditCard,
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, Google Pay, and Cash on Delivery (COD) for selected regions.",
      },
      {
        q: "Is my payment information secure?",
        a: "Absolutely. All transactions are processed through 256-bit SSL encrypted payment gateways. We never store raw credit card data on our servers.",
      },
    ],
  },
  {
    category: "Account & Profile",
    icon: FaUserLock,
    questions: [
      {
        q: "How do I reset my password?",
        a: "Click on 'Login/Register', select 'Forgot Password', enter your account email address, and follow the password reset link sent to your inbox.",
      },
      {
        q: "How can I update my shipping address?",
        a: "Navigate to 'My Account' or click 'Edit Profile' to manage saved delivery addresses, contact details, and account preferences.",
      },
    ],
  },
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({});

  const toggleAccordion = (catIndex, qIndex) => {
    const key = `${catIndex}-${qIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <main className="w-full pt-28 sm:pt-32 lg:pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link to="/home" className="hover:text-red-500 transition">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-gray-900">FAQ</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 rounded-2xl p-8 sm:p-12 text-white text-center mb-10 shadow-lg">
          <FaQuestionCircle className="text-4xl sm:text-5xl mx-auto mb-4 opacity-90" />
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-red-100 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Find quick answers to common questions about orders, delivery, returns, payments, and account management.
          </p>

          {/* Interactive Search */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search your question here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white text-gray-900 rounded-xl outline-none shadow-md text-sm placeholder-gray-400 focus:ring-2 focus:ring-red-300"
            />
            <FaSearch className="absolute left-4 top-3.5 text-gray-400 text-base" />
          </div>
        </div>

        {/* FAQ Accordions by Category */}
        <div className="space-y-8">
          {FAQ_DATA.map((cat, catIdx) => {
            const Icon = cat.icon;
            // Filter questions
            const filteredQ = cat.questions.filter(
              (item) =>
                searchQuery.trim() === "" ||
                item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.a.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredQ.length === 0) return null;

            return (
              <section key={catIdx} className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-3 border-b border-zinc-100 pb-4 mb-4">
                  <div className="p-2.5 bg-red-50 text-red-500 rounded-lg text-lg">
                    <Icon />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{cat.category}</h2>
                </div>

                <div className="space-y-3">
                  {filteredQ.map((item, qIdx) => {
                    const isOpen = openItems[`${catIdx}-${qIdx}`] || searchQuery.trim() !== "";
                    return (
                      <div
                        key={qIdx}
                        className="border border-zinc-200 rounded-xl overflow-hidden transition-all duration-200"
                      >
                        <button
                          onClick={() => toggleAccordion(catIdx, qIdx)}
                          className="w-full flex items-center justify-between p-4 text-left font-semibold text-gray-800 text-sm sm:text-base hover:bg-zinc-50 transition cursor-pointer"
                        >
                          <span>{item.q}</span>
                          <FaChevronDown
                            className={`text-zinc-400 text-xs transition-transform duration-300 ${
                              isOpen ? "transform rotate-180 text-red-500" : ""
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="p-4 bg-zinc-50/70 border-t border-zinc-100 text-sm text-gray-600 leading-relaxed">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Still Need Help Box */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still couldn't find your answer?</h3>
          <p className="text-gray-500 text-sm mb-6">Our 24/7 customer support team is ready to assist you anytime.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-red-500 hover:bg-red-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition shadow-sm"
            >
              Contact Support
            </Link>
            <Link
              to="/support"
              className="bg-zinc-100 hover:bg-zinc-200 text-gray-800 font-semibold text-sm px-6 py-3 rounded-xl transition"
            >
              Visit Help Center
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
