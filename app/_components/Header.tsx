import React from "react";
import Logo from "./Logo";
import TopbarDesktop from "./TopbarDesktop";
import TopbarMobile from "./TopbarMobile";

export default function Header() {
  return (
    <header className="px-5 py-6 bg-white shadow">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <TopbarDesktop />
        <TopbarMobile />
      </div>
    </header>
  );
}
