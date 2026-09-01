import React from "react";
import Banner from "../Components/Banner";
import FlashSales from "../Components/FlashSales";
import Categories from "../Components/Categories";
import BestProducts from "../Components/BestProducts";
import BannerTwo from "../Components/BannerTwo";
// import OurProducts from "../Components/OurProducts";
import NewArrival from "../Components/NewArrival";
import FastDelivery from "../Components/FastDelivery";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const Home = () => {
  return (
    <div className="w-full bg-white">
      <Banner />
      <FlashSales />
      <Categories />
      <BestProducts />
      <BannerTwo />
      <NewArrival />
      <FastDelivery />
    </div>
  );
};

export default Home;
