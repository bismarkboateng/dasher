"use client"

import { useProductModal } from "@/store/ProductModal"
import AddProductForm from "./AddProductForm"


export default function RenderProductForm() {
  const isOpen = useProductModal(state => state.isOpen)

  return (
    <div className="absolute top-0 left-0 w-[85%] ml-8 h-[40vh] z-999
     mt-5">
     {isOpen && <AddProductForm />}
    </div>
  )
}
