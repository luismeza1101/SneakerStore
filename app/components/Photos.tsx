'use client'

import Carrousel from "./Carrousel"
import Image from "next/image"

interface Props {
  setShowPhotos: (show: boolean) => void
}

const Photos: React.FC<Props> = ({setShowPhotos}) => {

  
  return (
    <div className="bg-Black w-screen h-screen absolute top-0 left-0 z-[999] flex items-center justify-center">
      <div className="w-[500px] flex flex-col items-end gap-4">
        <Image src="/images/icon-close.svg" alt="Icono" width={25} height={25} className="cursor-pointer" onClick={() => setShowPhotos(false)}/>
        <Carrousel setShowPhotos={setShowPhotos} showControls={true}/>
      </div>
    </div>
  )
}

export default Photos
