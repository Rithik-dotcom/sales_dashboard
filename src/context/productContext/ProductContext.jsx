import React, { createContext, useState, useEffect } from 'react';
// import SHOP_DATA from '../../shop-data';

import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../../FireBase_utils/Utils';
export const CategoriesContext = createContext({
    categoryMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoryMap, setCategories] = useState({});
    // useEfect to send data to the firestore
    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA);
    // }, []);
    // console.log(product);

    // useEffect to get data from firestore
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategories(categoryMap)
        }
        getCategoriesMap();
       
    }, [])


    const value = { categoryMap };


    return (<CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>)
}





