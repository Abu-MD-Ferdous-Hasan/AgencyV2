import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import {
  ChatBubbleLeftEllipsisIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  MegaphoneIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import ServiceCards from "./ServiceCards";

export default function WeOffer() {
  const services = [
    {
      icon: <ChatBubbleLeftEllipsisIcon className="h-8 w-8" />,
      serviceName: "Social Content",
      description:
        "This is a wider card with supporting text below as a natural content.",
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      serviceName: "Web development",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, similique nulla!",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      serviceName: "Mobile App",
      description:
        "This is a wider card with supporting text below as a natural content.",
    },
    {
      icon: <MagnifyingGlassIcon className="h-8 w-8" />,
      serviceName: "SEO",
      description:
        "This is a wider card with supporting text below as a natural content.",
    },
    {
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      serviceName: "User testing",
      description:
        "This is a wider card with supporting text below as a natural content.",
    },
    {
      icon: <MegaphoneIcon className="h-8 w-8" />,
      serviceName: "Digital Marketing",
      description:
        "This is a wider card with supporting text below as a natural content.",
    },
  ];
  return (
    <>
      <div
        id="services"
        class="relative pt-20 pb-8 md:pb-20 md:pt-16 bg-primary"
      >
        <div class="container xl:max-w-6xl mx-auto">
          {/* <!-- Heading start --> */}
          <header class="text-center mx-auto mb-12 lg:px-20">
            <h2 class="text-4xl font-primary leading-normal mb-2 font-semibold text-bgColor">
              What We Do
            </h2>
            <p class="text-gray-200 leading-relaxed font-light text-xl mx-auto pb-2">
              Save time managing advertising &amp; Content for your business.
            </p>
          </header>
          {/* <!-- End heading --> */}
          {/* <!-- row --> */}
          <div class="grid grid-cols-3 gap-2 w-full">
            {services.map((elm, idx) => {
              return (
                <ServiceCards
                  key={elm.serviceName + idx}
                  serviceName={elm?.serviceName}
                  icon={elm?.icon}
                  description={elm?.description}
                />
              );
            })}
          </div>
          {/* <!-- end row --> */}
        </div>
      </div>
    </>
  );
}
