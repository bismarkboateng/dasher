"use client" 

import { useState, useEffect } from "react"

import YearDropDown from "@/components/YearDropDown"
import TotalSales from "@/components/TotalSales"
import ProductRevenue from "@/components/ProductRevenue"
import { analytics } from "@/lib/data"
// import { useSelectStore } from "@/store/SelectStore"
import { getUsers } from "@/lib/getDataFromFirebase"
import SalePerProductGraph from "@/components/SalePerProductGraph"



export default function Home() {
  const [info, setInfo] = useState()


  useEffect(() => {
    const getInfo = async () => {
      const users = await getUsers()
      console.log(users)
    }
  }, [])


  return (
    <main className="bg-black pt-10 overflow-scroll">
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
        bg-[#141A29] w-[85%] md:w-[90%] xl:w-[95%] mx-auto rounded-md py-4 mt-2 border border-[#2c2c2c]">
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
      <section className="w-[85%] md:w-[95%] xl:w-[94%] h-[40vh] mx-auto mt-5">
        <TotalSales />
      </section>
      <section className="w-[95%] 2xl:w-[94%] mx-auto flex flex-col md:flex-row items-start
      mb-2 lg:mt-28 pt-0">
        <section className="w-[90%] mx-auto xl:mx-0 md:w-[40%] bg-black text-white flex flex-col md:flex-row">
          <ProductRevenue />
        </section>

        <section className="w-[90%] md:w-[60%] xl:w-[40%] h-[20vh] md:h-[25vh] lg:h-[40vh] 2xl:h-[20vh]
        rounded-md mx-auto bg-[#141a29] border border-[#2c2c2c] flex items-center justify-center
        mt-5 lg:mt-0 mb-1">
          <SalePerProductGraph />
        </section>
      </section>
    </main>
  );
}