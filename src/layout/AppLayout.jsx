import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

