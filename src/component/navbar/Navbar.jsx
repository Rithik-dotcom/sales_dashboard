import React, { useEffect } from 'react'
import { useContext } from 'react';
import { UserContext } from '../../context/userContext/userContext';
import { Cartcontext } from '../../context/CartContext/Cartcontext'
import { signOutUser } from '../../FireBase_utils/Utils';
import './nav.css'
import CartIcon from '../../customComponents/CartIcon/CartIcon';
import CartDropdown from '../../customComponents/cartDropdown/CartDropdown';
const Navbar = (prop) => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(Cartcontext);

    const signOutHandler = async () => {
        await signOutUser();
        //   setCurrentUser(null);
    };




    return (
        <div>
            <header>
                <div className="px-3 py-2 text-bg-dark border-bottom">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">

                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-app-indicator bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                </svg> */}
                                {/* <div className="fs-4 mb-3"> */}

                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" className="bi bi-app-indicator bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z"></path>
                                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                                </svg>
                                Employee Name
                                {/* </div> */}
                            </a>

                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <a href="/" className="nav-link text-secondary">
                                        {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#home"></use></svg> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house-door-fill bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                                        </svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/dashboard" className="nav-link text-white">
                                        {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#speedometer2"></use></svg> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cast bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                                            <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0" />
                                            <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086z" />
                                        </svg>
                                        Dashboard
                                    </a>
                                </li>

                                <CartIcon />
                              {isCartOpen && <CartDropdown/>}
                                <li>
                                    <a href="/products" className="nav-link text-white">
                                        {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#grid"></use></svg> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-right-circle-fill bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                                            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                                        </svg>
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="/customers" className="nav-link text-white">
                                        {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#people-circle"></use></svg> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg>
                                        Customers
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-3 py-2 border-bottom mb-3">
                    <div className="container d-flex flex-wrap justify-content-center">
                        <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        </form>

                        <div className="text-end">
                            {currentUser ? (<button
                                type="button"
                                onClick={signOutHandler}
                                className="btn btn-light text-dark me-2"
                            >Login-Out
                            </button>)
                                : (<button
                                    type="button"
                                    onClick={() => { window.location.href = '/login' }}
                                    className="btn btn-light text-dark me-2"
                                >Login
                                </button>)
                            }
                            <button onClick={() => window.location.href = '/signup'} type="button" className="btn btn-primary">Sign-up</button>
                        </div>
                    </div>
                </div>
            </header>



        </div>
    )
}

export default Navbar