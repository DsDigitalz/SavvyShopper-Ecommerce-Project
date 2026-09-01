import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaMobileAlt, FaApple, FaGooglePlay, FaQrcode, FaCheckCircle, FaStar, FaBolt, FaShieldAlt } from "react-icons/fa";
import scan from "../Components/Assets/scan.png";

export default function DownloadApp() {
  const handleDownloadClick = (platform) => {
    toast.success(`Redirecting to ${platform} App Store...`);
  };

  return (
    <main className="w-full pt-28 sm:pt-32 lg:pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link to="/home" className="hover:text-red-500 transition">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-gray-900">Download Mobile App</span>
        </nav>

        {/* Main App Showcase Hero */}
        <div className="bg-gradient-to-r from-zinc-950 via-black to-zinc-900 text-white rounded-3xl p-8 sm:p-14 mb-16 shadow-2xl overflow-hidden relative border border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1.5 rounded-full border border-red-500/30">
                <FaStar className="text-amber-400" /> New User Special: Get $3 Off Your First Mobile Order!
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Shop Faster With The <span className="text-red-500">SavvyShopper</span> App
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Experience seamless 1-click mobile checkout, push notifications for flash sales, live GPS order tracking, and exclusive app-only deals.
              </p>

              {/* Badges & QR Code */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                {/* QR Code Container */}
                <div className="bg-white p-3 rounded-2xl shadow-lg border border-zinc-200 text-center flex items-center gap-3">
                  <img src={scan} alt="Scan QR Code" className="w-24 h-24 object-contain" />
                  <div className="text-left text-gray-900 pr-2">
                    <p className="text-xs font-bold text-red-600 uppercase tracking-wider">Scan QR Code</p>
                    <p className="text-xs text-gray-600 font-medium">To Install Instantly</p>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => handleDownloadClick("Apple iOS")}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-6 py-3.5 rounded-xl transition shadow flex items-center justify-center gap-3 cursor-pointer border border-zinc-700"
                  >
                    <FaApple className="text-2xl" />
                    <div className="text-left leading-tight">
                      <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Download on the</p>
                      <p className="text-sm font-bold">App Store</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleDownloadClick("Google Play")}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-6 py-3.5 rounded-xl transition shadow flex items-center justify-center gap-3 cursor-pointer border border-zinc-700"
                  >
                    <FaGooglePlay className="text-xl text-green-400" />
                    <div className="text-left leading-tight">
                      <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Get it on</p>
                      <p className="text-sm font-bold">Google Play</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Mockup Showcase */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-64 sm:w-72 bg-zinc-900 border-4 border-zinc-700 rounded-[40px] shadow-2xl p-4 text-gray-900 transform hover:scale-105 transition duration-500">
                {/* Notch */}
                <div className="w-32 h-4 bg-zinc-800 rounded-b-xl mx-auto mb-4"></div>

                {/* Screen Mock Content */}
                <div className="bg-white rounded-[24px] p-4 text-left space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-100">
                    <span className="font-bold text-xs">SavvyShopper App</span>
                    <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">LIVE</span>
                  </div>

                  <div className="bg-red-50 p-3 rounded-xl border border-red-100 flex items-center gap-3">
                    <FaBolt className="text-red-500 text-lg" />
                    <div>
                      <p className="text-xs font-bold text-gray-900">Flash Sale Alert!</p>
                      <p className="text-[10px] text-gray-600">Smartphones up to 50% OFF</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="h-16 bg-zinc-100 rounded-lg animate-pulse"></div>
                    <div className="h-16 bg-zinc-100 rounded-lg animate-pulse"></div>
                  </div>

                  <div className="bg-black text-white p-2.5 rounded-xl text-center text-xs font-bold shadow">
                    Checkout in 1-Click &rarr;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm text-center">
            <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
              <FaBolt />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Flash Notifications</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Never miss a deal! Receive real-time push alerts when your wishlisted items drop in price.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm text-center">
            <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
              <FaMobileAlt />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Exclusive $3 Welcome Coupon</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Download the app today and automatically receive a $3 discount voucher applied at your first cart checkout.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm text-center">
            <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Biometric Ultra-Fast Checkout</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Complete purchases in seconds using FaceID, TouchID, and encrypted 1-click mobile payments.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
