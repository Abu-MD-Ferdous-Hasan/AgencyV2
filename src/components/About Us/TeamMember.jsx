import React from "react";

export default function TeamMember({ memberName, memberRole, memberImg }) {
  return (
    <div class="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center">
      <div class="mb-8">
        <img
          class="object-center object-cover rounded-full h-44 w-44"
          src={memberImg}
          alt="photo"
        />
      </div>
      <div class="text-center">
        <p class="text-2xl text-black font-primary font-semibold mb-2">
          {memberName}
        </p>
        <p class="text-lg font-medium text-black/50 font-primary">
          {memberRole}
        </p>
      </div>
    </div>
  );
}
