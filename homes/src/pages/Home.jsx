import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Facilities from "../components/Home/Facilities";
import Gallery from "../components/Home/Gallery";
import CTA from "../components/Home/CTA";

function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Facilities/>
      <Gallery/>
      <CTA/>
    </>
  );
}

export default Home;