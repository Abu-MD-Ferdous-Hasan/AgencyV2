import CRUDTable from "./CRUDTable";

export default function ManageLaunches() {
  const columns = [
    {
      key: "image",
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
      key: "title",
      label: "Project Title",
    },
    {
      key: "category",
      label: "Category",
    },

    {
      key: "description",
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
      key: "technologies",
      label: "Tech Stack",
      render: (technologies) => (
        <div className="flex gap-2 items-center">
          {technologies?.map((tech, idx) => (
            <div key={idx} className="group relative" title={tech.name}>
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-6 h-6 hover:scale-110 transition-transform"
                style={{ borderRadius: "0.25rem" }}
              />
              <span className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return <CRUDTable endpoint="projects" columns={columns} title="Projects" />;
}
