"use client";

import { useState } from "react";
import LinkNavigation from "./LinkNavigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Local Data", path: "/local-data" },
  { name: "Global Impact", path: "/global-impact" },
  { name: "Contributions", path: "/contributions" },
  { name: "Resources", path: "/resources" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`hidden md:flex ${
        isOpen ? "max-w-xs" : "min-w-0"
      } transition-all duration-500 bg-white shadow-lg overflow-hidden`}
    >
      <div className="flex flex-col h-screen">
        <button
          onClick={toggleSidebar}
          className={`p-4 focus:outline-none text-2xl ${
            isOpen ? "self-end me-2" : "mx-auto"
          } my-4`}
        >
          {isOpen ? "❮" : "❯"}
        </button>
        <nav className={`flex-1 ${isOpen ? "block" : "hidden"}`}>
          <ul className="space-y-4 py-4 px-8">
            {links.map((link) => (
              <li key={link.name}>
                <LinkNavigation to={link.path} onClickHandler={toggleSidebar}>
                  {link.name}
                </LinkNavigation>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
