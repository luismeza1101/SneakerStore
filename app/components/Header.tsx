"use client";

import Image from "next/image";
import CarShop from "./CarShop";
import NavBar from "./NavBar";
import { useState } from "react";
import { useProductContext } from "../context/ProductContext";

const Header = () => {
  const [showCarShop, setShowCartShop] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const { cantProducts } = useProductContext();

  const handleShowNavBar = () => {
    setShowCartShop(false);
    setShowNavBar(true);
  };

  return (
    <div className="relative w-full">
      <header className="w-full flex justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div>
            <Image
              src="/images/icon-menu.svg"
              alt="Logo Menu"
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={handleShowNavBar}
            />
            {showNavBar && <NavBar setShowNavBar={setShowNavBar} />}
          </div>
          <Image src="/images/logo.svg" alt="Logo" width={130} height={50} />
        </div>
        <div className="flex gap-7 items-center">
          <div className="flex flex-col">
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
            width={30}
            height={30}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
