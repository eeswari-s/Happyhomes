import React from "react";
import ContactHero from "../components/Contact/ContactHero";
import ContactDetails from "../components/Contact/ContactDetails";
import LocationMap from "../components/Contact/LocationMap";

function Contact() {
  return (
    <>
      <ContactHero />
      <ContactDetails />
      <LocationMap />
    </>
  );
}

export default Contact;