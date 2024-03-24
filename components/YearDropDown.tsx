"use client"

import { useState, useEffect } from "react"
import {
  Select, SelectContent, SelectGroup,
  SelectItem, SelectTrigger,
  SelectValue
} from "@/components/ui/select"

export default function YearDropDown() {
  const [duration, setDuration] = useState("")

  // console.log(duration)
  // useEffect(() => {
  //   console.log(duration)
  // }, [duration])

  // const handleSelectChange = (event) => {
  //   setDuration(event.target.value)
  // }

  useEffect(() => {
    console.log(duration)
  }, [duration])


  return (
    // <section className="text-white mt-5 md:mt-0 flex flex-col
    //  items-center justify-center mb-10">
    //   <select className="bg-[#141A29] text-white outline-none border
    //   border-[#2c2c2c] py-2 md:py-5"
    //    value={duration}
    //    onChange={(event) => setDuration(event.target.value)}
    //   >
    //    <option className="bg-[#2c2c2c] pr-2">THIS YEAR</option>
    //    <option className="bg-[#2c2c2c]">Last 30 days</option>
    //    <option className="bg-[#2c2c2c]">Last month</option>
    //    <option className="bg-[#2c2c2c]">Last year</option>
    //   </select>
    // </section>
    <div className="flex items-center justify-center
    my-5">
      <Select>
        <SelectTrigger className="w-[180px] bg-[#141A29] text-white border border-[#2c2c2c]">
          <SelectValue placeholder="THIS YEAR" />
        </SelectTrigger>
        <SelectContent className="bg-[#141A29] text-white border border-[#2c2c2c]">
          <SelectGroup>
            <SelectItem value="Last 30 days">Last 30 days</SelectItem>
            <SelectItem value="Last month">Last month</SelectItem>
            <SelectItem value="Last year">Last year</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
