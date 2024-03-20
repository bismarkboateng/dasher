import type { Metadata } from "next"

type SignInLayoutPropType = {
    children: React.ReactNode;
}


export const metadata: Metadata = {
    title: "sign In"
}


export default function SignInLayout({ children }: SignInLayoutPropType) {
  return (
    <>{children}</>
  )
}