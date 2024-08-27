import React from 'react';
import './styles/app.css';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { useState } from 'react';


import Navbar from "./components/navbar.js";
import LandingPage from "./components/landingPage.js";
import Home from "./components/home.js";
import Menu from "./components/menu.js";
import Products from "./components/productCard.js";
import Order from "./components/order.js";
import Cart from "./components/cartItem.js";
import MyHistory from "./components/history.js";
import Auth from './components/auth.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <Router>{isLoggedIn ? 
        <Navbar /> : <LandingPage setIsLoggedIn={setIsLoggedIn} />}
          <Routes>
            <Route path="/auth" element={<Auth setIsLoggedIn={setIsLoggedIn} />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/products" element={<Products />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/history" element={<MyHistory />} />
            <Route path="/auth" element={<Auth/>} />
          </Routes>
      </Router>
    );
  }
  
  export default App;