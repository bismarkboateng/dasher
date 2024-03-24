"use client"


import AddProductForm  from "@/components/AddProductForm"
import { useProductModal } from "@/store/ProductModal"


type ProductLayoutType = {
    children: React.ReactNode;
}

const metadata = {
  title: "All Products"
}

export default function ProductsLayout({ children }: ProductLayoutType) {
  const isOpen = useProductModal(state => state.isOpen)

  return (
    <section className="relative w-full h-[100%] md:h-[100vh] lg:h-[130vh]">
     {isOpen && <AddProductForm />}
     {children}
    </section>
  )
}
