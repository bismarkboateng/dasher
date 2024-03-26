import { LiaHomeSolid } from "react-icons/lia"
import { TbTriangleSquareCircle } from "react-icons/tb"
import { FaRegUser } from "react-icons/fa6"
import { AiOutlineDollarCircle } from "react-icons/ai"
import { RiFilePaperLine } from "react-icons/ri"
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
        link: "/products",
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
]

export const analytics = [
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
  },
  {
    name: 'Page B',
    uv: 3000,
  },
  {
    name: 'Page C',
    uv: 2000,
  },
  {
    name: 'Page D',
    uv: 2780,
  },
  {
    name: 'Page E',
    uv: 1890,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
];


export const productsRevenue = [
  {
    image: "https://assets.website-files.com/64ccf14b517838cac9de1391/64ce6c450b77087d65e84d38_Export-Square-Images2.jpg",
    name: "iPhone 12 Pro",
    price:"$5000",
    id: uuidv4()
  },
  {
    image: "https://assets.website-files.com/64ccf14b517838cac9de1391/64ce6c450b77087d65e84d38_Export-Square-Images2.jpg",
    name: "iPhone 14 Pro",
    price:"$6000",
    id: uuidv4()
  },
  {
    image: "https://assets.website-files.com/64ccf14b517838cac9de1391/64ce6c450b77087d65e84d38_Export-Square-Images2.jpg",
    name: "iPhone Xr",
    price:"$1500",
    id: uuidv4()
  },
  {
    image: "https://assets.website-files.com/64ccf14b517838cac9de1391/64ce6c450b77087d65e84d38_Export-Square-Images2.jpg",
    name: "iPhone 11",
    price:"$2000",
    id: uuidv4()
  },
]

export const salesPerProduct = [
  {
    name: "Nike",
    total_sales: 400,
  },
  {
    name: "Balenciaga",
    total_sales: 800,
  },
  {
    name: "Adidas",
    total_sales: 1000,
  },
  {
    name: "Puma",
    total_sales: 1200,
  },
  {
    name: "Reebok",
    total_sales: 400,
  },
]