import CRUDTable from "./CRUDTable";

export default function ManageTestimonials() {
  const columns = [
    {
      key: "image",
      label: "Avatar",
      render: (image) => (
        <div className="flex items-center">
          <img
            src={image}
            alt="Profile"
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>
      ),
      skipText: true,
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "designation",
      label: "Designation",
    },

    {
      key: "feedback",
      label: "Feedback",
      render: (feedback) => (
        <div className="max-w-xs">
          <p className="text-sm text-gray-600 truncate" title={feedback}>
            {feedback}
          </p>
        </div>
      ),
    },
  ];

  return (
    <CRUDTable endpoint="testimonials" columns={columns} title="Testimonials" />
  );
}
