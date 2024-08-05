"use client";

import { useState, useEffect } from "react";
import LinkNavigation from "./LinkNavigation";
import { UserIcon } from "@heroicons/react/24/solid";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Local Data", path: "/local-data" },
  { name: "Global Impact", path: "/global-impact" },
  { name: "Contributions", path: "/contributions" },
  { name: "Resources", path: "/resources" },
  {
    name: "Account",
    path: "/account",
    icon: <UserIcon className="h-8 w-8 text-primary-400" />,
  },
];

export default function TopnavbarMobile() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {!isMobileMenuOpen && (
        <button
          aria-label="toggle menu"
          onClick={toggleMobileMenu}
          className="p-2 rounded-full focus:outline-none text-2xl md:hidden text-primary-950"
        >
          ☰
        </button>
      )}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 p-2 focus:outline-none text-2xl"
          >
            <span className="sr-only">Close menu</span>✕
          </button>
          <nav className="p-4">
            <ul className="space-y-4 text-center">
              {links.map((link) => (
                <li key={link.name}>
                  <LinkNavigation
                    to={link.path}
                    onClickHandler={toggleMobileMenu}
                    className={"flex gap-2 items-center"}
                  >
                    <span className="inline-block">{link.icon}</span>
                    <span className="inline-block">{link.name}</span>
                  </LinkNavigation>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
