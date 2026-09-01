import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaHeart, FaUser, FaTruck, FaShieldAlt } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function DashboardContent() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <div className="pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-zinc-500 mb-6 flex items-center gap-2">
        <Link to="/home" className="hover:text-red-500 transition">
          Home
        </Link>
        <span>/</span>
        <span className="font-semibold text-gray-900">Dashboard</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-red-950 text-white rounded-3xl p-6 sm:p-10 mb-10 shadow-lg border border-zinc-800">
        <span className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2 block">Account Center</span>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
          Welcome back, Sanu!
        </h1>
        <p className="text-zinc-300 text-xs sm:text-sm max-w-xl">
          Track your recent orders, manage your delivery addresses, and browse your saved wishlist items.
        </p>
      </div>

      {/* Overview Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-xs hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-50 text-red-500 rounded-2xl">
              <FaShoppingBag className="text-xl" />
            </div>
            <span className="text-xs font-bold text-zinc-400">Cart</span>
          </div>
          <p className="text-2xl font-black text-gray-900">{cart.length} Items</p>
          <Link to="/cart" className="text-xs font-bold text-red-500 hover:underline mt-2 inline-block">
            View Cart &rarr;
          </Link>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-xs hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-50 text-red-500 rounded-2xl">
              <FaHeart className="text-xl" />
            </div>
            <span className="text-xs font-bold text-zinc-400">Saved</span>
          </div>
          <p className="text-2xl font-black text-gray-900">{wishlist.length} Items</p>
          <Link to="/likes" className="text-xs font-bold text-red-500 hover:underline mt-2 inline-block">
            View Wishlist &rarr;
          </Link>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-xs hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-50 text-red-500 rounded-2xl">
              <FaTruck className="text-xl" />
            </div>
            <span className="text-xs font-bold text-zinc-400">Shipments</span>
          </div>
          <p className="text-2xl font-black text-gray-900">2 Active</p>
          <p className="text-xs text-zinc-500 mt-2">On the way via Express</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-xs hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-50 text-red-500 rounded-2xl">
              <FaShieldAlt className="text-xl" />
            </div>
            <span className="text-xs font-bold text-zinc-400">Rewards</span>
          </div>
          <p className="text-2xl font-black text-gray-900">450 Pts</p>
          <p className="text-xs text-zinc-500 mt-2">Tier: Gold Member</p>
        </div>
      </div>

      {/* Quick Action Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200 shadow-xs flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Profile Information</h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
              Update your personal details, email preferences, and account security.
            </p>
          </div>
          <Link
            to="/user"
            className="inline-flex items-center justify-center bg-zinc-900 hover:bg-red-500 text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-xl transition w-fit"
          >
            Edit Profile
          </Link>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200 shadow-xs flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Explore Tech Catalog</h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
              Browse newly arrived smartphones, audio devices, and laptop accessories.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-xl shadow-md transition w-fit"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}