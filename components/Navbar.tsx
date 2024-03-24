import { IoIosNotificationsOutline } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { MdOutlineShoppingCart } from "react-icons/md"
import Link from "next/link"

import Search from "./Search"
import Menu from "./Menu"



export default function Navbar() {

  const iconStyles = "text-white font-bold cursor-pointer"

  return (
    <nav className="py-7 sticky top-0 w-full bg-[#141A29] z-[2000]">
     <section className="w-[85%] mx-auto flex flex-row items-center
       justify-between">
       <Menu />
     </section>
    </nav>
  )
}