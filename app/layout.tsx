import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

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
      <body className={`${nunito.className} flex min-h-screen max-w-screen`}>
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header />
          <main className=" flex-1 px-8 py-5 gap-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
