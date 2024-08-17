import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firestore } from "./firestore";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter(firestore),
  session: { strategy: "jwt" },
  ...authConfig,
});
