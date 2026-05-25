import React from "react";
import RoomsHero from "../components/Rooms/RoomsHero";
import RoomTypes from "../components/Rooms/RoomTypes";
import StayInfo from "../components/Rooms/StayInfo";

function Rooms() {
  return (
    <>
      <RoomsHero />
      <RoomTypes/>
      <StayInfo/>
    </>
  );
}

export default Rooms;