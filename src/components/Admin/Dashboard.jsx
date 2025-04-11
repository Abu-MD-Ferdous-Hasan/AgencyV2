import {
  BriefcaseIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  CursorArrowRaysIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8 w-full">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r max-w-2xl from-primary/90 to-primary rounded-lg p-6 text-white shadow-lg">
        <h1 className="text-3xl font-bold">Welcome to AgencyV2 Dashboard</h1>
        <p className="mt-2 text-white/80">
          Track your agency's performance and manage your services
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Projects Card */}
        <div className="relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <BriefcaseIcon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2.5 py-0.5 rounded-full">
                +12% ↑
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-400">
              Active Projects
            </h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">28</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20"></div>
        </div>

        {/* Clients Card */}
        <div className="relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <UserGroupIcon className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2.5 py-0.5 rounded-full">
                +5% ↑
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-400">Total Clients</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">3,462</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500/20"></div>
        </div>

        {/* Services Card */}
        <div className="relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-50 p-3 rounded-lg">
                <DocumentCheckIcon className="w-6 h-6 text-purple-500" />
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2.5 py-0.5 rounded-full">
                +8% ↑
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-400">
              Active Services
            </h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500/20"></div>
        </div>

        {/* Revenue Card */}
        <div className="relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <ChartBarIcon className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2.5 py-0.5 rounded-full">
                +15% ↑
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-400">
              Monthly Revenue
            </h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">$103,430</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500/20"></div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Projects */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Projects
            </h2>
            <button className="text-sm text-primary hover:text-primary/80">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {/* Project Items */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded">
                  <CursorArrowRaysIcon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Website Redesign
                  </p>
                  <p className="text-xs text-gray-500">In Progress</p>
                </div>
              </div>
              <span className="text-xs font-medium text-yellow-600 bg-yellow-100 px-2.5 py-0.5 rounded-full">
                70%
              </span>
            </div>
            {/* Add more project items as needed */}
          </div>
        </div>

        {/* Recent Clients */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Clients
            </h2>
            <button className="text-sm text-primary hover:text-primary/80">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {/* Client Items */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">TC</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Tech Corp</p>
                  <p className="text-xs text-gray-500">Web Development</p>
                </div>
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2.5 py-0.5 rounded-full">
                Active
              </span>
            </div>
            {/* Add more client items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
