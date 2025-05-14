import React from "react";

export default function TeamMemberPlaceholder() {
  return (
    <div className="w-full bg-white rounded-lg p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center">
      <div className="mb-4 sm:mb-6 md:mb-8">
        <div className="bg-black/20 rounded-full h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 animate-pulse" />
      </div>
      <div className="text-center">
        <p className="h-4 sm:h-5 w-24 sm:w-30 rounded-md bg-secondary/80 animate-pulse mx-auto mb-1 sm:mb-2"></p>
        <p className="h-4 sm:h-5 w-40 sm:w-52 rounded-md bg-secondary/50 animate-pulse mx-auto"></p>
      </div>
    </div>
  );
}
