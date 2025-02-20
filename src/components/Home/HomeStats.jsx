import React from "react";
import CountUp from "react-countup";
import SvgsObj from "../../utilities/svgs";

const StateCard = ({ stats, stateText, statsXtra }) => (
  <div className="flex flex-col px-4 py-8 text-center">
    <dt className="order-last text-lg text-white">{stateText}</dt>

    <dd className="text-4xl font-primary font-semibold text-white md:text-5xl">
      {/* {parseInt(stats)} */}
      <CountUp enableScrollSpy={true} start={0} end={stats} />

      {statsXtra ? statsXtra : null}
    </dd>
  </div>
);
export default function HomeStats() {
  const stats = [
    { stats: "6", stateText: "Happy Clients" },
    { stats: "11", stateText: "Completed Projects" },
    { stats: "7", statsXtra: "M", stateText: "Transactions" },
    { stats: "6000", statsXtra: "+", stateText: "Customers" },
  ];
  return (
    <div className="w-full relative text-center  bg-primary mb-30 px-4 py-8 sm:px-6 sm:py-12 lg:px-50">
      <SvgsObj.ColoredBell className="absolute -translate-1/2 top-0 right-32" />
      <img
        src={SvgsObj.Vector1}
        className="absolute translate-3 bottom-0 left-0"
      />
      <img
        src={SvgsObj.Vector2}
        className="absolute -translate-1/2 top-0 left-52"
      />
      <img
        src={SvgsObj.Vector3}
        className="absolute -translate-1/2 top-0 right-32"
      />
      <img
        src={SvgsObj.Succlent}
        className="absolute translate-1/2 bottom-0 left-80"
      />
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-bgColor sm:text-4xl">
          Trusted by our Clients
        </h2>
      </div>

      <dl className="mg-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2  lg:grid-cols-4">
        {stats.map((elm, idx) => (
          <StateCard
            key={elm?.stats + idx}
            stats={elm?.stats}
            stateText={elm?.stateText}
            statsXtra={elm?.statsXtra}
          />
        ))}
      </dl>
    </div>
  );
}
