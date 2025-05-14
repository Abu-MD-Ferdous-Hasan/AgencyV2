import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { apiService } from "../../utilities/apiService";
import {
  FaServer,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
} from "react-icons/fa";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => apiService.get(`projects/${id}`),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const project = data?.data;

  if (!project) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate("/portfolio")}
        className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6 group transition-colors"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Portfolio</span>
      </button>

      {/* Hero Section */}
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-primary font-bold text-secondary">
          {project.projectTitle}
        </h1>
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {project.projectCategory}
          </span>
          <span className="text-gray-500">
            {new Date(project.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
        <img
          src={project.projectImage}
          alt={project.projectTitle}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Technologies */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-secondary mb-4">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-3">
          {project.projectTechnologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
              style={{ backgroundColor: tech.color + "20" }}
            >
              {tech.icon ? (
                <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
              ) : (
                <FaServer className="text-gray-500" />
              )}
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Project Links */}
      {(project.githubLink || project.liveLink) && (
        <div className="flex gap-4 mb-8">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FaGithub />
              View Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      )}

      {/* Project Description */}
      <div className="prose prose-lg max-w-none">
        <h2 className="text-xl font-semibold text-secondary mb-4">
          Project Overview
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {project.projectDescription}
        </p>

        {/* Additional Details */}
        {project.features && (
          <>
            <h2 className="text-xl font-semibold text-secondary mt-8 mb-4">
              Key Features
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Challenges & Solutions */}
        {project.challenges && (
          <>
            <h2 className="text-xl font-semibold text-secondary mt-8 mb-4">
              Challenges & Solutions
            </h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600">{challenge.solution}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
