"use client";

import { useState } from "react";
import Link from "next/link";
import LinkNavigation from "./LinkNavigation";

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
            <li>
              <LinkNavigation to="/" onClickHandler={toggleSidebar}>
                Home
              </LinkNavigation>
            </li>
            <li>
              <LinkNavigation to="/about" onClickHandler={toggleSidebar}>
                About
              </LinkNavigation>
            </li>
            <li>
              <LinkNavigation to="/local-data" onClickHandler={toggleSidebar}>
                Local Data
              </LinkNavigation>
            </li>
            <li>
              <LinkNavigation
                to="/global-impact"
                onClickHandler={toggleSidebar}
              >
                Global Impact
              </LinkNavigation>
            </li>
            <li>
              <LinkNavigation
                to="/contributions"
                onClickHandler={toggleSidebar}
              >
                Contributions
              </LinkNavigation>
            </li>
            <li>
              <LinkNavigation to="/resources" onClickHandler={toggleSidebar}>
                Resources
              </LinkNavigation>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
