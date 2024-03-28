import React, { Fragment, useContext } from 'react';
import { CategoriesContext } from '../context/productContext/ProductContext';
// import  products  from '../shop-data.json';
import ProductCard from '../customComponents/productCard/ProductCard';

const ShopPage = () => {
    const { categoryMap } = useContext(CategoriesContext);
    console.log(categoryMap)
    return (
        <Fragment>
            {
                Object.keys(categoryMap).map((title )=> (
                    <Fragment key={title}>
                        <h2 className='text-white'>{title}</h2>
                        <div className='container text-center '>
                            <div className='row'> {categoryMap[title].map((product) => {
                                return (
                                    <ProductCard key={product.id} product={product} />
                                )
                            })}
                            </div>
                        </div>
                    </Fragment>
                    ))
            }
        </Fragment>
        // <div className='container text-center '>
        //     <div className='row'> {product.map((product) => {

        //         return (
        //             <ProductCard key={product.id} product={product} />
        //         )
        //     })}
        //     </div>
        // </div>
    )
}

export default ShopPage