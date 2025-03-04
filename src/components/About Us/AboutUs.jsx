import React from "react";
import { RoundedButton } from "../RoundedButton";
import TeamMember from "./TeamMember";
import { useQuery } from "@tanstack/react-query";
import TeamMemberPlaceholder from "./TeamMemberPlaceholder";

export default function AboutUs() {
  const serverUrl = import.meta.env.VITE_server;

  const getTeamMembers = async () => {
    const res = await fetch(`${serverUrl}/team-members`);
    return await res.json();
  };

  const {
    isPending,
    error,
    data: teamMembers,
  } = useQuery({
    queryKey: ["getTeamMembers"],
    queryFn: getTeamMembers,
  });

  if (error) return "An error has occurred: " + error.message;

  return (
    <section>
      <div className="h-1/2 w-lg flex flex-col justify-start items-start gap-4 mx-20 my-28">
        <h5 className="text-primary font-agrandir font-bold md:text-2xl ">
          About Us
        </h5>
        <h1 className="text-secondary font-bold md:text-6xl md:mb-2">
          AgencyV2
        </h1>
        <p className="font-agrandir text-secondary text-base leading-6 tracking-wide">
          At AgencyV2, we're more than just a digital agency. We're a team of
          passionate innovators dedicated to transforming ideas into exceptional
          digital experiences. With years of expertise in web development,
          design, and digital marketing, we help businesses thrive in the
          digital age by creating solutions that are both beautiful and
          functional.
        </p>
        <RoundedButton
          text={"Contact"}
          bgColor={"primary"}
          customStyle={"text-white mt-4 font-agrandir uppercase"}
        />
      </div>
      <div class="text-center mt-20 pb-12">
        <h1 class="font-semibold text-3xl md:text-4xl font-heading text-black font-primary mb-1.5">
          Our Leadership Team
        </h1>
        <h6 class="text-lg font-primary font-medium text-black/50">
          Meet the talented individuals who drive our success. Our diverse team
          brings together expertise from various fields, ensuring we deliver
          comprehensive solutions that exceed client expectations.
        </h6>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {isPending
          ? [...Array(9)].map((_, idx) => <TeamMemberPlaceholder key={idx} />)
          : teamMembers?.map((member, index) => (
              <TeamMember
                key={index}
                memberName={member.memberName}
                memberRole={member.memberRole}
                memberImg={member.memberImg}
              />
            ))}
      </div>

      <div className="h-1/2 w-7xl flex flex-col justify-start items-start gap-4 mx-20 my-28">
        <h5 className="text-primary font-agrandir font-bold md:text-2xl ">
          Company
        </h5>

        <p className="font-agrandir text-secondary text-base leading-6 tracking-wide">
          Founded with a vision to revolutionize digital experiences, AgencyV2
          has grown into a trusted partner for businesses worldwide. Our
          commitment to innovation, quality, and client satisfaction has earned
          us recognition in the industry. We believe in building long-term
          relationships with our clients, understanding their unique needs, and
          delivering solutions that drive real business growth.
        </p>
      </div>
      <div className="h-1/2 w-7xl flex flex-col justify-start items-start gap-4 mx-20 mt-28 mb-52">
        <h5 className="text-primary font-agrandir font-bold md:text-2xl ">
          Team
        </h5>

        <p className="font-agrandir text-secondary text-base leading-6 tracking-wide">
          Our team is our greatest asset. We've carefully assembled a group of
          talented professionals who are passionate about their craft. From
          developers and designers to strategists and project managers, each
          team member brings unique skills and perspectives to the table. We
          foster a collaborative environment where creativity thrives and
          innovation is encouraged. Together, we work to create digital
          solutions that make a difference.
        </p>
      </div>
    </section>
  );
}
