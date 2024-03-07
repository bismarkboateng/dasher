import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google"

import Navbar from "@/components/Navbar";

import "./globals.css";
import RenderSidebar from "@/components/RenderSidebar";

const inter = Inter({ subsets: ["latin"]})
const roboto = Roboto({ subsets: ["latin"], weight: "400"})

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
      <body className={roboto.className}>
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