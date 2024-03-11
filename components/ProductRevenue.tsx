import Link from "next/link"
import Image from "next/image"
import { productsRevenue } from "@/lib/data"


export default function ProductRevenue() {
  return (
    <section className="bg-[#141a29] border border-[#2c2c2c]
     rounded-md mt-6 lg:mt-0 p-3">
      <div className="flex flex-row items-center justify-between">
       <h3 className="text-white text-lg font-medium">Products</h3>
       <Link href="" className="text-xs text-[#d7d7d8]">See all</Link>
      </div>
      <hr className="my-1"/>
      <ul className="mt-2">
        {productsRevenue.map(item => (
          <li key={item.id} className="flex flex-col md:flex-row gap-1 md:gap-3 items-center 
          justify-center md:justify-between mt-4">
            <Image
             src={item.image}
             alt="product image"
             width={60}
             height={60}
             className="rounded-md lg:w-[50px] h-[50px]"
            />
            <h5 className="text-white text-sm">{item.name}</h5>
            <h5 className="text-[#09a35c] text-sm">{item.price}</h5>
          </li>
        ))}
      </ul>
    </section>
  )
}
