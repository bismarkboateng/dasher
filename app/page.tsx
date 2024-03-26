"use client" 

import { useState, useEffect } from "react"
import { MdOutlineRemoveRedEye } from "react-icons/md"

import YearDropDown from "@/components/YearDropDown"
import TotalSales from "@/components/TotalSales"
import ProductRevenue from "@/components/ProductRevenue"
import { analytics } from "@/lib/data"
import { useSelectStore } from "@/store/SelectStore"
import SalePerProductGraph from "@/components/SalePerProductGraph"
import { getDataBasedOnTime } from "@/lib/getDataFromFirebase"

type DataArray = {
  name: string;
  price: number;
}[]


export default function Home() {
  const time = useSelectStore(state => state.time)
  const [dataBasedOnTime, setDataBasedOnTime] = useState<null | UserFromFirebase[]>(null)
  const [data, setData] = useState<null | DataArray>(null)
  
  useEffect(() => {
    const getData = async () => {
      const res = await getDataBasedOnTime(time)
      let tempGraphData: DataArray = []
      res.map(item => {
        const name = item?.sales?.product
        const price = item?.sales?.total_price
        const newData = { name, price }
        tempGraphData.push(newData)
      })
      setData(tempGraphData)
      setDataBasedOnTime(res)
    }

    getData()
  }, [time])

  return (
    <main className="bg-black pt-10 overflow-hidden">
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
        <div className="flex flex-row items-center justify-center gap-1
         bg-[#141A29] w-[85%] md:w-[90%] xl:w-[95%] mx-auto rounded-md py-4 mt-2 border border-[#2c2c2c]">
          <div className="flex flex-row items-center w-[40%] xl:w-[60%] gap-2">
            <div className="bg-[#2c2c2c] p-2 rounded-full">
             <MdOutlineRemoveRedEye fontSize={20} className="text-white font-bold"/>
            </div>
            <div>
              <p className="text-[#D7D7D8] text-xs">Users</p>
              <div className="flex flex-row items-center gap-3">
                <p className="text-white text-2xl font-bold">{dataBasedOnTime?.length || 100}</p>
                <div className="text-white text-xs">34%</div>
              </div>
            </div>
          </div>
        </div>
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
      <section className="w-[85%] md:w-[95%] xl:w-[94%] h-[40vh] lg:h-[100vh] mx-auto mt-5 mb-10">
        {data && <TotalSales data={data} /> }
      </section>

      <section className="w-[85%] md:w-[95%] mx-auto h-[30vh] mt-64 md:mt-52 lg:mt-10 xl:-mt-20
       2xl:-mt-96 flex flex-col md:flex-row md:gap-10 mb-20">
        <div className="w-full md:w-[50%] h-[30vh]">
          <ProductRevenue />
        </div>

        <div className="w-full md:w-[50%] h-[30vh] md:h-[32vh] lg:h-[43vh] 2xl:h-[28.5vh] bg-[#141a29]
        border border-[#2c2c2c] mt-60 md:mt-6 lg:mt-0 rounded-md">
         <p className="text-white font-normal text-lg p-2">Sales per product</p>
         <SalePerProductGraph />
        </div>
      </section>
    </main>
  );
}