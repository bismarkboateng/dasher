"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import Link from "next/link"

import { useAuthStore } from "@/store/AuthStore"

export default function Form() {
  const { signIn } = useAuthStore()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value } = event.target
    setUser(prevUser => ({...prevUser, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    signIn(user)
    setUser({ email: "", password: ""})
  }

  return (
    <form className="bg-[#141A29] w-[85%] md:w-[60%] xl:w-[45%] mt-10 pt-10
    ml-5 md:ml-10 rounded-md mb-10 shadow-xl"
    onSubmit={handleSubmit}>
     <div className="w-[90%] mx-auto mb-5 flex flex-row items-center justify-between">
      <label htmlFor="email" className="">Email address</label>
      <input
       value={user.email}
       type="text"
       onChange={handleInputChange}
       placeholder="Your email address"
       id="email"
       name="email"
       className="outline-none py-1 rounded-md placeholder:text-sm
       border border-[#ccc] text-[#141414] pl-1"
      />
     </div>

     <div className="w-[90%] mx-auto mb-5 flex flex-row items-center justify-between">
      <label htmlFor="password" className="">Password</label>
      <input
       value={user.password}
       type="password"
       onChange={handleInputChange}
       placeholder="****"
       id="passsword"
       name="password"
       className="outline-none py-1 rounded-md placeholder:text-sm
       border border-[#ccc] text-[#0d0d0e] pl-1"
      />
     </div>

    <div className="w-[90%] mx-auto mb-5 flex flex-row items-center
    justify-between">
      <div>
        <input
         type="checkbox"
         name="remember"
         value=""
         onChange={() => {}}
        />
        <label className="ml-1">Remember me</label>
      </div>
      <p>
        Forgot password?
      </p>
     </div>
     <hr className="h-[1px] w-[90%] mx-auto bg-[#575555] mb-5"/>
     <div className="flex flex-col items-center justify-center">
      <p className="text-white font-normal">
        Dont have an account? <Link href="/sign-up">Create one</Link>
      </p>
     </div>
     <button
      className="bg-[#2C2C2C] text-white py-2 px-5 rounded-md cursor-pointer
      ml-4 mt-8 mb-3"
     >
      Sign in
     </button>
    </form>
  )
}