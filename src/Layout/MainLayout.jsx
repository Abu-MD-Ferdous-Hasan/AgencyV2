import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function MainLayout() {
  const queryClient = new QueryClient();
  //   const location = useLocation();
  //   console.log(location.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}
