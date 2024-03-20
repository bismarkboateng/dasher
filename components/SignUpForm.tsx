"use client"

import { useState, ChangeEvent, FormEvent, MouseEventHandler, MouseEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { useAuthStore } from "@/store/AuthStore"
import { TailSpin } from "react-loader-spinner"
import { ToastContainer, toast } from "react-toastify"




export default function SignUpForm() {
  const router = useRouter()
  const signUpLoadingState = useAuthStore(state => state.signUpLoadingState)
  const handleSignUp = useAuthStore(state => state.handleSignUp)
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    password: "",
  })

  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value } = event.target
    setUser(prevUser => ({...prevUser, [name]: value }))
  }

  const handleSubmit = (event: MouseEventHandler<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    handleSignUp(user.firstName, user.email, user.password)
    router.push("/sign-in")
  }

  let buttonState;

  if (signUpLoadingState === "loading") {
    buttonState = (
      <div className="flex flex-row items-center gap-1">
        <p className="text-white text-xs">Creating your account</p>
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
  } else if (signUpLoadingState === "done") {
    toast("Account Created Successfully")
    buttonState = (
      <div className="text-white text-xs">
        <p>Account created</p>
        <ToastContainer />
      </div>
    )
  } else {
    buttonState = (
      <button
        className="bg-[#2C2C2C] text-white py-2 px-5 rounded-md cursor-pointer"
        onClick={handleSubmit}>
        Sign up
      </button>
    )
  }



  return (
    <form className="bg-[#141A29] w-[95%] md:w-[50%] lg:w-[70%] xl:w-[60%] mt-10 pt-10
    ml-2 md:ml-10 rounded-md mb-10 shadow-xl">

     <div className="w-[90%] mx-auto mb-5 flex flex-row items-center justify-between">
      <label htmlFor="first name" className="">First Name</label>
      <input
       value={user.firstName}
       type="text"
       onChange={handleInputChange}
       placeholder="firstName"
       id="firstName"
       name="firstName"
       className="outline-none py-1 rounded-md placeholder:text-sm
       border border-[#ccc] text-[#141414] pl-1"
      />
     </div>

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


     <hr className="h-[1px] w-[90%] mx-auto bg-[#575555] mb-5"/>
     <div className="flex flex-col items-center justify-center">
      <p className="text-white font-normal">
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </p>
     </div>
     <div className="mt-6 mb-3 py-3 ml-4">
      {buttonState}
     </div>
    </form>
  )
}