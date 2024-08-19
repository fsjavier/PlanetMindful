import { NextAuthConfig } from "next-auth";

declare module "next-auth" {
  interface User extends NextAuthConfig {
    uid?: UserId;
  }
}
