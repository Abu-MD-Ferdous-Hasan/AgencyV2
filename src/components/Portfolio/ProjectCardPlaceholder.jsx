import React from "react";

export default function ProjectCardPlaceholder() {
  return (
    <div className="w-full min-h-96 bg-white rounded-lg overflow-hidden shadow-2xs">
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gray-300 animate-pulse"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="h-8 w-48 bg-secondary/50 rounded animate-pulse"></div>
          <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
        <div className="h-12 bg-gray-200 rounded mb-4 animate-pulse"></div>
        <div className="flex flex-wrap gap-2">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-7 w-24 bg-gray-200 rounded-md animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
