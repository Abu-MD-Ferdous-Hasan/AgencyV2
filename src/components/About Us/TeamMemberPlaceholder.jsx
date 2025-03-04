import React from "react";

export default function TeamMemberPlaceholder() {
  return (
    <div class="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center">
      <div class="mb-8">
        <div class="bg-black/20 rounded-full h-44 w-44 animate-pulse" />
      </div>
      <div class="text-center">
        <p class="h-5 w-30 rounded-md bg-secondary/80 animate-pulse mx-auto mb-2"></p>
        <p class="h-5 w-52 rounded-md bg-secondary/50 animate-pulse mx-auto"></p>
      </div>
    </div>
  );
}
