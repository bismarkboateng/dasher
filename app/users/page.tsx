"use client"
import { useState, useEffect, MouseEvent } from "react"

import { getUsers } from "@/lib/getDataFromFirebase"
import { useModalStore } from "@/store/ModalStore"
import {
  Table, TableBody,TableCaption,
  TableCell, TableHead,
  TableHeader, TableRow,
} from "@/components/ui/table"


export default function Users() {
  const [users, setUsers] = useState<null | UserFromFirebase[]>(null)
  const openModal = useModalStore(state => state.openModal)

  useEffect(() => {
    const getData = async () => {
      const res = await getUsers()
      setUsers(res)
    }
    getData()
  }, [])

  const handleAddUser = (event: MouseEvent<HTMLButtonElement>) => {
    openModal()
  }

  const textStyles = "md:text-lg"

  return (
    <section className="bg-black pt-10 h-[100%]">
      <div className="flex flex-row items-center justify-between w-[85%] mx-auto">
        <h1 className="text-white font-medium md:text-xl">All Users</h1>
        <button className="text-white bg-[#141A29] rounded-md outline-none text-xs md:text-xl
        py-2 px-5 border border-[#2c2c2c] shadow-xl cursor-pointer"
        onClick={handleAddUser}>Add User</button>
      </div>

      <section className="text-white mt-5 lg:mt-10 ml-7 md:ml-14
      xl:ml-[69px] 2xl:ml-[83px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className={textStyles}>Name</TableHead>
              <TableHead className={textStyles}>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.email}>
                <TableCell className={textStyles}>{user.first_name}</TableCell>
                <TableCell className={textStyles}>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </section>
  )
}