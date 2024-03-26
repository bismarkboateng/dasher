
import SignUpForm from "@/components/SignUpForm"

export default function SignUpPage() {
  return (
    <section className="bg-[#000] text-white pt-24 h-screen overflow-hidden">
      <section className="w-[90%] mx-auto">
        <h2 className="text-white text-2xl font-semibold
        leading-5">Sign Up</h2>
        <p className="text-[#888] text-sm font-normal mt-1">
          Sign up to gain access to our services
        </p>
      </section>
      <SignUpForm />
    </section>
  )
}