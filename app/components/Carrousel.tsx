"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const images = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

const imagesThumbnail = [
  "/images/image-product-1-thumbnail.jpg",
  "/images/image-product-2-thumbnail.jpg",
  "/images/image-product-3-thumbnail.jpg",
  "/images/image-product-4-thumbnail.jpg",
];

interface Props {
  setShowPhotos: (show: boolean) => void
  showControls: boolean
}

const Carrousel: React.FC<Props> = ({setShowPhotos, showControls}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderImages = useRef<HTMLDivElement>(null)

  const verificarPantalla = () => {
    // 760px es la medida de el punto de quiebre para cambiar de pantalla
    if (window.matchMedia("(min-width: 760px)").matches) {
      setShowPhotos(true);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const selectSlide = (id: number) => {
    setCurrentIndex(id);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 cursor-pointer desktop:[desktop]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        ref={sliderImages}
        onClick={verificarPantalla}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 relative h-96">
            <Image
              src={src}
              alt={`Slide ${index}`}
              layout="fill"
              objectFit="cover"
              className="w-full desktop:rounded-xl"
            />
          </div>
        ))}
      </div>

      <div className={showControls ? '' : 'desktop:hidden'}>
        <div
          className="absolute bg-white rounded-full w-10 h-10 flex items-center justify-center right-4 top-[40%] cursor-pointer"
          onClick={nextSlide}
        >
          <Image
            src="/images/icon-next.svg"
            alt="Next"
            width={10}
            height={10}
          />
        </div>
        <div
          className="absolute bg-white rounded-full w-10 h-10 flex items-center justify-center left-4 top-[40%] cursor-pointer"
          onClick={prevSlide}
        >
          <Image
            src="/images/icon-previous.svg"
            alt="Previous"
            width={10}
            height={10}
          />
        </div>
      </div>
      <div className="hidden desktop:flex w-full justify-evenly mt-5">
        {imagesThumbnail.map((image, index) => (
          <picture
            className="relative cursor-pointer"
            onClick={() => selectSlide(index)}
          >
            <Image
              src={image}
              alt="Imagen"
              width={60}
              height={60}
              className="rounded-lg"
            />
            {currentIndex == index ? (
              <div className="bg-Pale_Orange absolute w-full h-full top-0 opacity-50 border-2 border-orange-600 rounded-lg"></div>
            ) : null}
          </picture>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
