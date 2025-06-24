import React from "react";
import OurStory from "../Components/OurStory";
import Sellers from "../Components/Sellers";
import Staff from "../Components/Staff";
import FastDelivery from "../Components/FastDelivery";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      <OurStory />
      <Sellers />
      <Staff />
      <FastDelivery/>
      {/* <Footer/> */}
    </div>
  );
};

export default About;
