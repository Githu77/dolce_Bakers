import React from 'react';
import './styles/app.css';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

import Navbar from "./components/navbar.js";
import Home from "./components/home";
import Menu from "./components/menu";
import Products from "./components/productCard";
import Order from "./components/order";
import Cart from "./components/cartItem";
import MyHistory from "./components/history";

function App() {
    return (
      <Router>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/products" element={<Products />} />
                <Route path="/order" element={<Order />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/history" element={<MyHistory />} />
            </Routes>
      </Router>
    );
  }
  
  export default App;