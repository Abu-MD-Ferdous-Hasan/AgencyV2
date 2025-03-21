import React from "react";
import Navbar from "../components/Navbar";
import CRUDTable from "../components/Admin/CRUDTable";
import ManageServices from "../components/Admin/ManageServices";
import { HomeIcon, UserCircleIcon, StarIcon } from "@heroicons/react/16/solid";
import { NavLink, Outlet } from "react-router-dom";
import { PuzzlePieceIcon } from "@heroicons/react/24/outline";
import { FaRocket } from "react-icons/fa";

export default function AdminLayout() {
  const sideMenu = [
    {
      path: "dashboard",
      icon: <HomeIcon className="w-8 h-8" />,
      name: "dashboard",
    },
    {
      path: "users",
      icon: <UserCircleIcon className="w-8 h-8" />,
      name: "users",
    },
    {
      path: "services",
      icon: <PuzzlePieceIcon className="w-8 h-8" />,
      name: "services",
    },
    {
      path: "testimonials",
      icon: <StarIcon className="w-8 h-8" />,
      name: "testimonials",
    },
    {
      path: "launches",
      icon: <FaRocket className="w-8 h-8" />,
      name: "Launches",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="flex gap-4">
        <aside
          class="bg-white border-r border-gray-200
         -translate-x-80 inset-0 ml-4 h-[calc(100vh-32px)] w-60 transition-transform duration-300 xl:translate-x-0"
        >
          <div class="relative border-b border-white/20">
            <a class="flex items-center gap-4 py-6 px-8" href="#/">
              <h6 class="block antialiased tracking-normal text-xl font-bold leading-relaxed text-primary font-primary">
                Admin Dashboard
              </h6>
            </a>
            <button
              class="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
              type="button"
            >
              <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-5 w-5 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div class="m-4">
            <ul class="mb-4 flex flex-col gap-1">
              {sideMenu.map((menuItem) => (
                <li>
                  <NavLink
                    to={menuItem.path}
                    className={({ isActive }) =>
                      `middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  hover:shadow-lg hover:bg-primary/80 hover:text-white active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize ${
                        isActive
                          ? "bg-primary text-white shadow-md shadow-grey-500/20"
                          : " text-secondary"
                      }`
                    }
                    type="button"
                  >
                    {menuItem.icon}
                    <p class="block antialiased font-primary leading-relaxed text-inherit tracking-wide font-medium capitalize">
                      {menuItem.name}
                    </p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <Outlet />
      </div>
    </>
  );
}
