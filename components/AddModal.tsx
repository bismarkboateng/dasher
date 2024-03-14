"use client"

import { TailSpin } from "react-loader-spinner"
import { useState, ChangeEvent, MouseEvent } from "react"
import { useModalStore } from "@/store/ModalStore"

export default function AddModal() {
  const [newUser, setNewUser] = useState({} as NewUserType)
  const closeModal = useModalStore(state => state.closeModal)
  const loadingState = useModalStore(state => state.loading)
  const handleCreateUser = useModalStore(state => state.handleCreateUser)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setNewUser(prevUser => ({...prevUser, [name]: value}))
  }

  const handleSubmit = (event: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    handleCreateUser(newUser.first_name, newUser.email)
  }

  let buttonState

  if (loadingState === "loading") {
    buttonState = (<TailSpin
    visible={true}
    height="20"
    width="20"
    color="#fff"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    />)
  } else if (loadingState === "done") {
    buttonState = <p className="text-white text-md font-medium">User Added ✅</p>
  } else {
    buttonState = (
      <button className="bg-[#786eff] text-white py-1 px-4 rounded-md
      text-sm" onClick={handleSubmit}>Submit</button>
    )
  }

  return (
    <>
     <div className="absolute top-0 left-0 w-full h-screen bg-black" />
     <form className="absolute top-0 left-0 w-[80%] h-[25vh] z-[3000]
       ml-[9%] mt-[3%] rounded-md shadow-2xl bg-[#141A29] p-2 border
       border-[#2c2c2c]">
        <h1 className="text-white font-medium">New User</h1>
        <section className="mt-5">
          <div className="flex flex-row items-center justify-between mb-5">
            <label htmlFor="first_name" className="text-white">First name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              value={newUser.first_name}
              onChange={handleChange}
              className="outline-none border border-[#ccc] rounded-md pl-2 text-black py-1"
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <label htmlFor="email" className="text-white">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={newUser.email}
              onChange={handleChange}
              className="outline-none border border-[#ccc] rounded-md pl-2 text-black py-1"
            />
          </div>
        </section>
        <div className="w-[80%] mx-auto mt-9
         flex flex-row items-center justify-around">
         {buttonState}
         <button className="bg-[#2c2c2c] text-white py-1 px-4 rounded-md
         text-sm" onClick={() => closeModal()}>Cancel</button>
        </div>
     </form>
    </>
  )
}
