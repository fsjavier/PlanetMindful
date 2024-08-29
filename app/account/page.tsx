import Link from "next/link";
import SignOutButton from "../_components/SignoutButton";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account area",
};

export default async function Page() {
  const session = await auth();
  const userId = session?.user?.uid;
  console.log(session);

  const firstName: string = session?.user?.name?.split(" ").at(0) ?? "";
  return (
    <div className="flex justify-center flex-col">
      <h2 className="font-semibold text-2xl text-tertiary-950 my-5 self-center">
        {firstName.length > 1 ? `Welcome, ${firstName}` : "Welcome"}
      </h2>
      <Link href={`account/profiles/${userId}`}>Go to Profile</Link>
      <SignOutButton />
    </div>
  );
}
