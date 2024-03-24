import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

type Prop = {
  children: React.ReactNode;
};

export default function BlogDetailLayout({ children }: Prop) {
  return <>{children}</>;
}