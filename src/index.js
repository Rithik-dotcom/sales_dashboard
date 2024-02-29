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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Data>
      <App />
    </Data>
    <BrowserRouter>
      <Routes>

        {/* <Route
          path="/"
          element={
            <Data>
              <App />
            </Data>
          } /> */}

        <Route
          path="/dashboard"
          element={
            <Dashboard />
          } />

        <Route
          path="/orders"
          element={
            <Orders />
          } />

        <Route
          path="/products"
          element={
            <Products />
          } />


        <Route
          path="/customers"
          element={
            <Customers />
          } />

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
