import React from "react";
import { Link } from "react-router-dom";
import { FaFileContract, FaGavel, FaExchangeAlt, FaUserCheck, FaExclamationCircle } from "react-icons/fa";

export default function TermsOfUse() {
  return (
    <main className="w-full pt-28 sm:pt-32 lg:pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link to="/home" className="hover:text-red-500 transition">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-gray-900">Terms of Use</span>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 mb-8 text-center sm:text-left">
          <div className="inline-flex items-center justify-center p-3 bg-red-100 text-red-500 rounded-xl mb-4">
            <FaFileContract className="text-3xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Terms Of Use
          </h1>
          <p className="text-gray-500 text-sm">
            Effective Date: August 2026 &bull; Terms governing your access and purchases on SavvyShopper.
          </p>
        </div>

        {/* Body Content */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-zinc-200 space-y-8 text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <FaUserCheck className="text-red-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              By accessing, browsing, or placing orders on SavvyShopper, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <FaGavel className="text-red-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-900">2. Account Registration & Conduct</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-3">
              To utilize certain features like Order Tracking and Wishlist, you may create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-600">
              <li>Maintaining confidentiality of your credentials and password.</li>
              <li>Providing accurate, current, and complete registration information.</li>
              <li>Accepting full responsibility for all activities that occur under your registered account.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <FaExchangeAlt className="text-red-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-900">3. Orders, Pricing & Returns</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-3">
              All prices listed on SavvyShopper are in USD ($) and subject to change without prior notice.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-600">
              <li><strong>Order Acceptance:</strong> Receipt of an email confirmation does not constitute final order acceptance. We reserve the right to decline or limit orders due to stock availability.</li>
              <li><strong>30-Day Money Back Guarantee:</strong> Items returned within 30 days of delivery in original condition are eligible for full refund or replacement.</li>
              <li><strong>Warranty:</strong> Electronic hardware carries a 1-Year manufacturer warranty unless stated otherwise.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <FaExclamationCircle className="text-red-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-900">4. Intellectual Property</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              All website graphics, code, product photos, trademarks, and branding assets are exclusive intellectual property of SavvyShopper. Unauthorized duplication, scraping, or commercial exploitation without written consent is strictly prohibited.
            </p>
          </section>

          {/* Contact Box */}
          <div className="bg-zinc-100 p-6 rounded-xl border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900 text-base">Questions about our Terms?</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Our legal & support team is ready to help clarify any clauses.</p>
            </div>
            <Link
              to="/contact"
              className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
