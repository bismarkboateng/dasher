"use client"

import { useState, useEffect } from "react"
import {
    BarChart, Bar, Rectangle, XAxis, YAxis,
    CartesianGrid, Tooltip, Legend, 
    ResponsiveContainer
} from 'recharts'

import { data } from "@/lib/data"

export default function TotalSales() {
    // const [duration, setDuration] = useState("")


    return (
        <section className="w-full bg-[#141a29] border border-[#2c2c2c] p-2 rounded-md">
         <section className="flex flex-col md:flex md:flex-row md:items-center md:justify-between
         mb-5">
           <div className="flex flex-col">
            <h6 className="text-xs text-[#d7d7d8]">Total sales</h6>
            <h2 className="text-2xl text-white mt-1 font-bold">$145,922</h2>
           </div>
         </section>

         <section className="text-white mt-3 w-full h-[30vh] lg:h-[40vh] xl:h-[40vh]">
          <ResponsiveContainer width="100%" height="100%"> 
            <BarChart
              width={500}
              height={300}
              data={data}
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
             <Bar dataKey="pv" fill="" activeBar={<Rectangle fill="blue" stroke="blue" />} />
             <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="blue" stroke="purple" />} />
            </BarChart>
          </ResponsiveContainer>
         </section>
        </section>
    )
}