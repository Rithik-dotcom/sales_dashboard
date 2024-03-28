import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// import Dashboard from './component/dashboard/Dashboard';
// import Orders from './component/orders/Orders';
// import Customers from './component/customers/Customers';
// import Login from './loginComponent/login/Login';
// import SignUp from './loginComponent/signUp/SignUp';
import { UserProvider } from '../src/context/userContext/userContext'
// import ShopPage from './pages/ShopPage';
import { CategoriesProvider } from './context/productContext/ProductContext';
// import Navbar from './component/navbar/Navbar';
import { CartProvider } from './context/CartContext/Cartcontext';
// import Checkout from './component/checkout/Checkout';
// import Home from './pages/Home';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>



    <UserProvider>
      <CategoriesProvider>
        <CartProvider >
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>

  </div>

);

reportWebVitals();
