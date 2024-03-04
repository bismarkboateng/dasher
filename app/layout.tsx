import type { Metadata } from "next";
import { Inter } from "next/font/google"

import Navbar from "@/components/Navbar";

import "./globals.css";
import RenderSidebar from "@/components/RenderSidebar";

const inter = Inter({ subsets: ["cyrillic"]})

export const metadata: Metadata = {
  title: "Dasher",
  description: "Dashboard application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative w-full lg:flex lg:flex-row">
         <RenderSidebar />
         <section className="w-full">
          <Navbar />
          {children}
         </section>
        </main>
      </body>
    </html>
  );
}