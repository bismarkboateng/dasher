
import SignIn from "@/components/SignIn"

export default function SignInPage() {
  return (
    <section className="bg-[#000] text-white pt-24 h-screen overflow-scroll">
      <section className="w-[90%] mx-auto">
        <h2 className="text-white text-2xl font-semibold
        leading-5">Sign In</h2>
        <p className="text-[#888] text-sm font-normal mt-1">
          Sign in to gain full access to your information
        </p>
      </section>
      <SignIn />
    </section>
  )
}