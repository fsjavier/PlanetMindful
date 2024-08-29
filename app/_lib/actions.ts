"use server";

import { db, storage } from "@/app/_lib/firebase";
import { convertFirestoreData } from "@/app/_utils/firestore-helpers";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, signIn, signOut } from "./auth";
import { revalidatePath } from "next/cache";

const PROFILE_IMAGES_PATH = "profile-images";

export async function signInAction() {
  await signIn("google");
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function getSession() {
  const session = await auth();
  return session;
}

export async function updateProfile(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const userId = formData.get("userId") as string;
  if (!userId || session.user?.uid !== userId)
    throw new Error("You are not allowed to perform this action");

  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const profileImage = formData.get("profileImage") as File | null;

    if (!name) throw new Error("Name is required");

    const updateData: any = {
      name,
      description,
    };

    if (profileImage && profileImage.size > 0) {
      const imageRef = ref(storage, `${PROFILE_IMAGES_PATH}/${userId}`);
      await uploadBytes(imageRef, profileImage);
      const imageUrl = await getDownloadURL(imageRef);
      updateData.image = imageUrl;
    }

    // Update user profile in Firestore
    const userRef = doc(db, "profiles", userId);
    await updateDoc(userRef, updateData);

    // Fetch the updated user data
    const updatedProfileDoc = await getDoc(userRef);
    const updatedProfileData = updatedProfileDoc.data();

    revalidatePath(`/profile/${userId}`);

    return {
      success: true,
      message: "Profile updated successfully",
      profile: convertFirestoreData(updatedProfileData),
    };
  } catch (error) {
    console.error("Error updating profile:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}
