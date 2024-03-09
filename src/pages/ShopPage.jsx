import React, { useContext } from 'react';
import { ProductContext } from '../context/productContext/ProductContext';
// import  products  from '../shop-data.json';
const ShopPage = () => {
    const {product} = useContext(ProductContext);

    return (
        <div>
            {product.map(({ id, name }) => {
                return (
                    <div key={id} >
                        <h1>{name}</h1>
                    </div>)
            })}
        </div>
    )
}

export default ShopPage