"use client"

import { useState, MouseEvent } from "react"
import { useRouter } from "next/navigation"

import { useAuthStore } from "@/store/AuthStore"

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("")
  const handleResetPassword = useAuthStore(state => state.handleResetPassword)
  const router = useRouter()

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    handleResetPassword(email)
    router.push("/sign-in")
    setEmail("")
  }
  return (
    <section className="bg-[#000] text-white pt-24 h-screen overflow-hidden">
      <section className="w-[90%] mx-auto">
        <h2 className="text-white text-2xl font-semibold
        leading-5">Reset your password</h2>
        <p className="text-[#888] text-sm font-normal mt-1">
          Enter your email address to reset password
        </p>
      </section>
      <form className="bg-[#141A29] w-[85%] md:w-[60%] xl:w-[45%] mt-10 p-5
       ml-5 md:ml-10 rounded-md mb-10 shadow-xl">
        <div className="flex flex-col w-[60%]">
          <label htmlFor="email" className="mb-1">Your email address</label>
          <input
           type="text"
           id="email"
           value={email}
           onChange={(event) => setEmail(event.target.value)}
           className="outline-none border border-[#ccc] rounded-md py-1 pl-1
           text-black"
           placeholder="example@example.com"
          />
        </div>
        <button
          className="bg-[#2C2C2C] text-white py-2 px-5 rounded-md cursor-pointer
          mt-4"
          onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  )
}