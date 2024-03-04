import { LiaHomeSolid } from "react-icons/lia"
import { TbTriangleSquareCircle } from "react-icons/tb"
import { FaRegUser } from "react-icons/fa6"
import { AiOutlineDollarCircle } from "react-icons/ai"
import { RiFilePaperLine } from "react-icons/ri"
import { RiLoginCircleFill } from "react-icons/ri"

import { v4 as uuidv4 } from "uuid"


export const SidebarLinks = [
    {
        icon: <LiaHomeSolid fontSize={24} className="text-white font-bold" />,
        name: "Dashboard",
        link: "/",
        id: uuidv4(),
    },
    {
        icon: <TbTriangleSquareCircle fontSize={24} className="text-white font-bold"  />,
        name: "Products",
        link: "/product-sales",
        id: uuidv4(),
    },
    {
        icon: <FaRegUser fontSize={22} className="text-white font-bold"  />,
        name: "Users",
        link: "/users",
        id: uuidv4(),
    },
    {
        icon: <RiFilePaperLine fontSize={22} className="text-white font-bold" />,
        name: "Blogs",
        link: "/blogs",
        id: uuidv4(),
    },
    {
        icon: <AiOutlineDollarCircle fontSize={24} className="text-white font-bold"  />,
        name: "Pricing",
        link: "/pricing",
        id: uuidv4(),
    },
    {
        icon: <RiLoginCircleFill fontSize={24} className="text-white font-bold" />,
        name: "sign-in",
        link: "/sign-in",
        id: uuidv4(),
    },
]