import React from "react";

export default function ServiceCards({ icon, serviceName, description }) {
  return (
    <div class="flex justify-items-start w-full">
      {/* <!-- service block --> */}
      <div class="px-5 py-8 bg-primary transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-lg border border-white">
        <div class="inline-block text-bgColor mb-4">
          {/* <!-- icon --> */}
          {icon}
        </div>
        <h3 class="text-3xl leading-normal mb-2 font-semibold text-bgColor font-primary">
          {serviceName}
        </h3>
        <p class="text-gray-200 font-light tracking-wide">{description}</p>
      </div>
      {/* <!-- end service block --> */}
    </div>
  );
}
