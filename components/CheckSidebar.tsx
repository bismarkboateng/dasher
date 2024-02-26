"use client" 

import Sidebar from "@/components/Sidebar"
import { useSidebarStore } from "@/store/SidebarStore"


export default function CheckSidebar() {
    const { isOpen } = useSidebarStore()
  return (
    <>
     {isOpen && <Sidebar /> }
    </>
  )
}
