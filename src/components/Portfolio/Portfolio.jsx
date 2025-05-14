import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./ProjectCard";
import ProjectCardPlaceholder from "./ProjectCardPlaceholder";
import { apiService } from "../../utilities/apiService";

export default function Portfolio() {
  const {
    error,
    data = [],
    isFetching,
  } = useQuery({
    queryKey: ["getProjects"],
    queryFn: () => apiService.get("projects"),
  });

  if (error) return "An error has occurred: " + error.message;

  const projects = data.data || [];
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-24 bg-bg mx-auto text-center min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold">
          Our Portfolio
        </h1>
        <h5 className="font-medium font-primary text-base sm:text-lg text-black/80 mt-2 sm:mt-2.5 max-w-2xl mx-auto">
          Explore our collection of successful projects and digital solutions
        </h5>
      </div>
      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-16 sm:mb-24 md:mb-32 lg:mb-64 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 place-items-center">
        {isFetching
          ? [...Array(6)].map((_, idx) => <ProjectCardPlaceholder key={idx} />)
          : projects.map((project) => (
              <ProjectCard
                key={project._id}
                _id={project._id}
                projectTitle={project.projectTitle}
                projectCategory={project.projectCategory}
                projectImage={project.projectImage}
                projectDescription={project.projectDescription}
                projectTechnologies={project.projectTechnologies}
              />
            ))}
      </div>
    </section>
  );
}
