import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./styles/globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planet Mindful",
  description: "Planet mindfu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
