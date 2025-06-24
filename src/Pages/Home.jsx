import React from "react";
import Banner from "../Components/Banner";
import FlashSales from "../Components/FlashSales";
import Categories from "../Components/Categories";
import BestProducts from "../Components/BestProducts";
import BannerTwo from "../Components/BannerTwo";
import OurProducts from "../Components/OurProducts";
import NewArrival from "../Components/NewArrival";
import FastDelivery from "../Components/FastDelivery";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <FlashSales />
      <Categories />
      <BestProducts />
      <BannerTwo />
      <OurProducts />
      <NewArrival />
      <FastDelivery />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
