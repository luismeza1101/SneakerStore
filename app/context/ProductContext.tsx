'use client'

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { Products } from "../types";

interface ProductContextTypes{
    listProducts: Products[]
    setListProducts: (products: Products[]) => void
    cantProducts: number
    setCantProducts: (currentCantProducts: number) => void
}

const ProductContext = createContext<ProductContextTypes | undefined>(undefined)

export const ProductContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [listProducts, setListProducts] = useState<Products[]>([])
    const [cantProducts, setCantProducts] = useState(0)

    const contextValue = useMemo(() => ({listProducts, setListProducts, cantProducts, setCantProducts}), [listProducts, cantProducts])

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => {
    const context = useContext(ProductContext)
    if(context == undefined){
        throw new Error('No se consume bien el contexto')
    }
    return context
}