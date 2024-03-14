"use client"

import type { Metadata } from "next";
import { Roboto } from "next/font/google"


import { useSidebarStore } from "@/store/SidebarStore";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400"})

const metadata: Metadata = {
  title: "Dasher",
  description: "Dashboard application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isOpen = useSidebarStore(state => state.isOpen)

  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>
          <section className="lg:hidden">
            <Navbar />
            {children}
            <div className="fixed top-0 left-0 w-[80%] md:w-[40%] z-[3000]">
             {isOpen && <Sidebar /> }
            </div>
          </section>
          <section className="hidden lg:w-full lg:flex lg:flex-row lg:items-start">
           <div className="lg:w-[25%] fixed z-[3000] top-0 left-0">
             <Sidebar />
           </div>
           <div className="lg:w-[75%] text-2xl">
            <div className="lg:ml-[33%] w-full">
             <Navbar />
             {children}
            </div>
           </div>
          </section>
        </main>
      </body>
    </html>
  );
}