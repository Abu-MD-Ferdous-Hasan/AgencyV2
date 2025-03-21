import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RoundedButton } from "./RoundedButton.jsx";
import { useState, useEffect } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Services", href: "services" },
  { name: "Portfolio", href: "portfolio" },
  { name: "About Us", href: "about-us" },
  { name: "Testimonials", href: "testimonials" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-2xs py-4 z-20 sticky top-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0 ">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu start*/}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          {/* Mobile menu end*/}
          {/* logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <Link to={"/"} className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="src\assets\logo.png"
                className="h-20 w-20 object-cover"
              />
            </Link>
            {/* Desktop menu start */}

            <div className="hidden w-full sm:flex sm:ml-6 justify-center items-center">
              <div className="flex space-x-4 items-center">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={"/" + item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={({ isActive }) =>
                      isActive
                        ? "font-primary rounded-md outline-1 outline-black px-3 py-2 text-sm font-medium bg-white box-border"
                        : "font-primary rounded-md outline-1 outline-white px-3 py-2 text-sm font-medium text-secondary hover:bg-primary hover:text-white box-border"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
            {/* Desktop menu end */}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            {!isAuthenticated ? (
              <>
                <Link
                  to={"sign-in"}
                  className="font-primary text-secondary hover:text-primary rounded-md px-4 py-3 text-sm font-medium cursor-pointer mr-3"
                >
                  Sign In
                </Link>
                <RoundedButton
                  clickHandler={() => navigate("/register")}
                  text={"Register"}
                  bgColor={"primary"}
                  customStyle={"text-white"}
                />
              </>
            ) : (
              <Menu as="div" className="relative ml-3">
                <MenuButton className="relative cursor-pointer flex rounded-full  text-sm">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="size-10  rounded-full object-cover text-primary ring-1 ring-offset-1 ring-primary"
                    src="src\assets\imgs\male-avatar.jpg"
                    alt="user"
                  />
                </MenuButton>

                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <MenuItem>
                    <NavLink
                      to={"user-settings"}
                      className={({ active }) =>
                        `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                          active ? "bg-gray-100" : ""
                        }`
                      }
                    >
                      Your Profile
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink
                      to={"/admin/dashboard"}
                      className={({ active }) =>
                        `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                          active ? "bg-gray-100" : ""
                        }`
                      }
                    >
                      Dashboard
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`block w-full text-left px-4 py-2 text-sm text-gray-700 ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Sign out
                      </button>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            )}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              path={item.href}
              aria-current={item.current ? "page" : undefined}
              className={
                (({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium")
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
