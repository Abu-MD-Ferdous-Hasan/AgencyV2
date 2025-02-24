import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import {
  ChatBubbleLeftEllipsisIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  MegaphoneIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import React, { Suspense, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import ServiceCardPlaceholder from "./ServiceCardPLaceholder";
import { useQuery } from "@tanstack/react-query";

export default function WeOffer() {
  const serverUrl = import.meta.env.VITE_server;

  const getServices = async () => {
    const response = await fetch(`${serverUrl}/digital-services`);
    return await response.json();
  };

  const {
    isPending,
    error,
    data: services,
    isFetching,
  } = useQuery({
    queryKey: ["getDigitalServices"],
    queryFn: getServices,
  });
  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div
        id="services"
        className="relative pt-20 pb-8 md:pb-20 md:pt-16 bg-primary"
      >
        <div className="container xl:max-w-6xl mx-auto">
          {/* <!-- Heading start --> */}
          <header className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="text-4xl font-primary leading-normal mb-2 font-semibold text-bgColor">
              What We Do
            </h2>
            <p className="text-gray-200 leading-relaxed font-light text-xl mx-auto pb-2">
              Save time managing advertising &amp; Content for your business.
            </p>
          </header>
          {/* <!-- End heading --> */}
          {/* <!-- row --> */}
          <div className="grid grid-cols-3 gap-2 w-full">
            {isFetching
              ? [...Array(6)].map((elm, idx) => (
                  <ServiceCardPlaceholder key={idx} />
                ))
              : services.map((elm, idx) => {
                  return (
                    <Suspense
                      key={elm.serviceName + idx}
                      fallback={<ServiceCardPlaceholder />}
                    >
                      <ServiceCard
                        serviceName={elm?.serviceName}
                        icon={elm?.icon}
                        description={elm?.description}
                      />
                    </Suspense>
                  );
                })}
          </div>
          {/* <!-- end row --> */}
        </div>
      </div>
    </>
  );
}
