import { UserIcon } from "@heroicons/react/24/solid";
import LinkNavigation from "./LinkNavigation";
import { auth } from "../_lib/auth";
import { Profile, getProfile } from "../_services/data-service";
import Image from "next/image";

const links = [
  {
    name: "Account",
    path: "/account",
    icon: <UserIcon className="h-8 w-8 text-primary-400" />,
  },
];

export default async function TopbarDesktop() {
  const session = await auth();
  const profile = session ? await getProfile(session?.user?.uid) : null;

  return (
    <nav>
      <ul className="hidden md:flex space-x-4">
        {links.map((link) => (
          <li key={link.name}>
            <LinkNavigation to={link.path}>
              {profile ? (
                <Image
                  src={profile.image}
                  alt={profile.name}
                  height={40}
                  width={40}
                />
              ) : (
                link.icon
              )}
            </LinkNavigation>
          </li>
        ))}
      </ul>
    </nav>
  );
}
