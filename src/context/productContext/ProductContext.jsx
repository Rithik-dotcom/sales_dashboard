import React, { createContext, useState } from 'react';
import PRODUCTS from '../../shop-data.json';

export const ProductContext = createContext({
    product:[],
});

export const ProductProvider =({children})=>{
const [product, setProducts] = useState(PRODUCTS);
// console.log(product);
const value = {product};


    return(<ProductContext.Provider value={value} >{children}</ProductContext.Provider>)
}





