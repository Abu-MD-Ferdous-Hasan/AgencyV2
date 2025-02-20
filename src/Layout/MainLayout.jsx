import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  //   const location = useLocation();
  //   console.log(location.pathname);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
