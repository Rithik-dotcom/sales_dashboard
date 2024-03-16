import React, { useContext } from 'react'
import './cart-dropdown.styles.scss'
import { Cartcontext } from '../../context/CartContext/Cartcontext'
import CartItem from '../CartItem/CartItem'
import { useNavigate } from 'react-router-dom'




const CartDropdown = () => {

  //creating navigation using use navigate

  const navigate = useNavigate();

  function goToCheckoutHandler(){
    navigate('/checkout',true)
  }

  //using cart context to print added product in dropdown

  const { cartItems } = useContext(Cartcontext);

  return (
    <div className='cart-dropdown-container'>
  
      <div className='cart-items ' >
        { cartItems.map((item) => (
        
            <CartItem key={item.id} cartItem={item} />
        ))
        }
      </div>
      <button type="button" class="btn btn-outline-light" onClick={goToCheckoutHandler} style={{fontWeight: "bold"}}>Check-Out   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
  <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
</svg></button>
    </div>
  )
}

export default CartDropdown