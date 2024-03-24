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
      <button className="bg-[#786eff] text-white py-1 px-6 rounded-md
      text-sm font-bold" onClick={handleSubmit}>Submit</button>
    )
  }

  return (
    <>
    <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-screen backdrop-blur-sm"/>
    <form className="absolute top-0 left-0 w-[60%] md:w-[40%] z-[3000] ml-[20%]
      md:ml-[30%] mt-[3%] rounded-md shadow-2xl bg-[#141A29] p-2 border
      border-[#2c2c2c]">
      <h1 className="text-white text-xl font-medium text-center">Add User</h1>
      <div className="w-[100%] h-[0.5px] bg-[#ccc] mt-3"/>
      <section className="mt-3 flex flex-col items-start">
        <div className="flex flex-col items-start justify-between mb-3 w-[100%]">
          <label htmlFor="first_name" className="text-white">First name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={newUser.first_name}
            onChange={handleChange}
            className="outline-none border border-[#ccc] rounded-md pl-2 text-black py-1 w-[100%]"
            placeholder="first name"
          />
        </div>
        <div className="flex flex-col items-start justify-between w-[100%]">
          <label htmlFor="email" className="text-white">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={newUser.email}
            onChange={handleChange}
            className="outline-none border border-[#ccc] rounded-md pl-2 text-black py-1 w-[100%]"
            placeholder="email"
          />
        </div>
      </section>
      <div className="w-[100%] mt-4 flex flex-row items-center justify-between
      mb-1">
        {buttonState}
        <button className="bg-[#2c2c2c] text-white py-1 px-6 rounded-md
        text-sm font-bold" onClick={() => closeModal()}>Cancel</button>
      </div>
    </form>
    </>
  )
}
