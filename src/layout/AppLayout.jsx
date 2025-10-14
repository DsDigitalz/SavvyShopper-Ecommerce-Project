import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";


export default function AppLayout() {
  return (
    <div>
      {/* <Navbar /> */}
      
      
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
