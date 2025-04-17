import { useState, useCallback, Suspense } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiService } from "../../utilities/apiService";
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftEllipsisIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  CodeBracketSquareIcon,
  ChartBarIcon,
  CloudIcon,
} from "@heroicons/react/24/solid";
import DynamicIconRender from "../../utilities/DynamicIconRender";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function CRUDTable({
  endpoint,
  useToken = false,
  columns,
  title,
}) {
  const [editItem, setEditItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const queryClient = useQueryClient();
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    itemId: null,
  });

  const { data: responseData, isLoading } = useQuery({
    queryKey: [endpoint],
    queryFn: () => apiService.get(endpoint, useToken),
  });

  const createMutation = useMutation({
    mutationFn: (newItem) => {
      // Append /new to the endpoint for creating new items
      const createEndpoint = `${endpoint}/new`;
      return apiService.post(createEndpoint, newItem, true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([endpoint]);
      setEditItem(null);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => apiService.put(endpoint, id, data),
    onSuccess: () => {
      queryClient.invalidateQueries([endpoint]);
      setEditItem(null);
    },
    onError: (error) => {
      console.error("Update failed:", error);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => apiService.delete(endpoint, id, useToken),
    onSuccess: () => queryClient.invalidateQueries([endpoint]),
  });

  const data = Array.isArray(responseData) ? responseData : responseData?.data;

  const filteredData =
    data?.filter((item) => {
      const searchFields = [
        item.projectTitle, // for projects
        item.name, // for testimonials
        item.memberName, // for team members
        item.firstName, // for users
        item.lastName, // for users
        item.productName, // for services
      ];

      return searchFields.some(
        (field) =>
          field && field.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }) || [];

  const renderTableCell = useCallback((item, col) => {
    if (col.key === "icon") {
      if (title === "Services") {
        const serviceIcons = {
          ChatBubbleLeftEllipsisIcon,
          GlobeAltIcon,
          DevicePhoneMobileIcon,
          MagnifyingGlassIcon,
          WrenchScrewdriverIcon,
          CodeBracketSquareIcon,
          ChartBarIcon,
          CloudIcon,
        };

        const Icon = serviceIcons[item[col.key]];
        if (Icon) {
          return (
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
            </div>
          );
        }
      }

      return (
        <Suspense
          fallback={
            <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse" />
          }
        >
          <DynamicIconRender iconName={item[col.key]} />
        </Suspense>
      );
    }

    if (col.key === "image" || col.key === "memberImg") {
      return (
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
              src={item[col.key]}
              alt={item.name || "thumbnail"}
            />
          </div>
        </div>
      );
    }

    if (col.render) {
      return col.render(item[col.key]);
    }

    return (
      <div className="text-sm text-gray-900 truncate max-w-3xl">
        {item[col.key]}
      </div>
    );
  }, []);

  const handleDelete = () => {
    deleteMutation.mutate(deleteModal.itemId);
    setDeleteModal({ isOpen: false, itemId: null });
  };

  const handleSave = async (id, data) => {
    try {
      if (id) {
        await updateMutation.mutateAsync({ id, data });
      } else {
        await createMutation.mutateAsync(data);
      }
    } catch (error) {
      throw new Error(error.message || "Failed to save");
    }
  };

  const handleAddNew = () => {
    // Create an empty object with the same structure as the columns
    const emptyItem = columns.reduce((acc, col) => {
      // Handle special fields with their proper structure
      switch (col.key) {
        case "projectTechnologies":
          acc[col.key] = [];
          break;
        case "features":
          acc[col.key] = [];
          break;
        case "challenges":
          acc[col.key] = [];
          break;
        case "image":
        case "memberImg":
        case "projectImage":
          acc[col.key] = "";
          break;
        case "title":
          acc.projectTitle = "";
          break;
        case "category":
          acc.projectCategory = "";
          break;
        case "description":
          acc.projectDescription = "";
          break;
        case "links":
          acc.links = {
            github: "",
            live: "",
          };
          break;
        default:
          acc[col.key] = "";
      }
      return acc;
    }, {});

    // Add any additional fields that might not be in columns but are needed
    if (title === "Projects") {
      emptyItem.projectTechnologies = [];
      emptyItem.features = [];
      emptyItem.challenges = [];
      emptyItem.projectTitle = emptyItem.projectTitle || "";
      emptyItem.projectCategory = emptyItem.projectCategory || "";
      emptyItem.projectDescription = emptyItem.projectDescription || "";
      emptyItem.projectImage = emptyItem.projectImage || "";
    }

    setEditItem(emptyItem);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[80vh] w-6xl">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!data || !Array.isArray(data)) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-gray-500 text-lg">No data available</p>
        <button
          onClick={handleAddNew}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
        >
          Add New {title}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 capitalize">
              Manage {title}
            </h3>
            <p className="text-gray-500 mt-1">
              {filteredData.length} {title} found
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 self-stretch sm:self-auto">
            <div className="relative flex-1 sm:flex-none">
              <input
                type="text"
                placeholder={`Search by ${
                  title === "Users"
                    ? "name"
                    : title === "Projects"
                    ? "title"
                    : title === "Team Members"
                    ? "member name"
                    : title === "Services"
                    ? "product name"
                    : "name"
                }...`}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <span className="absolute right-3 top-2.5 text-gray-400">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </span>
            </div>
            <button
              onClick={handleAddNew}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              <PlusIcon className="w-5 h-5" />
              Add New
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      scope="col"
                      className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                    >
                      {col.label}
                    </th>
                  ))}
                  <th
                    scope="col"
                    className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50">
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      >
                        {renderTableCell(item, col)}
                      </td>
                    ))}
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setEditItem(item)}
                          className="text-primary hover:text-primary/80"
                        >
                          <PencilIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() =>
                            setDeleteModal({ isOpen: true, itemId: item._id })
                          }
                          className="text-red-600 hover:text-red-800"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, itemId: null })}
        onDelete={handleDelete}
        itemType={title.slice(0, -1)}
      />

      <EditModal
        isOpen={!!editItem}
        onClose={() => {
          setEditItem(null);
          updateMutation.reset();
          createMutation.reset();
        }}
        onSave={handleSave}
        editItem={editItem}
        title={title.slice(0, -1)}
        isLoading={updateMutation.isLoading || createMutation.isLoading}
      />
    </div>
  );
}
