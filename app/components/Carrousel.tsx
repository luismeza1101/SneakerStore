"use client";

import Image from "next/image";
import { useState } from "react";

const Carrousel = () => {
  const imagesCarrousel = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const widthCarrousel = imagesCarrousel.length * 100;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex == imagesCarrousel.length - 1 ? 0 : prevIndex + 1
    )
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex == 0 ? imagesCarrousel.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-96 select-none">
      <div
        className={`bg-black w-[${widthCarrousel}%] h-full flex overflow-x-hidden transition-transform duration-500`}
        style={{
          transform: `translateX(-${
            (currentIndex * 100) / imagesCarrousel.length
          }%)`,
        }}
      >
        {imagesCarrousel.map((src, index) => (
          <picture className="w-full relative" key={index}>
            <Image src={src} alt="Imagen del producto" fill objectFit="cover" />
          </picture>
        ))}
      </div>
      <div className="absolute bg-white rounded-full w-10 h-10 flex items-center justify-center right-4 top-[40%] cursor-pointer" onClick={nextImage}>
        <Image
          src="/images/icon-next.svg"
          alt="Next"
          width={10}
          height={10}
        />
      </div>
      <div className="absolute bg-white rounded-full w-10 h-10 flex items-center justify-center left-4 top-[40%] cursor-pointer" onClick={prevImage}>
        <Image
          src="/images/icon-previous.svg"
          alt="Previous"
          width={10}
          height={10}
        />
      </div>
    </div>
  );
};

export default Carrousel;
