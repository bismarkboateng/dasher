import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <section className="bg-black h-[100vh]">
     {children}
    </section>
  );
}