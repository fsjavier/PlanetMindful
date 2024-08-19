import {
  collection,
  getDocs,
  doc,
  getDoc,
  DocumentData,
} from "firebase/firestore";
import { db } from "@/app/_lib/firebase";

interface User {
  id: string;
  name: string;
  email: string;
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
      email: data.email,
    };
  } else {
    return null; // User not found
  }
}
