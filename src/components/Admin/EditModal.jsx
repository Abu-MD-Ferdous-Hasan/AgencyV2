import { useEffect, useState } from "react";

export default function EditModal({
  isOpen,
  onClose,
  onSave,
  editItem,
  title,
  isLoading,
}) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (editItem) {
      // Filter out _id and timestamps from the form data
      const { _id, createdAt, updatedAt, __v, ...rest } = editItem;
      setFormData(rest);
    }
    // Reset error when modal opens/closes
    setError(null);
  }, [editItem]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    try {
      await onSave(editItem._id, formData);
    } catch (err) {
      setError(err.message || "Failed to save changes");
    }
  };

  const renderFormField = (key, value) => {
    // Handle different types of fields
    if (typeof value === "boolean") {
      return (
        <div className="flex items-center">
          <input
            type="checkbox"
            id={key}
            checked={formData[key]}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, [key]: e.target.checked }))
            }
            className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
          />
        </div>
      );
    }

    if (Array.isArray(value)) {
      return (
        <input
          type="text"
          id={key}
          value={formData[key].join(", ")}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              [key]: e.target.value.split(",").map((item) => item.trim()),
            }))
          }
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
          placeholder={`Enter ${key} (comma-separated)`}
        />
      );
    }

    if (key === "icon") {
      return (
        <select
          id={key}
          value={formData[key]}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, [key]: e.target.value }))
          }
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        >
          <option value="">Select Icon</option>
          {/* Add your icon options here */}
          <option value="code-bracket">Code Bracket</option>
          <option value="cpu-chip">CPU Chip</option>
          {/* Add more options based on your available icons */}
        </select>
      );
    }

    return (
      <input
        type={typeof value === "number" ? "number" : "text"}
        id={key}
        value={formData[key] || ""}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, [key]: e.target.value }))
        }
        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        placeholder={`Enter ${key}`}
      />
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 backdrop-blur-sm transition-opacity"></div>

      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xs transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <form onSubmit={handleSubmit}>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <h3 className="font-semibold leading-6 text-secondary text-xl">
                    Edit details of {title.toLowerCase()}
                  </h3>

                  {/* Error Message */}
                  {error && (
                    <div className="mt-2 p-2 text-sm text-red-600 bg-red-50 rounded-md">
                      {error}
                    </div>
                  )}

                  <div className="mt-4 space-y-4">
                    {Object.entries(formData).map(([key, value]) => (
                      <div key={key}>
                        <label
                          htmlFor={key}
                          className="block text-sm font-medium text-gray-700 capitalize"
                        >
                          {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                        </label>
                        {renderFormField(key, value)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                disabled={isLoading}
                className={`inline-flex items-center justify-center w-full rounded-md px-3 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto ${
                  isLoading
                    ? "bg-primary/70 cursor-not-allowed"
                    : "bg-primary hover:bg-primary/90"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <span>Saving...</span>
                  </div>
                ) : (
                  "Save Changes"
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={isLoading}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
