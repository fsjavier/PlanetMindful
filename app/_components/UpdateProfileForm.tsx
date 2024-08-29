"use client";

import { useState } from "react";
import Image from "next/image";
import { Profile } from "../_services/data-service";
import SubmitButton from "@/app/_components/SubmitButton";
import { updateProfile } from "../_lib/actions";

interface UpdateProfileFormProps {
  profile: Profile;
  onClose: () => void;
  onSuccess: (updatedProfile: Profile) => void;
}

type FormErrors = {
  name?: string;
  description?: string;
};

function UpdateProfileForm({
  profile,
  onClose,
  onSuccess,
}: UpdateProfileFormProps) {
  const [profileImage, setProfileImage] = useState(profile.image);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (formData: FormData) => {
    const newErrors: FormErrors = {};

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    if (!name || name.trim().length === 0) newErrors.name = "Name is required";
    if (description && description.length > 500) {
      newErrors.description = "Bio must be 500 characters or less";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (formData: FormData) => {
    if (validateForm(formData)) {
      try {
        const result = await updateProfile(formData);
        if (result.success) {
          onSuccess(result.profile as Profile);
        } else {
          console.error("Error updating profile:", result.message);
        }
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form action={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={profile.name}
          className="mt-1 py-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:outline-primary-400 text-sm sm:text-lg"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Bio
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          defaultValue={profile.description}
          className="mt-1 py-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:outline-primary-400 sm:text-sm"
        />
        {errors.description && (
          <p className="mt-2 text-sm text-red-600">{errors.description}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="profileImage"
          className="block text-sm font-medium text-gray-700"
        >
          Profile Image
        </label>
        <div className="mt-1 flex items-center space-x-4">
          <Image
            src={profileImage}
            alt="Profile Image"
            width={64}
            height={64}
            className="rounded-full"
          />
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={handleProfileImageChange}
            className="block w-full text-sm text-primary-200-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-tertiary-50"
          />
        </div>
      </div>

      <input type="hidden" name="userId" value={profile.userId} />

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="rounded-md border border-primary-300 bg-white py-2 px-4 text-sm font-medium text-primary-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Cancel
        </button>
        <SubmitButton pendingLabel="Updating...">Update Profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
