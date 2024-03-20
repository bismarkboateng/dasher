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
      <button className="bg-[#786eff] text-white py-2 px-8 rounded-md
      text-sm">Submit</button>
    )
  }

  return (
    <section className="bg-[#141A29] border border-[#2c2c2c] p-3 w-[70%]
    absolute top-0 left-0 ml-[10%] mt-[10%]">
      <h1 className="text-white text-2xl font-bold">Add Product</h1>
      <hr className="mb-8 mt-8"/>
      <form className="" onSubmit={handleSubmit}>
        <Input
          divClass="flex flex-row items-center justify-between mt-2"
          inputLabel="Product Name"
          labelClass=""
          type="text"
          id="product_name"
          name="product_name"
          value={product.product_name}
          onChange={handleChange}
          inputClass="outline-none border border-[#ccc] py-1 pl-1
          rounded-md text-black"
          placeholder="Product name"
        />
        <Input
          divClass="flex flex-row items-center justify-between mt-2"
          inputLabel="Brand"
          labelClass=""
          type="text"
          id="brand"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          inputClass="outline-none border border-[#ccc] py-1 pl-1
          rounded-md text-black"
          placeholder="Brand"
        />
        <Input
          divClass="flex flex-row items-center justify-between mt-2"
          inputLabel="Quantity"
          labelClass=""
          type="text"
          id="quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          inputClass="outline-none border border-[#ccc] py-1 pl-1
          rounded-md text-black"
          placeholder="quantity"
        />
        <Input
          divClass="flex flex-row items-center justify-between mt-2"
          inputLabel="Size"
          labelClass=""
          type="text"
          id="size"
          name="size"
          value={product.size}
          onChange={handleChange}
          inputClass="outline-none border border-[#ccc] py-1 pl-1
          rounded-md text-black"
          placeholder="size"
        />
        <Input
          divClass="flex flex-row items-center justify-between mt-2"
          inputLabel="Price"
          labelClass=""
          type="text"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          inputClass="outline-none border border-[#ccc] py-1 pl-1
          rounded-md text-black"
          placeholder="price"
        />
        <Input
          divClass="flex flex-row items-center justify-between mt-2"
          inputLabel="Color"
          labelClass=""
          type="text"
          id="color"
          name="color"
          value={product.color}
          onChange={handleChange}
          inputClass="outline-none border border-[#ccc] py-1 pl-1
          rounded-md text-black"
          placeholder="color"
        />

        <div className="flex flex-row items-center justify-between w-[85%] mx-auto mt-10
        mb-4">
          {buttonState}
          <button className="bg-[#2c2c2c] text-white py-2 px-8 rounded-md
         text-sm" onClick={() => handleCloseProductModal()}>Cancel</button>
        </div>
      </form>
    </section>
  );
}
