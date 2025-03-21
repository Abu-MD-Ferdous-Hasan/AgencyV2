import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Error from "../components/Error";
import Services from "../components/Services/Services";
import AboutUs from "../components/About Us/AboutUs";
import TestimonialsPage from "../components/Testimonials/TestimonialPage";
import Portfolio from "../components/Portfolio/Portfolio";
import SignIn from "../components/Sign In/SignIn";
import Register from "../components/Register/Register";
import ManageServices from "../components/Admin/ManageServices";
import { ProtectedRoute } from "../components/ProtectedRoute";
import AdminLayout from "../Layout/AdminLayout";

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
      { path: "test", element: <ManageServices /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "services", element: <ManageServices /> },
      { path: "dashboard", element: <div /> },
      { path: "users", element: <div /> },
      { path: "testimonials", element: <div /> },
      { path: "launches", element: <div /> },
    ],
  },
  { path: "*", element: <Error /> },
  { path: "sign-in", element: <SignIn /> },
  { path: "register", element: <Register /> },
]);
