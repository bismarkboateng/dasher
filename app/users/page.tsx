"use client"

import { getUsers } from "@/lib/getDataFromFirebase"
import { useState, useEffect, MouseEvent } from "react"
import { useModalStore } from "@/store/ModalStore"


export default function Users() {
  const [user, setUser] = useState<null | UserFromFirebase[]>(null)
  const openModal = useModalStore(state => state.openModal)

  
  useEffect(() => {
    const getData = async () => {
      const res = await getUsers()
      setUser(res)
    }

    getData()
  }, [])

  const handleAddUser = (event: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    openModal()
  }
  return (
    <section className="bg-black pt-10 h-[100vh]">
      <div className="flex flex-row items-center justify-between w-[85%] mx-auto">
        <h1 className="text-white font-medium">All Users</h1>
        <button className="text-white bg-[#141A29] rounded-md outline-none text-xs
        py-2 px-5 border border-[#2c2c2c] shadow-xl cursor-pointer"
        onClick={handleAddUser}>Add User</button>
      </div>

      <section className="text-white w-[85%] mx-auto mt-5">
        <table className="border border-[#fff] p-2 w-full">
          <tr>
            <th>First Name</th>
            <th className="text-center">Email</th>
          </tr>
          {user?.map(item => (
            <tr className="border border-[#fff] py-1" key={item.email}>
              <td className="text-center">{item.first_name}</td>
              <td className="text-center">{item.email}</td>
            </tr>
          ))}
        </table>
      </section>
    </section>
  )
}