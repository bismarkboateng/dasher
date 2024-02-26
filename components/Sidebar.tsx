"use client"

import { MdOutlineDashboard } from "react-icons/md"
import { IoCloseOutline } from "react-icons/io5"

import { useSidebarStore } from "@/store/SidebarStore"



export default function Sidebar() {
  const { closeSidebar } = useSidebarStore()


  return (
    <section className="absolute z-[2000] top-0 h-screen overflow-scroll
    w-[70%] md:w-[40%] bg-[#141A29]" >
      <section className="flex flex-row items-center justify-between
        w-[90%] mx-auto mt-7">
       <div className="flex flex-row items-center gap-2">
        <MdOutlineDashboard fontSize={30} className="text-white"/>
        <h3 className="text-lg text-white font-semibold">DarkDasher</h3>
       </div>
       <IoCloseOutline fontSize={24} className="text-white" onClick={closeSidebar}/>
      </section>
    </section>
  )
}
