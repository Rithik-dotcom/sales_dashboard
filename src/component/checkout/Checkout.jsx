import React, { useContext } from 'react'
import { Cartcontext } from '../../context/CartContext/Cartcontext'
import './checkout.styles.scss'
import Checkout_item from '../../customComponents/checkout-item/Checkout_item';
const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart , cartTotal} = useContext(Cartcontext);
  return (
    <div className='checkout-container' >
      <div className='checkout-header'>
        <div className='header-block'>
          <span className='text-white'>Product</span>
        </div>
        <div className='header-block'>
          <span className='text-white'>Discription</span>
        </div>
        <div className='header-block'>
          <span className='text-white'>Quantity</span>
        </div>
        <div className='header-block'>
          <span className='text-white'>Price</span>
        </div>
        <div className='header-block'>
          <span className='text-white'>Remove</span>
        </div>

      </div>
     
      {cartItems.map((item) => {
      
        return (

          <Checkout_item key={item.id} cartItem={item} />

        )
      })}
      <span className='total text-white' >Total: {cartTotal}</span>
    </div>
  )
}

export default Checkout