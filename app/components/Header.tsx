"use client";

import Image from "next/image";
import CarShop from "./CarShop";
import NavBar from "./NavBar";
import { useState } from "react";
import { useProductContext } from "../context/ProductContext";

const Header = () => {
  const options = ['Collections', 'Men', 'Women', 'About', 'Contact']
  const [showCarShop, setShowCartShop] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const { cantProducts } = useProductContext();

  const handleShowNavBar = () => {
    setShowCartShop(false);
    setShowNavBar(true);
  };

  return (
    <div className="relative w-full h-20 ">
      <header className="w-full flex justify-between h-20 px-6 desktop:justify-around">
        <div className="flex items-center gap-4 h-full">
          <div>
            <Image
              src="/images/icon-menu.svg"
              alt="Logo Menu"
              width={20}
              height={20}
              className="cursor-pointer desktop:hidden"
              onClick={handleShowNavBar}
            />
            {showNavBar && <NavBar setShowNavBar={setShowNavBar} options={options}/>}
          </div>
          <Image src="/images/logo.svg" alt="Logo" width={130} height={50} />
          <ul className="hidden desktop:flex gap-4 ml-5 h-full">
            {options.map((option, index) => (
              <li className="flex items-center cursor-pointer h-full hover:border-b-4 hover:border-orange-600" key={index}>{option}</li>
            ))}
          </ul>
        </div>
        <div className="flex gap-7 items-center">
          <div className="flex flex-col desktop:relative">
            <div className="relative h-full">
              {cantProducts != 0 ? (
                <div className="absolute text-White text-xs font-semibold -top-2 -right-2 bg-Orange px-2 rounded-xl">
                  {cantProducts}
                </div>
              ) : null}
              <Image
                src="/images/icon-cart.svg"
                alt="Logo"
                width={25}
                height={25}
                className="cursor-pointer"
                onClick={() => setShowCartShop(!showCarShop)}
              />
            </div>
            {showCarShop && <CarShop />}
          </div>
          <Image
            src="/images/image-avatar.png"
            alt="Logo"
            width={40}
            height={40}
            className="outline-2 outline-orange-600 rounded-full cursor-pointer hover:outline"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
