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
    <section className="bg-[#141A29] border border-[#2c2c2c] p-2">
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
          onChange={(event) => handleChange}
          inputClass="outline-none border border-[#ccc] py-1 pl-1
          rounded-md text-black"
          placeholder="Product name"
        />
      </form>
    </section>
  );
}
