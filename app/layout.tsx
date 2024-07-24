import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";

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
      <body className={`${nunito.className} flex flex-col`}>
        <Header />
        <main className=" flex flex-col flex-1 px-8 py-5 gap-6">
          {children}
        </main>
      </body>
    </html>
  );
}
