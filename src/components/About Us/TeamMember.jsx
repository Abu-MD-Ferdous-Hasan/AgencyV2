import React from "react";

export default function TeamMember({ memberName, memberRole, memberImg }) {
  return (
    <div className="w-full bg-white rounded-lg p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center">
      <div className="mb-4 sm:mb-6 md:mb-8">
        <img
          className="object-center object-cover rounded-full h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44"
          src={memberImg}
          alt="photo"
        />
      </div>
      <div className="text-center">
        <p className="text-lg sm:text-xl md:text-2xl text-black font-primary font-semibold mb-1 sm:mb-2">
          {memberName}
        </p>
        <p className="text-sm sm:text-base md:text-lg font-medium text-black/50 font-primary">
          {memberRole}
        </p>
      </div>
    </div>
  );
}
