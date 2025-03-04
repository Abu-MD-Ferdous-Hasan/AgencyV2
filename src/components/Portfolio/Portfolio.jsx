import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./ProjectCard";
import ProjectCardPlaceholder from "./ProjectCardPlaceholder";

export default function Portfolio() {
  const serverUrl = import.meta.env.VITE_server;

  const getProjects = async () => {
    const res = await fetch(`${serverUrl}/projects`);
    return await res.json();
  };

  const {
    error,
    data: projects,
    isFetching,
  } = useQuery({
    queryKey: ["getProjects"],
    queryFn: getProjects,
  });

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="py-20 px-24 bg-bg mx-auto text-center min-h-screen">
      <div>
        <h1 className="md:text-5xl font-primary font-bold">Our Portfolio</h1>
        <h5 className="font-medium font-primary text-lg text-black/80 mt-2.5">
          Explore our collection of successful projects and digital solutions
        </h5>
      </div>
      <div className="mt-20 mb-64 grid grid-cols-2 gap-10 place-items-center">
        {isFetching
          ? [...Array(6)].map((_, idx) => <ProjectCardPlaceholder key={idx} />)
          : projects?.map((project) => (
              <ProjectCard
                key={project._id}
                projectTitle={project.title}
                projectCategory={project.category}
                projectImage={project.image}
                projectDescription={project.description}
                projectTechnologies={project.technologies}
              />
            ))}
      </div>
    </section>
  );
}
