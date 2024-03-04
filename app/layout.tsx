import type { Metadata } from "next";
import { Inter } from "next/font/google"

import Navbar from "@/components/Navbar";

import "./globals.css";
import Sidebar from "@/components/Sidebar";

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
        <main className="w-full lg:flex lg:flex-row">
         <Sidebar />
         <section className="w-full">
          <Navbar />
          {children}
         </section>
        </main>
      </body>
    </html>
  );
}

{/* <main className="lg:flex lg:flex-row lg:w-full"> */}
