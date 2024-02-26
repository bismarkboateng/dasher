import type { Metadata } from "next";
import { Inter } from "next/font/google"

import Navbar from "@/components/Navbar";
import CheckSidebar from "@/components/CheckSidebar";

import "./globals.css";


const inter = Inter({ subsets: ["latin"]})


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
      <body className={`${inter.className} relative`}>
        <CheckSidebar />
        <main>
         <Navbar />
         {children}
        </main>
      </body>
    </html>
  );
}
