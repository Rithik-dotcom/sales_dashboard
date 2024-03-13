import React from 'react'
// import './ProductCard.styles.scss'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    return (
        <div className='product-cart-container col p-3 align-item-center' >
            <div className="card " style={{width: "18rem"}}>
                <img src={imageUrl} className="card-img-top" style={{width: '100%', height: '20rem'}} alt={`${name}`} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <button type="button" className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>



    )
}

export default ProductCard