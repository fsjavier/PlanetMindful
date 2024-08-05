import { UserIcon } from "@heroicons/react/24/solid";
import LinkNavigation from "./LinkNavigation";

const links = [
  {
    name: "Account",
    path: "/account",
    icon: <UserIcon className="h-8 w-8 text-primary-400" />,
  },
];

export default function TopbarDesktop() {
  return (
    <nav>
      <ul className="hidden md:flex space-x-4">
        {links.map((link) => (
          <li key={link.name}>
            <LinkNavigation to={link.path}>{link.icon}</LinkNavigation>
          </li>
        ))}
      </ul>
    </nav>
  );
}
