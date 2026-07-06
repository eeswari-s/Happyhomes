import React from "react";
import { Helmet } from "react-helmet-async";
import ContactHero from "../components/Contact/ContactHero";
import ContactDetails from "../components/Contact/ContactDetails";
import LocationMap from "../components/Contact/LocationMap";

function Contact() {
  return (
    <>
      <Helmet>
        <title>
          Contact Happy Homes Stay Luxury | PG & Luxury Stay in Chennai
        </title>

        <meta
          name="description"
          content="Contact Happy Homes Stay Luxury for premium PG accommodation and luxury stay in Sholinganallur, Chennai. Call us today for room availability and bookings."
        />

        <meta
          name="keywords"
          content="Contact Happy Homes, PG Contact Chennai, Luxury Stay Chennai Contact, Sholinganallur PG Contact, Hostel Contact Chennai"
        />

        <link
          rel="canonical"
          href="https://www.happyhomess.in/contact"
        />
      </Helmet>

      <ContactHero />
      <ContactDetails />
      <LocationMap />
    </>
  );
}

export default Contact;