import LinkNavigation from "./LinkNavigation";

const links = [{ name: "Account", path: "/account" }];

export default function TopbarDesktop() {
  return (
    <nav>
      <ul className="hidden md:flex space-x-4">
        {links.map((link) => (
          <li key={link.name}>
            <LinkNavigation to={link.path}>{link.name}</LinkNavigation>
          </li>
        ))}
        {/* <li>
          <LinkNavigation to="/account">Account</LinkNavigation>
        </li> */}
      </ul>
    </nav>
  );
}
