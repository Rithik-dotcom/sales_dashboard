import React, { useContext } from 'react';
import './cart-dropdown.styles.scss';
import { ToggleContext } from '../../context/ToggleContext/ToggleContext';
import CartIcon from '../CartIcon/CartIcon';


const CartDropdown = () => {
    const {isCartOpen,setIsCartOpen} = useContext(ToggleContext);
    const toggleHandler = ()=>setIsCartOpen(!isCartOpen)
  return (
    <div className='cart-dropdown-container ' onClick={toggleHandler} >
       
        <div className='cart-items'>
        <button type="button"  className="btn btn-secondary">Go to Checkout</button>
        </div>
    </div>
  )
}

export default CartDropdown