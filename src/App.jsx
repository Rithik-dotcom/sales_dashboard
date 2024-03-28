import './App.css';
import React, { useContext, useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './component/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './loginComponent/login/Login';
import ShopPage from './pages/ShopPage';
import Dashboard from './component/dashboard/Dashboard';
import Orders from './component/orders/Orders';
import Customers from './component/customers/Customers';
import SignUp from './loginComponent/signUp/SignUp';
import Checkout from './component/checkout/Checkout';
import { UserContext } from './context/userContext/userContext';
import { CartProvider, Cartcontext } from './context/CartContext/Cartcontext';

function App() {
  const { currentUser } = useContext(UserContext);
  // const [login, setLogin] = useState(false);
 

  return (
    <div>
      <Navbar />

      {currentUser !== null ? (
        <>
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route index element={<ShopPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<ShopPage />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<Checkout />} />

          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )}

    </div>
  );
}

export default App;
