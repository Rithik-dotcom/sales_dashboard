import React from 'react'
import './cart.scss';

const CartItem = ({cartItem}) => {
    const { imageUrl, price, name, quantity } = cartItem;
   console.log("hi"+price)
   console.log(imageUrl)
  return (
    <div className='cart-item-container'>
    
      <img src={imageUrl} alt={`${cartItem.name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItem