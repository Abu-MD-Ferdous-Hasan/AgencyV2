import {
  EllipsisVerticalIcon,
  CheckIcon,
  BanknotesIcon,
  UserIcon,
  UserPlusIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export default function Dashboard() {
  return (
    <div class="mt-12 grid place-items-center w-full">
      <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 w-xl">
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden text-white bg-primary/70  shadow-primary/20 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <BanknotesIcon className="w-6 h-6 text-white" />
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Today's Money
            </p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              $53k
            </h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">+55%</strong>&nbsp;than last week
            </p>
          </div>
        </div>
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-primary/70  shadow-primary/20 text-white shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <UserIcon className="w-6 h-6 text-white" />
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Today's Users
            </p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              2,300
            </h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">+3%</strong>&nbsp;than last month
            </p>
          </div>
        </div>
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-primary/70  shadow-primary/20 text-white shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <UserPlusIcon className="w-6 h-6 text-white" />
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              New Clients
            </p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              3,462
            </h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-red-500">-2%</strong>&nbsp;than yesterday
            </p>
          </div>
        </div>
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-primary/70  shadow-primary/20 text-white shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <ChartBarIcon className="w-6 h-6 text-white" />
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Sales
            </p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              $103,430
            </h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">+5%</strong>&nbsp;than yesterday
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
