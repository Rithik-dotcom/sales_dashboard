import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './component/dashboard/Dashboard';
import Orders from './component/orders/Orders';
import Customers from './component/customers/Customers';
import Login from './loginComponent/login/Login';
import SignUp from './loginComponent/signUp/SignUp';
import { UserProvider } from '../src/context/userContext/userContext'
import ShopPage from './pages/ShopPage';
import { ProductProvider } from './context/productContext/ProductContext';
import Navbar from './component/navbar/Navbar';
import { CartProvider } from './context/CartContext/Cartcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>


    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
         <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/products" element={<ShopPage />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </div>

);

reportWebVitals();
