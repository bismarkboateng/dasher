"use client"

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "@/lib/firebase";
import { useProductModal } from "@/store/ProductModal"
import AddProductForm  from "@/components/AddProductForm"


export default  function Products() {
  const isOpen = useProductModal(state => state.isOpen)
  const handleOpenProductModal = useProductModal(state => state.handleOpenProductModal)
  const [products, setProducts] = useState<null | Product[]>(null)

  
  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(database, "products"));
      const newProducts: Product[] = []

      querySnapshot.forEach((doc) => {
        newProducts.push(doc.data())
      });

      setProducts(newProducts)
    }

    getProducts()

  }, [])


  const thStyles = "text-left py-1"

  return (
    <section className="relative w-full bg-black h-screen text-white">
      <section className="absolute top-0 left-0 w-[85%] ml-[20%] h-[40vh] z-999
       mt-5">
       {isOpen && <AddProductForm />}
      </section>

      <div className="flex flex-row items-center justify-between w-[85%] mx-auto pt-5">
        <h1 className="text-white text-2xl font-bold mb-5 pt-3 text-center">All Products</h1>

        <div className="text-white bg-[#141A29] rounded-md outline-none text-xs
          py-2 px-5 border border-[#2c2c2c] shadow-xl cursor-pointer"
        onClick={() => handleOpenProductModal()}>Add Product</div>
      </div>
      

      <section className="overflow-x-hidden h-[40vh]">
        <table className="border-collapse overflow-x-scroll text-base ml-3 w-[100%] md:w-[95%] mx-auto h-full">
          <thead className="mb-2">
            <tr>
              <th className={thStyles}>Name</th>
              <th className={thStyles}>Brand</th>
              <th className={thStyles}>Quantity</th>
              <th className={thStyles}>Size</th>
              <th className={thStyles}>Price</th>
              <th className={thStyles}>Color</th>
            </tr>
          </thead>
          <tbody> 
            {products?.map((product: Product) => (
              <tr key={product.product_name} className="border-b border-[#ccc]">
                <td className="text-base text-left">{product.product_name}</td>
                <td className={thStyles}>{product.brand}</td>
                <td className={thStyles}>{product.quantity}</td>
                <td className={thStyles}>{product.size}</td>
                <td className={thStyles}>{product.price}</td>
                <td className={thStyles}>{product.color}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}
