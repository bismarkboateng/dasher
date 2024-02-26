"use client"

import { useSidebarStore } from "@/store/SidebarStore"
import { TbMenu } from "react-icons/tb"


export default function Menu() {
  const { openSidebar } = useSidebarStore()

  return (
    <>
     <TbMenu
      fontSize={23}
      className="text-white lg:hidden"
      onClick={openSidebar}
     />
    </>
  )
}
