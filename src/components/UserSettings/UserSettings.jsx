import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { RoundedButton } from "../RoundedButton";
import toast, { Toaster } from "react-hot-toast";

export default function UserSettings() {
  const [selectedGender, setSelectedGender] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const updateProfileMutation = useMutation({
    mutationFn: async (userData) => {
      const res = await fetch(`${import.meta.env.VITE_server}/users-profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
          ...userData,
          gender: selectedGender,
          profileImage,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Profile update failed");
      }

      return res.json();
    },
    onSuccess: (data) => {
      toast.success(data.message || "Profile updated successfully!");
      localStorage.setItem("profileImage", data.data.profileImage);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleImageUpload = async (file) => {
    setIsUploading(true);
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
        setProfileImage(data.data.url);
        return data.data.url;
      } else {
        throw new Error(data.error?.message || "Failed to upload image");
      }
    } catch (err) {
      toast.error(err.message || "Failed to upload image");
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = (data) => {
    if (!selectedGender) {
      toast.error("Please select your gender");
      return;
    }

    updateProfileMutation.mutate(data);
  };

  return (
    <div className="py-5 px-24 bg-bg mx-auto text-center min-h-screen">
      <Toaster />
      <div>
        <h1 className="font-primary text-center text-5xl font-bold tracking-tight text-secondary">
          Profile Settings
        </h1>
        <p className="mt-1 text-black/80 text-lg font-medium font-primary tracking-wide">
          Update your profile information
        </p>
      </div>
      <div className="p-10 mt-3 mb-10 bg-white rounded-4xl">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="grid grid-cols-2 gap-28 w-full">
            <div>
              <label
                htmlFor="firstName"
                className="block text-left font-primary text-lg font-medium text-black"
              >
                First Name
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "First name must be at least 2 characters",
                  },
                })}
                type="text"
                className="mt-1 block w-full border-0 border-b-2 border-black/20 px-3 py-2 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-primary focus:px-0"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm text-left mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-left font-primary text-lg font-medium text-black"
              >
                Last Name
              </label>
              <input
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Last name must be at least 2 characters",
                  },
                })}
                type="text"
                className="mt-1 block w-full border-0 border-b-2 border-black/20 px-3 py-2 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-primary focus:px-0"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm text-left mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-left font-primary text-lg font-medium text-black">
              Gender
            </label>
            <div className="mt-2 flex gap-6">
              {["Male", "Female", "Other"].map((gender) => (
                <div
                  onClick={() => handleGenderSelect(gender.toLowerCase())}
                  key={gender}
                  className="flex justify-start max-w-fit select-none items-center gap-2 cursor-pointer"
                >
                  <Checkbox
                    checked={selectedGender === gender.toLowerCase()}
                    className="group size-5 p-1 ease-in duration-150 rounded-full ring-1 ring-[#AEAEAE] data-[checked]:ring-0 ring-inset data-[checked]:bg-primary flex items-center justify-center cursor-pointer"
                  >
                    <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
                  </Checkbox>
                  <span className="text-lg text-black font-medium font-primary">
                    {gender}
                  </span>
                </div>
              ))}
            </div>
            {!selectedGender && errors.gender && (
              <p className="text-red-500 text-sm text-left mt-1">
                Please select your gender
              </p>
            )}
          </div>

          <div>
            <label className="block text-left font-primary text-lg font-medium text-black">
              Profile Picture
            </label>
            <div className="mt-2 flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <ArrowUpTrayIcon className="w-8 h-8 mb-4 text-gray-500" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
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
                      await handleImageUpload(file);
                    }
                  }}
                />
              </label>
            </div>
            {isUploading && (
              <div className="flex items-center justify-center mt-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <span className="ml-2 text-sm text-gray-500">Uploading...</span>
              </div>
            )}
            {profileImage && !isUploading && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Preview:
                </p>
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setProfileImage("")}
                    className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                  >
                    <XMarkIcon className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end mt-10">
            <RoundedButton
              text={
                updateProfileMutation.isPending ? "Saving..." : "Save Changes"
              }
              bgColor={"primary"}
              customStyle={"text-white"}
              type="submit"
              disabled={updateProfileMutation.isPending || isUploading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
