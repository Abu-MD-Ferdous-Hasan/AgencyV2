import React from "react";
import { RoundedButton } from "../RoundedButton";
import TeamMember from "./TeamMember";
import { useQuery } from "@tanstack/react-query";
import TeamMemberPlaceholder from "./TeamMemberPlaceholder";
import { apiService } from "../../utilities/apiService";

export default function AboutUs() {
  const {
    isPending,
    error,
    data: teamMembers,
  } = useQuery({
    queryKey: ["getTeamMembers"],
    queryFn: () => apiService.get("team-members"),
  });

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col justify-start items-start gap-3 sm:gap-4 my-12 sm:my-16 md:my-20 lg:my-28">
        <h5 className="text-primary font-agrandir font-bold text-lg sm:text-xl md:text-2xl">
          About Us
        </h5>
        <h1 className="text-secondary font-bold text-4xl sm:text-5xl md:text-6xl mb-1 sm:mb-2">
          AgencyV2
        </h1>
        <p className="font-agrandir text-secondary text-sm sm:text-base leading-5 sm:leading-6 tracking-wide max-w-3xl">
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
          customStyle={"text-white mt-3 sm:mt-4 font-agrandir uppercase"}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center mt-12 sm:mt-16 md:mt-20 pb-8 sm:pb-12">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl font-heading text-black font-primary mb-1 sm:mb-1.5">
          Our Leadership Team
        </h1>
        <h6 className="text-base sm:text-lg font-primary font-medium text-black/50 max-w-3xl mx-auto px-4">
          Meet the talented individuals who drive our success. Our diverse team
          brings together expertise from various fields, ensuring we deliver
          comprehensive solutions that exceed client expectations.
        </h6>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
        {isPending
          ? [...Array(6)].map((_, idx) => <TeamMemberPlaceholder key={idx} />)
          : teamMembers?.map((member, index) => (
              <TeamMember
                key={index}
                memberName={member.memberName}
                memberRole={member.memberRole}
                memberImg={member.memberImg}
              />
            ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col justify-start items-start gap-3 sm:gap-4 my-12 sm:my-16 md:my-20 lg:my-28">
        <h5 className="text-primary font-agrandir font-bold text-lg sm:text-xl md:text-2xl">
          Company
        </h5>
        <p className="font-agrandir text-secondary text-sm sm:text-base leading-5 sm:leading-6 tracking-wide max-w-3xl">
          Founded with a vision to revolutionize digital experiences, AgencyV2
          has grown into a trusted partner for businesses worldwide. Our
          commitment to innovation, quality, and client satisfaction has earned
          us recognition in the industry. We believe in building long-term
          relationships with our clients, understanding their unique needs, and
          delivering solutions that drive real business growth.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col justify-start items-start gap-3 sm:gap-4 my-12 sm:my-16 md:my-20 lg:my-28 mb-20 sm:mb-32 md:mb-40 lg:mb-52">
        <h5 className="text-primary font-agrandir font-bold text-lg sm:text-xl md:text-2xl">
          Team
        </h5>
        <p className="font-agrandir text-secondary text-sm sm:text-base leading-5 sm:leading-6 tracking-wide max-w-3xl">
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
