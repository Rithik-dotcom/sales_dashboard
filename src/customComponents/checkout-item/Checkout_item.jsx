import React, { useContext } from 'react'
import './checkout-item.styles.scss';
import { Cartcontext } from '../../context/CartContext/Cartcontext';

const Checkout_item = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart , addItemToCart , removeItemToCart} = useContext(Cartcontext);

  function clearItemHandler(){
    return clearItemFromCart(cartItem)
  }

  const addItemHandler =()=> addItemToCart(cartItem);
  const removeItemHandler =()=> removeItemToCart(cartItem);
    return (
        <div className='checkout-item-container '>
            <div className='image-container '>
                <img src={imageUrl} alt={`${name}`} className=' img '/>
                </div>
                <span className='name text-white'>{name}</span>
                <span className='quantity text-white'>
                    <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                    <span className='value'>{quantity} </span>
                    <div className='arrow' onClick={addItemHandler} >&#10095;</div>
                    </span>
                <span className='price text-white'>{price}</span>
                <div className='remove-button text-white' onClick={clearItemHandler}>&#10005;</div>
          
        </div>
    )
}

export default Checkout_item