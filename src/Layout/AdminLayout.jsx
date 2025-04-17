import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  HomeIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  RocketLaunchIcon,
  ChatBubbleLeftEllipsisIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sideMenu = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <HomeIcon className="w-5 h-5" />,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <UserGroupIcon className="w-5 h-5" />,
    },
    {
      name: "Services",
      path: "/admin/services",
      icon: <DocumentCheckIcon className="w-5 h-5" />,
    },
    {
      name: "Projects",
      path: "/admin/launches",
      icon: <RocketLaunchIcon className="w-5 h-5" />,
    },
    {
      name: "Testimonials",
      path: "/admin/testimonials",
      icon: <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-80px)] bg-gray-100">
        {/* Mobile sidebar backdrop */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-secondary">Admin Panel</h1>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(false)}
            >
              <XMarkIcon className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              {sideMenu.map((menuItem) => (
                <li key={menuItem.path}>
                  <NavLink
                    to={menuItem.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {menuItem.icon}
                    <span className="font-medium">{menuItem.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top header */}
          <header className="bg-white border-b border-gray-200">
            <div className="flex items-center justify-between p-4">
              <button
                className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Bars3Icon className="w-6 h-6 text-gray-500" />
              </button>
              <div className="flex-1" />
              {/* Add any header content here */}
            </div>
          </header>

          {/* Main content area */}
          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
