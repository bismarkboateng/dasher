"use client"

import { useSidebarStore } from "@/store/SidebarStore"
import Sidebar from "./Sidebar"


export default function RenderSidebar() {
  const { isOpen } = useSidebarStore()

  return (
    <>
     <div className="hidden lg:inline-flex overflow-scroll z-[5000] w-[75%] md:w-[40%] lg:w-[25%]">
      <Sidebar />
     </div>
     <div className="absolute w-[75%] md:w-[40%] top-0 z-[3000] lg:hidden">
        {isOpen && <Sidebar />}
     </div>
    </>
  )
}