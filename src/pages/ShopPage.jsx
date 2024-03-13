import React, { useContext } from 'react';
import { ProductContext } from '../context/productContext/ProductContext';
// import  products  from '../shop-data.json';
import ProductCard from '../customComponents/productCard/ProductCard';

const ShopPage = () => {
    const {product} = useContext(ProductContext);

    return (
        <div className='container text-center '>
           <div className='row'> {product.map(( product ) => {
                console.log(product)
                return (
                    <ProductCard  key={product.id} product={product}  />
                    )
            })}
            </div>
        </div>
    )
}

export default ShopPage