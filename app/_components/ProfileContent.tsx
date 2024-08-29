"use client";

import Image from "next/image";
import type { Profile } from "../_services/data-service";
import { useState } from "react";
import UpdateProfileForm from "./UpdateProfileForm";

interface ProfileContentProps {
  initialProfile: Profile;
  userId: string;
}

export default function ProfileContent({
  initialProfile,
  userId,
}: ProfileContentProps) {
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleProfileUpdate = (updatedProfile: Profile) => {
    setProfile(updatedProfile);
    closeModal();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow rounded-lg p-6 max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">User Profile</h1>
          {userId && userId === profile?.userId && (
            <button
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium 
                 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 
                 focus:ring-gray-500 focus:border-transparent
                 transition duration-150 ease-in-out"
              onClick={openModal}
            >
              Edit Profile
            </button>
          )}
        </div>
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={profile?.image}
              alt={`${profile?.name} image`}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{profile?.name}</h2>
            <p className="text-gray-600">{profile?.email}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Bio</h3>
            <p>{profile?.description}</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <UpdateProfileForm
              profile={profile}
              onClose={closeModal}
              onSuccess={handleProfileUpdate}
            />
          </div>
        </div>
      )}
    </div>
  );
}
