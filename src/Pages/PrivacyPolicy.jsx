import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaLock, FaUserSecret, FaCookieBite, FaEnvelope } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <main className="w-full pt-28 sm:pt-32 lg:pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link to="/home" className="hover:text-red-500 transition">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-gray-900">Privacy Policy</span>
        </nav>

        {/* Header Box */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 mb-8 text-center sm:text-left">
          <div className="inline-flex items-center justify-center p-3 bg-red-100 text-red-500 rounded-xl mb-4">
            <FaShieldAlt className="text-3xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">
            Last Updated: August 2026 &bull; Your data privacy and security are our highest priority.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-zinc-200 space-y-8 text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <FaLock className="text-red-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-900">1. Information We Collect</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-3">
              When you visit SavvyShopper, place an order, or create an account, we collect personal information necessary to provide seamless e-commerce services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-600">
              <li><strong>Personal Identifiers:</strong> Name, email address, phone number, and shipping/billing address.</li>
              <li><strong>Transactional Data:</strong> Order history, items purchased, payment confirmations, and return records.</li>
              <li><strong>Device & Browsing Info:</strong> IP address, browser type, device identifier, and operating system details.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <FaUserSecret className="text-red-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-900">2. How We Use Your Information</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-3">
              We strictly utilize your data for legitimate operational and customer fulfillment purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-600">
              <li>Processing, fulfilling, and delivering your online orders efficiently.</li>
              <li>Sending transaction updates, order tracking alerts, and customer service support.</li>
              <li>Improving site navigation, personalized recommendations, and checkout experience.</li>
              <li>Preventing fraudulent activities, unauthorized transactions, and security breaches.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <FaCookieBite className="text-red-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-900">3. Cookies & Tracking Technologies</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              SavvyShopper uses essential session cookies to remember items added to your cart, retain your wishlist, and analyze store performance. You can choose to disable non-essential cookies through your web browser preferences at any time.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <FaShieldAlt className="text-red-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-900">4. Data Sharing & Security</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              We do <strong>NEVER</strong> sell or rent your personal information to third parties. We only share essential delivery data with logistics partners (couriers) and encrypted payment processors to fulfill your purchase securely. All transmissions utilize 256-bit SSL encryption.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-red-50 p-6 rounded-xl border border-red-200">
            <div className="flex items-center gap-3 mb-2">
              <FaEnvelope className="text-red-600 text-xl" />
              <h2 className="text-lg font-bold text-gray-900">Have Questions Regarding Your Privacy?</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              If you wish to request account data deletion, update your details, or inquire about our privacy policies, reach out to our privacy compliance officer.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg hover:bg-red-700 transition"
            >
              Contact Privacy Support
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
