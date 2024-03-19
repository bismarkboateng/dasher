"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input";

export default function AddProductForm() {
  const [product, setProduct] = useState({} as Product);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct(prevProduct => ({...prevProduct, [name]: value }))
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(product)
  }

  return (
    <section className="bg-[#141A29] border border-[#2c2c2c] p-3 w-[70%]">
      <h1 className="text-white text-lg font-normal">Add Product</h1>
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

        <div className="flex flex-row items-center justify-between w-[85%] mx-auto">
          <button className="bg-[#786eff] text-white py-1 px-4 rounded-md
           text-sm" onClick={() => {}}>Submit</button>
          <button className="bg-[#2c2c2c] text-white py-1 px-4 rounded-md
         text-sm" onClick={() => {}}>Cancel</button>
        </div>
      </form>
    </section>
  );
}
