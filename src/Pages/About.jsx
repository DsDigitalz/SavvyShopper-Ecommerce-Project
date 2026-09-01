import React from "react";
import OurStory from "../Components/OurStory";
import Sellers from "../Components/Sellers";
import Staff from "../Components/Staff";
import FastDelivery from "../Components/FastDelivery";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div className="w-full bg-white">
      <OurStory />
      <Sellers />
      <Staff />
      <FastDelivery />
    </div>
  );
};

export default About;
