import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Facilities from "../components/Home/Facilities";
import Gallery from "../components/Home/Gallery";
import CTA from "../components/Home/CTA";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Happy Homes Stay Luxury | Premium PG & Luxury Stay in Sholinganallur, Chennai
        </title>

        <meta
          name="description"
          content="Looking for a premium PG in Sholinganallur? Happy Homes Stay Luxury offers fully furnished rooms, WiFi, housekeeping, security, modern amenities, and comfortable accommodation in Chennai."
        />

        <meta
          name="keywords"
          content="PG in Sholinganallur, Luxury PG Chennai, Premium PG Chennai, Happy Homes Stay Luxury, Hostel in Chennai, Accommodation in Sholinganallur, Furnished Rooms Chennai"
        />

        <link
          rel="canonical"
          href="https://www.happyhomess.in/"
        />

        <meta
          property="og:title"
          content="Happy Homes Stay Luxury | Premium PG & Luxury Stay in Chennai"
        />

        <meta
          property="og:description"
          content="Premium PG accommodation in Sholinganallur with modern amenities, security, WiFi and comfortable living."
        />

        <meta
          property="og:url"
          content="https://www.happyhomess.in/"
        />
      </Helmet>

      <Hero />
      <About />
      <Facilities />
      <Gallery />
      <CTA />
    </>
  );
}

export default Home;