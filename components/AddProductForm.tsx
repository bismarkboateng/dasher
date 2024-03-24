"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { TailSpin } from "react-loader-spinner"
import { ToastContainer, toast } from "react-toastify"


import { database } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore"
import { useProductModal } from "@/store/ProductModal";
import Input from "./Input";

export default function AddProductForm() {
  const handleCloseProductModal = useProductModal(state => state.handleCloseProductModal)
  const [product, setProduct] = useState({} as Product);
  const [loadingState, setLoadingState] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct(prevProduct => ({...prevProduct, [name]: value }))
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const addDocumentToFirebase = async () => {
      setLoadingState("adding")
      await addDoc(collection(database, "products"), {
        ...product,
        price: Number(product.price),
        quantity: Number(product.quantity),
        size: Number(product.size)
      })
      setLoadingState("added")
    }

    addDocumentToFirebase()
  }

  let buttonState

  if (loadingState == "adding") {
    buttonState = (
      <div className="flex flex-row items-center gap-1">
        <p className="text-white text-xs">adding product</p>
        <TailSpin
          visible={true}
          height="10"
          width="10"
          color="#fff"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
     )
  } else if (loadingState == "added") {
    toast("Product Added Sucessfully")
    buttonState = (
      <div className="text-white text-xs">
        <p>Added</p>
        <ToastContainer />
      </div>
    )
  } else {
    buttonState = (
      <button className="bg-[#786eff] text-white py-2 px-9 md:px-12 rounded-md
      text-sm font-bold">Submit</button>
    )
  }

  return (
    <>
    <div className="text-white absolute top-0 left-0 bottom-0 right-0 w-full h-[100%] backdrop-blur-sm"/>
    <section className="bg-[#141A29] border border-[#2c2c2c] p-3 w-[75%] md:w-[40%]
    lg:w-[50%] xl:w-[40%] absolute top-0 z-[1000] left-0 ml-[10%] md:ml-[30%] mt-[6%] mb-10">
      <h1 className="text-white text-2xl font-bold text-center">Add Product</h1>
      <div className="mt-2 mb-2 xl:mt-3 xl:mb-2 h-[0.5px] w-[100%] bg-[#ccc]"/>
      <form className="flex flex-col items-center w-[100%]" onSubmit={handleSubmit}>
        <Input
          divClass="flex flex-col items-start mb-2 w-[100%] justify-between"
          inputLabel="Product Name"
          labelClass="text-white"
          type="text"
          id="product_name"
          name="product_name"
          value={product.product_name}
          onChange={handleChange}
          inputClass="outline-none border border-[#ccc] py-1 pl-1
          rounded-md text-black w-[100%]"
          placeholder="Product name"
        />
        <Input
          divClass="flex flex-col items-start mb-2 justify-between mt-3 w-[100%]"
          inputLabel="Brand"
          labelClass="text-white"
          type="text"
          id="brand"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          inputClass="outline-none border border-[#ccc] py-1 pl-1
          rounded-md text-black w-[100%]"
          placeholder="Brand"
        />
        <Input
          divClass="flex flex-col items-start mb-2 justify-between mt-3 w-[100%]"
          inputLabel="Quantity"
          labelClass="text-white"
          type="text"
          id="quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          inputClass="outline-none border border-[#ccc] py-1 pl-1
          rounded-md text-black w-[100%]"
          placeholder="quantity"
        />
        <Input
          divClass="flex flex-col items-start mb-2 justify-between mt-3 w-[100%]"
          inputLabel="Size"
          labelClass="text-white"
          type="text"
          id="size"
          name="size"
          value={product.size}
          onChange={handleChange}
          inputClass="outline-none border border-[#ccc] py-1 pl-1
          rounded-md text-black w-[100%]"
          placeholder="size"
        />
        <Input
          divClass="flex flex-col items-start mb-2 justify-between mt-3 w-[100%]"
          inputLabel="Price"
          labelClass="text-white"
          type="text"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          inputClass="outline-none border border-[#ccc] py-1 pl-1
          rounded-md text-black w-[100%]"
          placeholder="price"
        />
        <Input
          divClass="flex flex-col items-start mb-2 justify-between mt-2 w-[100%]"
          inputLabel="Color"
          labelClass="text-white"
          type="text"
          id="color"
          name="color"
          value={product.color}
          onChange={handleChange}
          inputClass="outline-none border border-[#ccc] py-1 pl-1
          rounded-md text-black w-[100%]"
          placeholder="color"
        />

        <div className="flex w-[100%] justify-between mt-4">
          {buttonState}
          <button className="bg-[#2c2c2c] text-white py-2 px-9 md:px-12 rounded-md
         text-sm font-bold" onClick={() => handleCloseProductModal()}>Cancel</button>
        </div>
      </form>
    </section>
    </>
  );
}
