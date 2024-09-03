"use client";

import Image from "next/image";
import { useProductContext } from "../context/ProductContext";

const CarShop = () => {
  const { listProducts, setListProducts, setCantProducts } =
    useProductContext();

  const deleteProduct = (id: string) => {
    const newListProducts = listProducts.filter((product) => product.id != id);
    setListProducts(newListProducts);
    setCantProducts(0);
  };

  return (
    <div className="bg-white absolute z-[50] rounded-lg w-[95%] min-h-72 left-1/2 top-[110%] transform -translate-x-1/2 flex flex-col shadow-2xl desktop:w-[30rem] desktop:-left-28 desktop:top-10">
      <h6 className="font-bold block border-b-2 p-5">Cart</h6>
      <div className="flex-1 flex items-center justify-center">
        {listProducts.length == 0 ? (
          <p className="text-Grayish_blue font-semibold">Your cart is empty.</p>
        ) : (
          <div className="w-full flex flex-col items-center gap-7">
            {listProducts.map((product) => (
              <div
                className="flex justify-around items-center w-full"
                key={product.id}
              >
                <Image
                  src="/images/image-product-1-thumbnail.jpg"
                  alt="Referencial Image"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <div className="text-Dark_grayish_blue">
                  <p>{product.name}</p>
                  <p>
                    ${product.price} x {product.amount}{" "}
                    <span className="text-black font-bold">
                      ${product.amount * product.price}.00
                    </span>
                  </p>
                </div>
                <Image
                  src="/images/icon-delete.svg"
                  alt="Delete"
                  width={15}
                  height={15}
                  className="cursor-pointer"
                  onClick={() => deleteProduct(product.id)}
                />
              </div>
            ))}
            <button className="bg-Orange w-[90%] font-extrabold py-5 rounded-xl">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarShop;
