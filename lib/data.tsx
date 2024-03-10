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

export const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];