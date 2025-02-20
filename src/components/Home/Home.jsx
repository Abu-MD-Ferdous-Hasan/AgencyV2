import React from "react";
import Hero from "./Hero";
import Brands from "./Brands";
import About from "./About";
import WeOffer from "./WeOffer";
import HomeStats from "./HomeStats";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <About />
      <WeOffer />
      <Testimonial />
      <HomeStats />
      <Faq />
    </>
  );
}
