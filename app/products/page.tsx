"use client"

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import {
  Table, TableBody,TableCaption,
  TableCell, TableHead,
  TableHeader, TableRow,
} from "@/components/ui/table"
import { database } from "@/lib/firebase";
import { useProductModal } from "@/store/ProductModal"


export default  function Products() {
  const handleOpenProductModal = useProductModal(state => state.handleOpenProductModal)
  const [products, setProducts] = useState<null | Product[]>(null)

  
  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(database, "products"));
      const newProducts: Product[] = []
      querySnapshot.forEach((doc) => {
        newProducts.push(doc.data() as Product)
      });
      setProducts(newProducts)
    }
    getProducts()
  }, [])

  return (
    <section className="bg-black w-full h-[100%] text-white">
      <div className="flex flex-row items-center justify-between w-[85%] mx-auto pt-5">
        <h1 className="text-white text-lg md:text-xl font-bold mb-5 pt-3 text-center">All Products</h1>
        <div className="text-white bg-[#141A29] rounded-md outline-none text-xs md:text-xl
          py-2 px-5 border border-[#2c2c2c] shadow-xl cursor-pointer" onClick={() => handleOpenProductModal()}>
            Add Product
        </div>
      </div>

      <Table>
        <TableCaption>List of All Products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Color</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product) => (
            <TableRow key={product.product_name}>
              <TableCell className="truncate">{product.product_name}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.size}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.color}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
