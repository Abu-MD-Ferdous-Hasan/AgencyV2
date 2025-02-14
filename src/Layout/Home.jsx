import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Brands from "../components/Home/Brands";
import About from "../components/Home/About";
import WeOffer from "../components/Home/WeOffer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <About />
      <WeOffer />
    </>
  );
}
