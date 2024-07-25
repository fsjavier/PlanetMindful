import LinkNavigation from "./LinkNavigation";

export default function TopbarDesktop() {
  return (
    <nav>
      <ul className="hidden md:flex space-x-4">
        <li>
          <LinkNavigation to="/account">Account</LinkNavigation>
        </li>
      </ul>
    </nav>
  );
}
