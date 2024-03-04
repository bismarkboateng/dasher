"use client"

import { MdOutlineDashboard } from "react-icons/md"
import { IoCloseOutline } from "react-icons/io5"
// import { VscMenu } from "react-icons/vsc"
import Image from "next/image"
import Link from "next/link"
import { IoSettingsOutline } from "react-icons/io5"


import { useSidebarStore } from "@/store/SidebarStore"
import { SidebarLinks } from "@/lib/data"

export default function Sidebar() {
  const { closeSidebar, isOpen } = useSidebarStore()


  return (
    <>
    <section className="absolute top-0 overflow-scroll z-[1000] lg:static bg-[#141A29]
    h-screen w-[75%] md:w-[40%] lg:w-[25%]">
      <section className="flex flex-row items-center justify-between
        w-[90%] mx-auto mt-7">
        <div className="flex flex-row items-center gap-2">
        <MdOutlineDashboard fontSize={30} className="text-white"/>
        <h3 className="text-lg text-white font-semibold">DarkDasher</h3>
        </div>
        <IoCloseOutline fontSize={24} className="text-white lg:hidden" onClick={closeSidebar}/>
      </section>
      
      <section className="flex flex-col items-center justify-center
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
        <hr className="my-1"/>
      </section>

      <ul className="w-[90%] mx-auto mt-10">
        {SidebarLinks.map(link => (
        <Link href={link.link} key={link.id} className="flex flex-row items-center gap-2 mb-8
        cursor-pointer">
          <div>
            {link.icon}
          </div>
          <p className="text-white font-normal text-lg leading-[10px]">{link.name}</p>
        </Link>
        ))}
      </ul>
      <section className="fixed bottom-4 left-4 flex flex-row items-center gap-2">
        <IoSettingsOutline fontSize={23} className="text-white font-bold" />
        <p className="text-white font-normal text-lg leading-[10px]">Settings</p>
      </section>
    </section>
    </>
  )
}


{/* <section className="absolute lg:static z-[2000] top-0 h-screen overflow-scroll
        w-[70%] md:w-[40%] lg:w-[27%] bg-[#141A29] shadow-xl" ></section> */}