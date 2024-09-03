'use client'

import Header from "./components/Header";
import Carrousel from "./components/Carrousel";
import ProductInformation from "./components/ProductInformation";
import { ProductContextProvider, useProductContext } from "./context/ProductContext";
import Photos from "./components/Photos";
import { useState } from "react";

export default function Home() {

  const [showPhotos, setShowPhotos] = useState(false)

  return (
    <ProductContextProvider>
      <div className="flex flex-col h-screen">
        <Header/>
        <section className="flex flex-col gap-6 flex-1 justify-center items-center mx-auto desktop:flex-row desktop:w-[90%] desktop:gap-16 xl:w-[70%]">
          <Carrousel setShowPhotos={setShowPhotos} showControls={false}/>
          <ProductInformation/>
        </section>
        {showPhotos && <Photos setShowPhotos={setShowPhotos}/>}
      </div>
    </ProductContextProvider>
  );
}
