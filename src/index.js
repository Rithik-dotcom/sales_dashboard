import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Data from './component/Data';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './component/dashboard/Dashboard';
import Orders from './component/orders/Orders';
import Products from './component/products/Products';
import Customers from './component/customers/Customers';
import Login from './loginComponent/login/Login';
import SignUp from './loginComponent/signUp/SignUp';
import {UserProvider} from '../src/context/userContext/userContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <div>
     
      
      <BrowserRouter>
      <UserProvider>
        <App/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
 
);

reportWebVitals();
