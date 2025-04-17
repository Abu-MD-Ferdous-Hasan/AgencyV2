import { useEffect, useState } from "react";
import {
  ArrowUpTrayIcon,
  ChatBubbleLeftEllipsisIcon,
  ChartBarIcon,
  CloudIcon,
  CodeBracketIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  CubeIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  FolderIcon,
  GlobeAltIcon,
  HomeIcon,
  KeyIcon,
  LinkIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  PuzzlePieceIcon,
  ServerIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Square3Stack3DIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

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
  const [isUploading, setIsUploading] = useState(false);
  const [showTechForm, setShowTechForm] = useState(false);
  const [newTech, setNewTech] = useState({
    name: "",
    icon: "",
    color: "#000000",
  });
  const [newFeature, setNewFeature] = useState("");

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

  const handleImageUpload = async (file) => {
    setIsUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success && data.data && data.data.url) {
        return data.data.url;
      } else {
        throw new Error(data.error?.message || "Failed to upload image");
      }
    } catch (err) {
      setError(err.message || "Failed to upload image");
      return null;
    } finally {
      setIsUploading(false);
    }
  };

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
      if (key === "projectTechnologies") {
        return (
          <div className="space-y-2">
            <div className="flex flex-col gap-3 p-2 border rounded-md">
              {formData[key].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md group hover:border-primary transition-colors"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-6 h-6"
                    style={{ borderRadius: "0.25rem" }}
                  />
                  <span className="text-sm text-gray-700">{tech.name}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        [key]: prev[key].filter((_, i) => i !== idx),
                      }));
                    }}
                    className="p-1 hover:bg-red-50 rounded-full group-hover:text-red-500 transition-colors ml-auto"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setShowTechForm(true)}
                className="mt-2 flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-primary/5 rounded-md transition-colors"
              >
                <PlusIcon className="w-4 h-4" />
                Add Technology
              </button>
            </div>

            {/* Add Technology Form */}
            {showTechForm && (
              <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-md">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Add New Technology
                    </h3>
                    <button
                      type="button"
                      onClick={() => {
                        setShowTechForm(false);
                        setNewTech({ name: "", icon: "", color: "#000000" });
                      }}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Technology Name
                      </label>
                      <input
                        type="text"
                        value={newTech.name}
                        onChange={(e) =>
                          setNewTech((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                        placeholder="e.g., React"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Icon
                      </label>
                      <div className="space-y-2">
                        <label className="relative cursor-pointer block">
                          <div className="flex items-center justify-center w-full h-10 border-2 border-dashed border-gray-300 rounded-md hover:border-primary transition-colors">
                            <div className="flex items-center gap-2">
                              <ArrowUpTrayIcon className="h-5 w-5 text-gray-400" />
                              <span className="text-sm text-gray-600">
                                Upload Icon
                              </span>
                            </div>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={async (e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const imageUrl = await handleImageUpload(file);
                                if (imageUrl) {
                                  setNewTech((prev) => ({
                                    ...prev,
                                    icon: imageUrl,
                                  }));
                                }
                              }
                            }}
                            className="hidden"
                          />
                        </label>
                        {isUploading && (
                          <div className="text-sm text-gray-500">
                            Uploading icon...
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Color
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={newTech.color}
                          onChange={(e) =>
                            setNewTech((prev) => ({
                              ...prev,
                              color: e.target.value,
                            }))
                          }
                          className="h-9 w-9 rounded border border-gray-300"
                        />
                        <input
                          type="text"
                          value={newTech.color}
                          onChange={(e) =>
                            setNewTech((prev) => ({
                              ...prev,
                              color: e.target.value,
                            }))
                          }
                          className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                          placeholder="#000000"
                        />
                      </div>
                    </div>
                    {newTech.icon && (
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preview
                        </label>
                        <div className="flex items-center gap-2 p-2 border rounded-md">
                          <img
                            src={newTech.icon}
                            alt={newTech.name}
                            className="w-6 h-6"
                            style={{ borderRadius: "0.25rem" }}
                          />
                          <span
                            className="text-sm"
                            style={{ color: newTech.color }}
                          >
                            {newTech.name || "Technology Name"}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="mt-6 flex gap-3 justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          setShowTechForm(false);
                          setNewTech({ name: "", icon: "", color: "#000000" });
                        }}
                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (newTech.name && newTech.icon) {
                            setFormData((prev) => ({
                              ...prev,
                              [key]: [...prev[key], newTech],
                            }));
                            setShowTechForm(false);
                            setNewTech({
                              name: "",
                              icon: "",
                              color: "#000000",
                            });
                          }
                        }}
                        disabled={!newTech.name || !newTech.icon || isUploading}
                        className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Add Technology
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      }

      if (key === "features") {
        return (
          <div className="space-y-2">
            <div className="flex flex-col gap-3 p-2 border rounded-md">
              {formData[key].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md group hover:border-primary transition-colors"
                >
                  <span className="text-sm text-gray-700 flex-1">
                    {feature}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        [key]: prev[key].filter((_, i) => i !== idx),
                      }));
                    }}
                    className="p-1 hover:bg-red-50 rounded-full group-hover:text-red-500 transition-colors"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      if (newFeature.trim()) {
                        setFormData((prev) => ({
                          ...prev,
                          [key]: [...prev[key], newFeature.trim()],
                        }));
                        setNewFeature("");
                      }
                    }
                  }}
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Enter a new feature"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (newFeature.trim()) {
                      setFormData((prev) => ({
                        ...prev,
                        [key]: [...prev[key], newFeature.trim()],
                      }));
                      setNewFeature("");
                    }
                  }}
                  className="px-3 py-2 text-sm text-primary hover:bg-primary/5 rounded-md transition-colors"
                >
                  <PlusIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        );
      }

      if (key === "challenges") {
        return (
          <div className="space-y-2">
            <div className="flex flex-col gap-3 p-2 border rounded-md">
              {formData[key].map((challenge, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-2 p-3 border border-gray-200 rounded-md group hover:border-primary transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={challenge.title || ""}
                      onChange={(e) => {
                        const newChallenges = [...formData[key]];
                        newChallenges[idx] = {
                          ...newChallenges[idx],
                          title: e.target.value,
                        };
                        setFormData((prev) => ({
                          ...prev,
                          [key]: newChallenges,
                        }));
                      }}
                      className="flex-1 text-sm font-medium text-gray-700 bg-transparent border-0 border-b border-gray-200 focus:ring-0 focus:border-primary"
                      placeholder="Challenge Title"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          [key]: prev[key].filter((_, i) => i !== idx),
                        }));
                      }}
                      className="p-1 hover:bg-red-50 rounded-full group-hover:text-red-500 transition-colors"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <textarea
                    value={challenge.solution || ""}
                    onChange={(e) => {
                      const newChallenges = [...formData[key]];
                      newChallenges[idx] = {
                        ...newChallenges[idx],
                        solution: e.target.value,
                      };
                      setFormData((prev) => ({
                        ...prev,
                        [key]: newChallenges,
                      }));
                    }}
                    rows={2}
                    className="w-full text-sm text-gray-600 bg-gray-50 border-0 rounded-md focus:ring-0 resize-none"
                    placeholder="Solution description..."
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    [key]: [...prev[key], { title: "", solution: "" }],
                  }));
                }}
                className="mt-2 flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-primary/5 rounded-md transition-colors"
              >
                <PlusIcon className="w-4 h-4" />
                Add Challenge
              </button>
            </div>
          </div>
        );
      }

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

    if (key === "links") {
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              GitHub Link
            </label>
            <input
              type="url"
              value={formData.links?.github || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  links: {
                    ...prev.links,
                    github: e.target.value,
                  },
                }))
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              placeholder="https://github.com/username/repo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Live Demo Link
            </label>
            <input
              type="url"
              value={formData.links?.live || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  links: {
                    ...prev.links,
                    live: e.target.value,
                  },
                }))
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              placeholder="https://example.com"
            />
          </div>
        </div>
      );
    }

    if (key === "icon") {
      const techIcons = {
        ChatBubbleLeftEllipsisIcon,
        ChartBarIcon,
        CloudIcon,
        CodeBracketIcon,
        CodeBracketSquareIcon,
        CommandLineIcon,
        ComputerDesktopIcon,
        CpuChipIcon,
        CubeIcon,
        DevicePhoneMobileIcon,
        DocumentTextIcon,
        FolderIcon,
        GlobeAltIcon,
        HomeIcon,
        KeyIcon,
        LinkIcon,
        LockClosedIcon,
        MagnifyingGlassIcon,
        PaintBrushIcon,
        PuzzlePieceIcon,
        ServerIcon,
        ShieldCheckIcon,
        SparklesIcon,
        Square3Stack3DIcon,
        UserGroupIcon,
        WrenchScrewdriverIcon,
      };

      return (
        <div className="space-y-2">
          <Menu as="div" className="relative">
            <MenuButton className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm flex items-center justify-between">
              {formData[key] ? (
                <div className="flex items-center gap-2">
                  {(() => {
                    const Icon = techIcons[formData[key]];
                    if (Icon) {
                      return <Icon className="w-5 h-5 text-primary" />;
                    }
                    return null;
                  })()}
                  <span>{formData[key].replace(/([A-Z])/g, " $1").trim()}</span>
                </div>
              ) : (
                <span>Select Icon</span>
              )}
              <ChevronDownIcon className="w-5 h-5 text-gray-400" />
            </MenuButton>
            <MenuItems className="absolute z-[100] mt-1 w-full max-h-[300px] overflow-y-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <div className="grid grid-cols-2 gap-2 p-2">
                {Object.entries(techIcons).map(([name, Icon]) => (
                  <MenuItem key={name}>
                    {({ active }) => (
                      <button
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, [key]: name }))
                        }
                        className={`${
                          active ? "bg-primary/10" : ""
                        } flex items-center gap-2 w-full px-4 py-2 text-left rounded-md`}
                      >
                        <Icon className="w-5 h-5 text-primary" />
                        <span>{name.replace(/([A-Z])/g, " $1").trim()}</span>
                      </button>
                    )}
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>
          {formData[key] && (
            <div className="mt-2 p-4 bg-gray-50 rounded-md flex items-center justify-center">
              {(() => {
                const Icon = techIcons[formData[key]];
                if (Icon) {
                  return (
                    <div className="text-4xl text-primary">
                      <Icon />
                    </div>
                  );
                }
                return null;
              })()}
            </div>
          )}
        </div>
      );
    }

    if (key === "image" || key === "memberImg" || key === "projectImage") {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <ArrowUpTrayIcon className="w-8 h-8 mb-4 text-gray-500" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={async (e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setIsUploading(true);
                    try {
                      const imageUrl = await handleImageUpload(file);
                      if (imageUrl) {
                        setFormData((prev) => ({ ...prev, [key]: imageUrl }));
                      }
                    } catch (error) {
                      setError(error.message || "Failed to upload image");
                    } finally {
                      setIsUploading(false);
                    }
                  }
                }}
              />
            </label>
          </div>
          {isUploading && (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="ml-2 text-sm text-gray-500">Uploading...</span>
            </div>
          )}
          {formData[key] && !isUploading && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <img
                  src={formData[key]}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, [key]: "" }))
                  }
                  className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                >
                  <XMarkIcon className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (
      typeof value === "string" &&
      (value.length > 100 || value.includes("\n"))
    ) {
      return (
        <textarea
          id={key}
          value={formData[key] || ""}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, [key]: e.target.value }))
          }
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm resize-y"
          placeholder={`Enter ${key.replace(/([A-Z])/g, " $1").toLowerCase()}`}
        />
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
    <div className="fixed inset-0 z-20 overflow-y-auto">
      <div className="fixed inset-0 backdrop-blur-sm transition-opacity"></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div
          className={`relative transform overflow-visible rounded-lg bg-white text-left shadow-xl transition-all w-full ${
            Object.keys(formData).length > 4 ? "sm:max-w-4xl" : "sm:max-w-lg"
          } my-8`}
        >
          <form onSubmit={handleSubmit}>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 max-h-[80vh] overflow-y-auto">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <h3 className="text-xl font-semibold leading-6 text-secondary  bg-white py-2 z-10">
                    {editItem._id
                      ? `Edit details of ${title.toLowerCase()}`
                      : `Add new ${title.toLowerCase()}`}
                  </h3>

                  {/* Error Message */}
                  {error && (
                    <div className="mt-2 p-2 text-sm text-red-600 bg-red-50 rounded-md">
                      {error}
                    </div>
                  )}

                  <div
                    className={`mt-4 ${
                      Object.keys(formData).length > 4
                        ? "grid grid-cols-1 md:grid-cols-2 gap-4"
                        : "space-y-4"
                    }`}
                  >
                    {Object.entries(formData).map(([key, value]) => (
                      <div
                        key={key}
                        className={`${
                          Object.keys(formData).length > 4 ? "space-y-2" : ""
                        } ${
                          key === "description" ||
                          key === "projectDescription" ||
                          key === "challenges"
                            ? "md:col-span-2"
                            : ""
                        }`}
                      >
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
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 sticky bottom-0">
              <button
                type="submit"
                disabled={isLoading || isUploading}
                className={`inline-flex items-center justify-center w-full rounded-md px-3 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto ${
                  isLoading || isUploading
                    ? "bg-primary/70 cursor-not-allowed"
                    : "bg-primary hover:bg-primary/90"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <span>Saving...</span>
                  </div>
                ) : isUploading ? (
                  <div className="flex items-center">
                    <span>Uploading...</span>
                  </div>
                ) : (
                  "Save Changes"
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={isLoading || isUploading}
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
