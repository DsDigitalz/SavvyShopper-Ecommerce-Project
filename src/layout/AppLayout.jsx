import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Banner from "../Components/Banner";
import Aside from "../Components/aside";
import Footer from "../Components/Footer";


export default function AppLayout() {
  return (
    <div>
      <Navbar />
      
      
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
