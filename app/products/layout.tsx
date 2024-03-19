"use client"

import { useProductModal } from "@/store/ProductModal"
import AddProductForm  from "@/components/AddProductForm"


type UsersLayoutType = {
    children: React.ReactNode;
}

export default function ProductsLayout({ children }: UsersLayoutType) {
    const isOpen = useProductModal(state => state.isOpen)
    const handleOpenProductModal = useProductModal(state => state.handleOpenProductModal)

    const handleProductModal = () => {
        handleOpenProductModal()
        console.log("clicked")
    }

  return (
    <section className="bg-black">
      <section className="absolute top-0 left-0 w-[85%] ml-8 h-[40vh] z-999
      mt-5">
      {isOpen && <AddProductForm />}
     </section>

     <div className="flex flex-row items-center justify-between w-[85%] mx-auto pt-5">
      <h1 className="text-white text-lg font-bold mb-5 pt-3 text-center">All Products</h1>
      <div className="text-white bg-[#141A29] rounded-md outline-none text-xs
      py-2 px-5 border border-[#2c2c2c] shadow-xl cursor-pointer"
      onClick={() => handleProductModal}>Add Product</div>
    </div>
     {children}

    </section>
  )
}
