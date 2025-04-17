import CRUDTable from "./CRUDTable";

export default function ManageLaunches() {
  const columns = [
    {
      key: "projectImage",
      label: "Preview",
      render: (image) => (
        <div className="flex items-center">
          <img
            src={image}
            alt="Project Preview"
            className="w-20 h-12 object-cover rounded"
          />
        </div>
      ),
    },
    {
      key: "projectTitle",
      label: "Project Title",
    },
    {
      key: "projectCategory",
      label: "Category",
    },
    {
      key: "projectDescription",
      label: "Description",
      render: (description) => (
        <div className="max-w-xs">
          <p className="text-sm text-gray-600 truncate" title={description}>
            {description}
          </p>
        </div>
      ),
    },
    {
      key: "githubLink",
      label: "GitHub",
      render: (link) => (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80"
        >
          View on GitHub
        </a>
      ),
    },
    {
      key: "liveLink",
      label: "Live Demo",
      render: (link) => (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80"
        >
          View Live
        </a>
      ),
    },
  ];

  return <CRUDTable endpoint="projects" columns={columns} title="Projects" />;
}
