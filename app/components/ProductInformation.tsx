"use client";

import Image from "next/image";
import { useState } from "react";
import { Actions } from "../types";
import { nanoid } from 'nanoid';
import { useProductContext } from "../context/ProductContext";

const ProductInformation = () => {
  const dataProduct = { name: "Fall Limites Edition Sneaker", price: 125 };
  const [amountProduct, setAmountProduct] = useState(0);
  const {setListProducts, setCantProducts} = useProductContext()

  const handleAmountProduct = (action: Actions) => {
    switch (action) {
      case "minus":
        if (amountProduct > 0) setAmountProduct((prev) => prev - 1);
        break;

      case "plus":
        if (amountProduct < 5) setAmountProduct((prev) => prev + 1);
        break;
    }
  };

  const addToCarShop = () => {
    if(amountProduct == 0){
      alert('La cantidad minima del pedido es uno')
      return
    }
    setListProducts([
      {
        id: nanoid(),
        amount: amountProduct,
        name: dataProduct.name,
        price: dataProduct.price,
      },
    ]);
    setCantProducts(amountProduct)
    setAmountProduct(0)
  };
  return (
    <>
      <div className="grid gap-3">
        <span className="text-Dark_grayish_blue text-xs font-semibold tracking-widest">
          SNEAKER COMPANY
        </span>
        <h3 className="font-bold text-3xl">{dataProduct.name}</h3>
        <p className="text-Dark_grayish_blue text-sm">
          These low-profile sneaker are your perfect casual wear companion.
          Featuring a durable rubber outer sole. they'll withstand everything
          the weather can offer
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-7">
            <span className="font-bold text-2xl">${dataProduct.price}.00</span>
            <span className="bg-Very_dark_blue text-white text-sm py-1 px-2 rounded-md flex items-center">
              50%
            </span>
          </div>
          <span className="text-Dark_grayish_blue text-sm font-semibold line-through">
            $250.00
          </span>
        </div>
      </div>
      <section className="mt-8">
        <div className="flex items-center justify-between mb-5 px-5">
          <Image
            src="/images/icon-minus.svg"
            alt="Minus"
            width={10}
            height={10}
            className="cursor-pointer"
            onClick={() => handleAmountProduct("minus")}
          />
          <span>{amountProduct}</span>
          <Image
            src="/images/icon-plus.svg"
            alt="Plus"
            width={10}
            height={10}
            className="cursor-pointer"
            onClick={() => handleAmountProduct("plus")}
          />
        </div>
        <button
          className="bg-Orange w-full flex justify-center items-center
      gap-4 py-4 rounded-lg font-bold text-Very_dark_blue text-sm"
      onClick={addToCarShop}
        >
          <Image
            src="/images/icon-cart.svg"
            alt="Carrito"
            width={15}
            height={15}
          />
          Add to cart
        </button>
      </section>
    </>
  );
};

export default ProductInformation;
