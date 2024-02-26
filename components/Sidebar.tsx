"use client"

import { MdOutlineDashboard } from "react-icons/md"
import { IoCloseOutline } from "react-icons/io5"
import { VscMenu } from "react-icons/vsc"
import Image from "next/image"

import { useSidebarStore } from "@/store/SidebarStore"


export default function Sidebar() {
  const { closeSidebar, isOpen } = useSidebarStore()


  return (
    <>
     {
      isOpen && (
        <section className="absolute lg:static z-[2000] top-0 h-screen overflow-scroll
        w-[70%] md:w-[40%] lg:w-[27%] bg-[#141A29]" >
          <section className="flex flex-row items-center justify-between
            w-[90%] mx-auto mt-7">
           <div className="flex flex-row items-center gap-2">
            <MdOutlineDashboard fontSize={30} className="text-white"/>
            <h3 className="text-lg text-white font-semibold">DarkDasher</h3>
           </div>
           <IoCloseOutline fontSize={24} className="text-white lg:hidden" onClick={closeSidebar}/>
           <VscMenu fontSize={22} className="text-white hidden lg:block font-bold" />
          </section>
          
          <div className="flex flex-col items-center justify-center
           mt-12">
           <Image
            width={70}
            height={70}
            src={"https://assets.website-files.com/64ccf14b517838cac9de1391/64cfd6f858e01996be5eaee6_man%27s-grey-and-black-shirt-Square.jpg"}
            alt="user image"
            className="rounded-full"
           />
           <h3 className="text-lg text-white font-medium leading-5 mt-2">John Doe</h3>
           <h6 className="text-[11px] text-[#D7D7D8] leading-[18px]">Sales Manager</h6>
          </div>
        </section>
      )}
    </>
  )
}
