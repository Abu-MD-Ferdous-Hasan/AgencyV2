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
import Dashboard from "../components/Admin/Dashboard";
import ManageProjects from "../components/Admin/ManageLaunches";
import ManageUsers from "../components/Admin/ManageUsers";
import ManageTestimonials from "../components/Admin/ManageTestimonials";

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
      { path: "dashboard", element: <Dashboard /> },
      { path: "users", element: <ManageUsers /> },
      { path: "testimonials", element: <ManageTestimonials /> },
      { path: "launches", element: <ManageProjects /> },
    ],
  },
  { path: "*", element: <Error /> },
  { path: "sign-in", element: <SignIn /> },
  { path: "register", element: <Register /> },
]);
