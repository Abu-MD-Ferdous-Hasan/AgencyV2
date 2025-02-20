import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Error from "../components/Error";
import Services from "../components/Services/Services";
import AboutUs from "../components/About Us/AboutUs";
import TestimonialsPage from "../components/Testimonials/TestimonialPage";
import Portfolio from "../components/Portfolio/Portfolio";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "testimonials", element: <TestimonialsPage /> },
      ,
    ],
  },
  { path: "*", element: <Error /> },
]);
