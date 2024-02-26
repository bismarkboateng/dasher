import { IoIosNotificationsOutline } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { MdOutlineShoppingCart } from "react-icons/md"
import Link from "next/link"

import Search from "./Search"
import Menu from "./Menu"



export default function Navbar() {

  const iconStyles = "text-white font-bold cursor-pointer"

  return (
    <nav className="py-7 sticky w-full bg-[#141A29]">
     <section className="w-[85%] mx-auto flex flex-row items-center
       justify-between">
       <Menu />
       <Search />

       <div className="flex flex-row items-center gap-4">
        <Link href="/notifications" className="relative">
          <div className="absolute top-0 right-0 bg-[#786EFF] h-[6px] w-[6px] rounded-full"/>
          <IoIosNotificationsOutline fontSize={24} className={iconStyles} />
        </Link>
        
        <div className="relative">
         <div className="absolute top-[-5px] right-[-7px] text-[#786EFF] text-sm
         font-bold">0</div>
         <MdOutlineShoppingCart fontSize={23} className={iconStyles} />
        </div>

        <Link href="/settings">
        <IoSettingsOutline fontSize={23} className={iconStyles} />
        </Link>
       </div>
     </section>
    </nav>
  )
}