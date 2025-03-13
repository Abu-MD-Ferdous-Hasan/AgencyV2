import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiService } from "../../utilities/apiService";

export default function CRUDTable({ endpoint, columns, title }) {
  const [editItem, setEditItem] = useState(null);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: [endpoint],
    queryFn: () => apiService.get(endpoint),
  });
  console.log({ data });
  const createMutation = useMutation({
    mutationFn: (newItem) => apiService.post(endpoint, newItem),
    onSuccess: () => queryClient.invalidateQueries([endpoint]),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => apiService.put(endpoint, id, data),
    onSuccess: () => queryClient.invalidateQueries([endpoint]),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => apiService.delete(endpoint, id),
    onSuccess: () => queryClient.invalidateQueries([endpoint]),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage {title}</h2>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
            <table className="min-w-full overflow-x-scroll divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      {col.label}
                    </th>
                  ))}
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.map((item) => (
                  <tr
                    key={item._id}
                    className="transition-all hover:bg-gray-100 hover:shadow-lg"
                  >
                    {columns.map((col) => (
                      <td key={col.key} className="px-6 py-4 whitespace-nowrap">
                        {col.key === "image" || col.key === "memberImg" ? (
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-10 h-10 rounded-full object-cover"
                                src={item[col.key]}
                                alt={item.name || "thumbnail"}
                              />
                            </div>
                            <div className="ml-4 text-sm text-gray-500 truncate">
                              {item[col.key]}
                            </div>
                          </div>
                        ) : (
                          <div className="text-sm text-gray-900">
                            {item[col.key]}
                          </div>
                        )}
                      </td>
                    ))}
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button
                        onClick={() => setEditItem(item)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteMutation.mutate(item._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
