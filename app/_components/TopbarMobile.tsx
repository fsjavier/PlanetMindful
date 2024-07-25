"use client";

import { useState, useEffect } from "react";
import LinkNavigation from "./LinkNavigation";

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
          onClick={toggleMobileMenu}
          className="p-2 rounded-full focus:outline-none text-2xl md:hidden text-primary-950"
        >
          <span className="sr-only">Toggle menu</span>☰
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
              <li>
                <LinkNavigation to="/" onClickHandler={toggleMobileMenu}>
                  Home
                </LinkNavigation>
              </li>
              <li>
                <LinkNavigation to="/about" onClickHandler={toggleMobileMenu}>
                  About
                </LinkNavigation>
              </li>
              <li>
                <LinkNavigation
                  to="/local-data"
                  onClickHandler={toggleMobileMenu}
                >
                  Local Data
                </LinkNavigation>
              </li>
              <li>
                <LinkNavigation
                  to="/global-impact"
                  onClickHandler={toggleMobileMenu}
                >
                  Global Impact
                </LinkNavigation>
              </li>
              <li>
                <LinkNavigation
                  to="/contributions"
                  onClickHandler={toggleMobileMenu}
                >
                  Contributions
                </LinkNavigation>
              </li>
              <li>
                <LinkNavigation
                  to="/resources"
                  onClickHandler={toggleMobileMenu}
                >
                  Resources
                </LinkNavigation>
              </li>
              <li>
                <LinkNavigation to="/account" onClickHandler={toggleMobileMenu}>
                  Account
                </LinkNavigation>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
