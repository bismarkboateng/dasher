"use client"

import { useState, FormEvent } from "react"

import { IoIosSearch } from "react-icons/io"



export default function Search() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (event:  FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setSearchTerm("")
  }

  return (
    <form className="hidden md:flex md:flex-row md:items-center 
    bg-[#2C2C2C] pl-1 py-[2px] rounded-md"
     onSubmit={handleSearch}>
     <div>
      <IoIosSearch fontSize={22} className="text-base text-white font-bold ml-2 mr-2" />
     </div>
     
     <input
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      className="bg-[#2C2C2C] border-none outline-none placeholder:text-sm
      text-white text-sm py-1"
      placeholder="Search"
     />
     <button hidden type="submit"></button>
    </form>
  )
}