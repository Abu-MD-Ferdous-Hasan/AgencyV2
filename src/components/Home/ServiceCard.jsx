import { useState, useEffect, lazy } from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { GrServices } from "react-icons/gr";

export default function ServiceCard({ icon, serviceName, description }) {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    if (icon) {
      import(`@heroicons/react/24/outline`)
        .then((module) => {
          const ImportedIcon = module[icon];
          if (ImportedIcon) {
            setIconComponent(() => ImportedIcon); // Ensure it is a valid React component
          }
        })
        .catch((err) => {
          console.error("Icon not found:", err);
        });
    }
  }, [icon]);
  return (
    <div className="flex justify-items-start w-full">
      {/* <!-- service block --> */}
      <div className="px-5 py-8 bg-primary transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-lg border border-white">
        <div className="inline-block text-bgColor mb-4">
          {/* <!-- icon --> */}
          {IconComponent ? (
            <IconComponent className="h-10 w-10 inline-block bg-primary" />
          ) : (
            <GrServices className="h-10 w-10 inline-block bg-primary" />
          )}
        </div>
        <h3 className="text-3xl leading-normal mb-2 font-semibold text-bgColor font-primary">
          {serviceName}
        </h3>
        <p className="text-gray-200 font-light tracking-wide">{description}</p>
      </div>
      {/* <!-- end service block --> */}
    </div>
  );
}
