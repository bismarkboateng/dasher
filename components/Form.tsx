"use client"

import { useState, ChangeEvent, MouseEvent, MouseEventHandler } from "react"
import Link from "next/link"
import { TailSpin } from "react-loader-spinner"
import { ToastContainer, toast } from "react-toastify"
import { useRouter } from "next/navigation"

import { useAuthStore } from "@/store/AuthStore"

export default function Form() {
  const router = useRouter()
  const handleSignIn = useAuthStore(state => state.handleSignIn)
  const createdUser = useAuthStore(state => state.user)
  const signInLoadingState = useAuthStore(state => state.signInLoadingState)
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value } = event.target
    setUser(prevUser => ({...prevUser, [name]: value }))
  }

  const handleSubmit = (event: MouseEventHandler<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    handleSignIn(createdUser?.name, user.email, user.password)
    setUser({ email: "", password: ""})
    router.push("/profile")
  }

  let buttonState;

  if (signInLoadingState === "loading") {
    buttonState = (
      <div className="flex flex-row items-center gap-1">
        <p className="text-white text-xs">signing in to your account</p>
        <TailSpin
          visible={true}
          height="10"
          width="10"
          color="#fff"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    )
  } else if (signInLoadingState === "done") {
    toast("Account Created Successfully")
    buttonState = (
      <div className="text-white text-xs">
        <p>Signed In</p>
        <ToastContainer />
      </div>
    )
  } else {
    buttonState = (
      <button
        className="bg-[#2C2C2C] text-white py-2 px-5 rounded-md cursor-pointer"
        onClick={handleSubmit}>
        Sign in
      </button>
    )
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
     <div className="mt-6 mb-3 py-3 ml-4">
      {buttonState}
     </div>
    </form>
  )
}