import Image from "next/image"

import YearDropDown from "@/components/YearDropDown"
import { analytics } from "@/lib/data"



export default function Home() {


  return (
    <main className="bg-black h-screen pt-10">
      <div className="flex flex-col md:flex-row md:justify-between md:w-[85%] xl:w-[93%] mx-auto
        md:items-center">
        <section className="flex flex-col items-center justify-center
        md:items-start">
          <h1 className="text-white font-bold text-2xl">Dashboard</h1>
          <p className="text-[#D7D7D8] text-base font-normal mt-1">Analytics Overview</p>
        </section>
        <YearDropDown />
      </div>
      <section className="flex flex-col gap-2 md:grid md:grid-cols-2 xl:grid-cols-3
      xl:w-[95%] mx-auto">
       {analytics.map(item => (
        <div key={item.title} className="flex flex-row items-center justify-center gap-1
        bg-[#141A29] w-[85%] md:w-[90%] xl:w-[95%] mx-auto rounded-md py-4 mt-2 border border-[#2c2c2c]
        ">
          <div className="flex flex-row items-center w-[40%] xl:w-[60%] gap-2">
            <div className="bg-[#2c2c2c] p-2 rounded-full">
              {item.icon}
            </div>
            <div>
              <p className="text-[#D7D7D8] text-xs">{item.title}</p>
              <div className="flex flex-row items-center gap-3">
                <p className="text-white text-2xl font-bold">{item.value}</p>
                <div className="text-white text-xs">{item.increase}</div>
              </div>
            </div>

          </div>
        </div>
       ))}
      </section>
    </main>
  );
}