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
    <section>
     {children}
    </section>
  );
}