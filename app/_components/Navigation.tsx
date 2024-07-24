import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
