import { LiaHomeSolid } from "react-icons/lia"
import { TbTriangleSquareCircle } from "react-icons/tb"
import { FaRegUser } from "react-icons/fa6"
import { AiOutlineDollarCircle } from "react-icons/ai"
import { RiFilePaperLine } from "react-icons/ri"
import { MdOutlineRemoveRedEye } from "react-icons/md"
import { TbWorld } from "react-icons/tb"
import { AiOutlineDollar } from "react-icons/ai"
import { IoMdStarOutline } from "react-icons/io"



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
]


export const analytics = [
    {
        icon: <MdOutlineRemoveRedEye fontSize={20} className="text-white font-bold"/>,
        title: "Users",
        value: "128K",
        increase: "34%",
    },
    {
        icon: <TbWorld fontSize={20} className="text-white font-bold"/>,
        title: "Sessions",
        value: "753K",
        increase: "8%",
    },
    {
        icon: <AiOutlineDollar fontSize={20} className="text-white font-bold"/>,
        title: "Conversions",
        value: "10.8K",
        increase: "4%",
    },
    {
        icon: <IoMdStarOutline fontSize={20} className="text-white font-bold"/>,
        title: "Conversion Rate",
        value: "8.5%",
        increase: "12%",
    },
]