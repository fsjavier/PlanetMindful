import SignOutButton from "../_components/SignoutButton";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();

  console.log(session);
  const firstName: string = session?.user?.name?.split(" ").at(0) ?? "";
  return (
    <div className="flex justify-center flex-col">
      <h2 className="font-semibold text-2xl text-tertiary-950 my-5 self-center">
        {firstName.length > 1 ? `Welcome, ${firstName}` : "Welcome"}
      </h2>
      <SignOutButton />
    </div>
  );
}
