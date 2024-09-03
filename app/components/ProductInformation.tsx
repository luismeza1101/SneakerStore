"use client";

import Image from "next/image";
import { useState } from "react";
import { Actions } from "../types";
import { nanoid } from "nanoid";
import { useProductContext } from "../context/ProductContext";

const ProductInformation = () => {
  const dataProduct = { name: "Fall Limites Edition Sneaker", price: 125 };
  const [amountProduct, setAmountProduct] = useState(0);
  const { setListProducts, setCantProducts } = useProductContext();

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
    if (amountProduct == 0) {
      alert("La cantidad minima del pedido es uno");
      return;
    }
    setListProducts([
      {
        id: nanoid(),
        amount: amountProduct,
        name: dataProduct.name,
        price: dataProduct.price,
      },
    ]);
    setCantProducts(amountProduct);
    setAmountProduct(0);
  };
  return (
    <div className="w-[80%] mx-auto pb-6">
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
        <div className="flex items-center justify-between desktop:flex-col desktop:items-start">
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
      <section className="mt-8 flex flex-col items-center justify-center gap-4 desktop:flex-row">
        <div className="flex items-center w-full justify-between px-3 desktop:w-[40%]">
          <picture
            className="cursor-pointer flex items-center h-6 px-2"
            onClick={() => handleAmountProduct("minus")}
          >
            <Image
              src="/images/icon-minus.svg"
              alt="Minus"
              width={10}
              height={10}
            />
          </picture>
          <span>{amountProduct}</span>
          <picture
            className="cursor-pointer flex items-center h-6 px-2"
            onClick={() => handleAmountProduct("plus")}
          >
            <Image
              src="/images/icon-plus.svg"
              alt="Plus"
              width={10}
              height={10}
            />
          </picture>
        </div>
        <button
          className="bg-Orange w-full flex justify-center items-center
          gap-4 py-4 rounded-lg font-bold text-Very_dark_blue text-sm desktop:w-[60%] hover:bg-orange-400"
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
    </div>
  );
};

export default ProductInformation;
