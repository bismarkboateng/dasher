"use client"

import { useState, useEffect } from "react"
import {
    BarChart, Bar, Rectangle, XAxis, YAxis,
    Tooltip, Legend, 
    ResponsiveContainer
} from 'recharts'
import { data } from "@/lib/data"
import { getUsers } from "@/lib/getDataFromFirebase"


type TotalSalesProps = {
  data: {
    name: string;
    price: number;
  }[]
}


export default function TotalSales(props: TotalSalesProps) {
    const [users, setUsers] = useState<null | UserFromFirebase[]>(null)
    const [totalSales, setTotalSales] = useState(0)


    useEffect(() => {
      const getData = async () => {
        const res = await getUsers()
        setUsers(res)
      }
      getData()
    }, [])

    useEffect(() => {
      const data = props.data
      let sum = 0
      data?.map(item => {
        sum += +item?.price
      })
      setTotalSales(sum)
    }, [props.data])

    return (
      <section className="w-full lg:h-[100vh] xl:h-[80vh] 2xl:h-[55vh] bg-[#141a29] border border-[#2c2c2c] p-2 rounded-md">
        <section className="flex flex-col md:flex md:flex-row md:items-center md:justify-between mb-5">
          <div className="flex flex-col">
            <h6 className="text-xs text-[#d7d7d8]">Total sales</h6>
            <h2 className="text-2xl text-white mt-1 font-bold">{`$${totalSales}` || "$145,922"}</h2>
          </div>
        </section>

        <section className="text-white mt-3 w-full lg:h-[100vh] xl:h-[40vh]">
          <ResponsiveContainer width="100%" height={500} > 
            <BarChart
              data={props.data || data}
              margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
            }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={"price" || "uv"} fill="#82ca9d" width={1}/>
            </BarChart>
          </ResponsiveContainer>
        </section>
      </section>
    )
}