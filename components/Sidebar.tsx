"use client"

import { MdOutlineDashboard } from "react-icons/md"
import { IoCloseOutline } from "react-icons/io5"
import Image from "next/image"
import Link from "next/link"
import { IoSettingsOutline } from "react-icons/io5"
import { RiLoginCircleFill } from "react-icons/ri"
import { useRouter } from "next/navigation"


import { SidebarLinks } from "@/lib/data"
import { useSidebarStore } from "@/store/SidebarStore"
import { useAuthStore } from "@/store/AuthStore"

export default function Sidebar() {
  const closeSidebar = useSidebarStore(state => state.closeSidebar)
  const user = useAuthStore(state => state.user)
  const handleSignOut = useAuthStore(state => state.handleSignOut)
  const router = useRouter()

  const onSignOut = () => {
    handleSignOut()
    router.push("/")
  }

  return (
    <section className="w-full bg-[#141A29] h-screen">
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
        cursor-pointer" onClick={closeSidebar}>
          <div>
            {link.icon}
          </div>
          <p className="text-white font-normal text-lg leading-[10px]">
            {link.name}
          </p>
        </Link>
        ))}
      </ul>
      <ul>
        {user ? (
        <div className="flex flex-row items-center gap-2 mb-8
        cursor-pointer ml-3" onClick={onSignOut}>
          <div>
            <RiLoginCircleFill fontSize={24} className="text-white font-bold" />
          </div>
          <p className="text-white font-normal text-lg leading-[10px]">
            Sign Out
          </p>
        </div>
        ) : (
        <Link href="/sign-in" className="flex flex-row items-center gap-2 mb-8
        cursor-pointer ml-3" onClick={closeSidebar}>
          <div>
            <RiLoginCircleFill fontSize={24} className="text-white font-bold" />
          </div>
          <p className="text-white font-normal text-lg leading-[10px]">
            Sign in
          </p>
        </Link>
        )}
      </ul>
      <section className="flex flex-row items-center gap-2 ml-3 mt-20">
        <IoSettingsOutline fontSize={23} className="text-white font-bold" />
        <p className="text-white font-normal text-lg leading-[10px]">Settings</p>
      </section>
    </section>
  )
}