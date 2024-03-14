"use client"

export default function TableHead() {
  return (
    <div className="flex flex-row items-center justify-between w-[85%] mx-auto pt-5">
      <h1 className="text-white text-lg font-bold mb-5 pt-3 text-center">All Products</h1>
      <button className="text-white bg-[#141A29] rounded-md outline-none text-xs
      py-2 px-5 border border-[#2c2c2c] shadow-xl cursor-pointer"
      onClick={() => console.log("open product modal")}>Add Product</button>
    </div>
  )
}
