import React from 'react';

export default function DashboardContent() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <p className="text-lg text-gray-600 mb-8">
        Welcome to your dashboard! Here's a summary of your activity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">My Courses</h2>
          <p className="text-gray-500">You are enrolled in 5 active courses.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Notifications</h2>
          <p className="text-gray-500">You have 3 unread notifications.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Progress</h2>
          <p className="text-gray-500">Your overall progress is 75%.</p>
        </div>
      </div>
    </div>
  );
}