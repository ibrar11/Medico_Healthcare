import React from "react";
import {
  Treatments,
  HeroSection,
  Services,
  AboutUs,
  CheckUps, FeedBack,
  Appointment,
} from "../index";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Treatments />
      <Services />
      <AboutUs />
      <CheckUps />
      <FeedBack/>
      <Appointment />
    </>
  );
};

export default Home;
