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
    <Disclosure
      as="nav"
      className="bg-white shadow-2xs py-2 sm:py-4 z-20 sticky top-0"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-14 sm:h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Logo and desktop menu */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <Link to={"/"} className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://i.postimg.cc/8cxRZhhb/logo.png"
                className="h-12 w-12 sm:h-16 sm:w-16 object-cover"
              />
            </Link>

            {/* Desktop menu */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="flex space-x-2 sm:space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={"/" + item.href}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Auth buttons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {!isAuthenticated ? (
              <div className="flex items-center space-x-1 sm:space-x-4">
                <Link
                  to={"sign-in"}
                  className="text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md"
                >
                  Sign In
                </Link>
                <RoundedButton
                  clickHandler={() => navigate("/register")}
                  text={"Register"}
                  bgColor={"primary"}
                  customStyle={
                    "text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
                  }
                />
              </div>
            ) : (
              <Menu as="div" className="relative ml-2 sm:ml-3">
                <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-7 w-7 sm:h-10 sm:w-10 rounded-full object-cover"
                    src={localStorage.getItem("profileImage")}
                    alt="user"
                  />
                </MenuButton>

                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 ring-gray-100 ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    <NavLink
                      to={"user-settings"}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? "bg-gray-100"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                    >
                      Your Profile
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink
                      to={"/admin/dashboard"}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? "bg-gray-100"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                    >
                      Dashboard
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={"/" + item.href}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-base font-medium ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`
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
