import Image from "next/image"

import YearDropDown from "@/components/YearDropDown"
import { getJeans } from "@/lib/getProducts"
import { analytics } from "@/lib/data"



export default function Home() {


  return (
    <main className="bg-black h-screen pt-10">
      <div className="flex flex-col md:flex-row md:justify-between md:w-[85%] mx-auto
        md:items-center">
        <section className="flex flex-col items-center justify-center
        md:items-start">
          <h1 className="text-white font-bold text-2xl">Dashboard</h1>
          <p className="text-[#D7D7D8] text-base font-normal mt-1">Analytics Overview</p>
        </section>
        <YearDropDown />
      </div>
      <section className="flex flex-col gap-2">
       {analytics.map(item => (
        <div key={item.title} className="flex flex-row items-center gap-1">
          <div className="bg-[#2c2c2c] p-1 rounded-full">
            {item.icon}
          </div>
          <div className="flex flex-row items-end">
            <div>
             <p className="text-[#D7D7D8] text-xs">{item.title}</p>
             <p className="text-white">{item.value}</p>
            </div>
            <div className="text-white">{item.increase}</div>
          </div>
        </div>
       ))}
      </section>
    </main>
  );
}