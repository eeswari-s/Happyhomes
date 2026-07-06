import React from "react";
import { Helmet } from "react-helmet-async";

import RoomsHero from "../components/Rooms/RoomsHero";
import RoomTypes from "../components/Rooms/RoomTypes";
import StayInfo from "../components/Rooms/StayInfo";

function Rooms() {
  return (
    <>
      <Helmet>
        <title>
          Rooms & Accommodation | Happy Homes Stay Luxury Chennai
        </title>

        <meta
          name="description"
          content="Explore premium rooms at Happy Homes Stay Luxury in Sholinganallur, Chennai. Spacious, fully furnished rooms with WiFi, housekeeping, security and modern amenities."
        />

        <meta
          name="keywords"
          content="Rooms in Sholinganallur, PG Rooms Chennai, Luxury Rooms Chennai, Furnished Rooms Chennai, Happy Homes Rooms, Accommodation Chennai"
        />

        <link
          rel="canonical"
          href="https://www.happyhomess.in/rooms"
        />

        <meta
          property="og:title"
          content="Premium Rooms | Happy Homes Stay Luxury"
        />

        <meta
          property="og:description"
          content="Comfortable and fully furnished premium rooms in Sholinganallur, Chennai."
        />

        <meta
          property="og:url"
          content="https://www.happyhomess.in/rooms"
        />
      </Helmet>

      <RoomsHero />
      <RoomTypes />
      <StayInfo />
    </>
  );
}

export default Rooms;