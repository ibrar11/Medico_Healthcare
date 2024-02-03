import React from "react";
import { Treatments, HeroSection, Services, AboutUs, CheckUps, FeedBack } from "../index";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Treatments />
      <Services/>
      <AboutUs/>
      <CheckUps/>
      <FeedBack/>
    </>
  );
};

export default Home;
