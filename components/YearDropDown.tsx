"use client"

import { useState, useEffect } from "react"

export default function YearDropDown() {
  const [duration, setDuration] = useState("")

  console.log(duration)
  useEffect(() => {
    console.log(duration)
  }, [duration])

  return (
    <section className="text-white mt-5 md:mt-0 flex flex-col
     items-center justify-center">
      <select className="bg-[#141A29] text-white outline-none border
      border-[#2c2c2c] py-2 md:py-5"
       value={duration}
       onChange={(event) => setDuration(event.target.value)}
      >
       <option className="bg-[#2c2c2c] pr-2">This year</option>
       <option className="bg-[#2c2c2c]">Last 30 days</option>
       <option className="bg-[#2c2c2c]">Last month</option>
       <option className="bg-[#2c2c2c]">Last year</option>
      </select>
    </section>
  )
}
