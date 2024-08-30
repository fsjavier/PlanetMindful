import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  DocumentData,
} from "firebase/firestore";
import { db } from "@/app/_lib/firebase";
import { convertFirestoreData } from "@/app/_utils/firestore-helpers";

export interface User {
  id: string;
  name: string;
  image: string;
  email: string;
}

export interface Profile {
  name: string;
  email: string;
  userId: string;
  description?: string;
  image: string;
  createdAt: Date;
  updatedAt?: Date;
}

export async function getUsers() {
  const usersCollection = collection(db, "users");
  const userDocs = await getDocs(usersCollection);

  const users = userDocs.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return users;
}

export async function getUser(uid: string): Promise<User | null> {
  const userDocRef = doc(db, "users", uid);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    const data = userDoc.data() as DocumentData;
    console.log("Document data: ", data);
    return {
      id: userDoc.id,
      name: data.name,
      image: data.image,
      email: data.email,
    };
  } else {
    return null;
  }
}

export async function checkAndCreateUserProfile(uid: string): Promise<Profile> {
  const profileDocRef = doc(db, "profiles", uid);
  const profileDoc = await getDoc(profileDocRef);

  if (!profileDoc.exists()) {
    const user = (await getUser(uid)) as User;
    const profile: Profile = {
      name: user.name,
      email: user.email,
      image: user.image,
      userId: user.id,
      createdAt: new Date(),
    };

    await setDoc(profileDocRef, profile);

    return profile;
  } else {
    return profileDoc.data() as Profile;
  }
}

export async function getProfile(userId: string): Promise<Profile> {
  const profileDocRef = doc(db, "profiles", userId);
  const profileDoc = await getDoc(profileDocRef);

  if (!profileDoc.exists()) throw new Error("Profile does not exist");

  const data = profileDoc.data();
  const profile = {
    name: data.name,
    email: data.email,
    userId: data.userId,
    image: data.image,
    description: data.description,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };

  return convertFirestoreData(profile);
}
