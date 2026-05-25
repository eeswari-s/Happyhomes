import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import ScrollToTop from "../components/Common/ScrollToTop";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default MainLayout;