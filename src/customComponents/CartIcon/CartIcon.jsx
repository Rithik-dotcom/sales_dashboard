import React from 'react'
import { ToggleContext } from '../../context/ToggleContext/ToggleContext';
import { useContext } from 'react';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(ToggleContext);
    const toggleHandler = () => setIsCartOpen(!isCartOpen)
    return (
        <div className='cart-dropdown-container ' onClick={toggleHandler} >

            <button type="button"  className="btn btn-primary position-relative orderBtn">
                <a href="#" className="nav-link text-white">
                    {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#table"></use></svg> */}

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag-check-fill bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                        <path fill="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                    </svg>
                    Orders
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        0
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </a>
                <div className='cart-items'>
                    <button type="button" className="btn btn-secondary">Go to Checkout</button>
                </div>
            </button>


        </div>
    )
}

export default CartIcon