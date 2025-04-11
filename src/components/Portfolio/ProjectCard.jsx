import React from "react";
import { FaServer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({
  _id,
  projectTitle,
  projectCategory,
  projectImage,
  projectDescription,
  projectTechnologies,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/portfolio/${_id}`)}
      className="w-full min-h-96 bg-white rounded-lg overflow-hidden shadow-2xs hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={projectImage}
          alt={projectTitle}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-primary font-semibold text-secondary">
            {projectTitle}
          </h3>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {projectCategory}
          </span>
        </div>
        <p className="text-black/60 font-primary mb-4 text-left line-clamp-2">
          {projectDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {projectTechnologies.map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-gray-700 rounded-md text-sm font-medium flex items-center gap-1`}
              style={{ backgroundColor: tech.color + "20" }}
            >
              {tech.icon ? (
                <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
              ) : (
                <>
                  <FaServer className="text-gray-500 text-lg" />
                </>
              )}
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
