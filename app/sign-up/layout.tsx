import type { Metadata } from "next"

type SignUpLayoutPropType = {
    children: React.ReactNode;
}


export const metadata: Metadata = {
    title: "Sign up"
}

export default function SignUpLayout({ children }: SignUpLayoutPropType) {
  return (
    <>
     {children}
    </>
  )
}