import { useState, useCallback, Suspense } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiService } from "../../utilities/apiService";
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import DynamicIconRender from "../../utilities/DynamicIconRender";
import DeleteModal from "./DeleteModal";

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
    mutationFn: (newItem) => apiService.post(endpoint, newItem),
    onSuccess: () => queryClient.invalidateQueries([endpoint]),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => apiService.put(endpoint, id, data),
    onSuccess: () => queryClient.invalidateQueries([endpoint]),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => apiService.delete(endpoint, id, useToken),
    onSuccess: () => queryClient.invalidateQueries([endpoint]),
  });

  const data = Array.isArray(responseData) ? responseData : responseData?.data;

  const filteredData =
    data?.filter((item) => {
      const searchFields = [
        item.name, // for testimonials
        item.title, // for projects
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
      return (
        <Suspense
          fallback={
            <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse" />
          }
        >
          {/* {IconRenderer && <IconRenderer icon={item[col.key]} />} */}
          {/* {console.log(IconRenderer, item[col.key])} */}
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
  }, []); // Empty dependency array since we don't use any external values

  const handleDelete = () => {
    deleteMutation.mutate(deleteModal.itemId);
    setDeleteModal({ isOpen: false, itemId: null });
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
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
          Add New {title}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 capitalize">
              Manage {title}
            </h3>
            <p className="text-gray-500 mt-1">
              {filteredData.length} {title} found
            </p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
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
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <span className="absolute right-3 top-2.5 text-gray-400">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
              <PlusIcon className="w-5 h-5" />
              Add New
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-7xl w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left"
                >
                  {col?.label}
                </th>
              ))}
              <th
                scope="col"
                className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-right"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item) => (
              <tr
                key={item._id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                {columns?.map((col) => (
                  <td key={col.key} className="px-6 py-4 whitespace-nowrap">
                    {renderTableCell(item, col)}
                  </td>
                ))}
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button
                      onClick={() => setEditItem(item)}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      title="Edit"
                    >
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setDeleteModal({
                          isOpen: true,
                          itemId: item._id,
                        })
                      }
                      className="text-red-500 hover:text-red-700 transition-colors"
                      title="Delete"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, itemId: null })}
        onDelete={handleDelete}
        itemType={title.slice(0, -1)} // Remove 's' from plural title
      />
    </div>
  );
}
