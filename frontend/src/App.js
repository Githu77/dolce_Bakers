import React from 'react';
import './user/styles/app.css';
import './user/styles/pages.css';
import './user/styles/auth.css';
import './user/styles/product.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from "./user/components/navbar.js";
import LandingPage from "./user/components/landingPage.js";
import Home from "./user/components/home.js";
import Menu from "./user/components/menu.js";
import Products from "./user/components/productCard.js";
import Order from "./user/components/order.js";
import Cart from "./user/components/cartItem.js";
import MyHistory from "./user/components/history.js";
import Auth from './user/components/auth.js';


import AdminDashboard from "./admin/components/AdminDashboard.js";
import AdminProducts from "./admin/components/AdminProducts.js";
import AdminAuth from "./admin/components/AdminAuth.js";
import AdminNavbar from "./admin/components/AdminNavbar.js";
import AdminMenu from "./user/components/AdminMenu.js";
import CheckOrder from "./admin/components/CheckOrder.js";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      {isLoggedIn ? 
        (isAdmin ? <Navbar /> : <AdminNavbar />) 
        : <LandingPage setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />}
      
      <Routes>
        <Route path="/auth" element={<Auth setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/products" element={<Products />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/history" element={<MyHistory />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/menu" element={<AdminMenu />} />
        <Route path="/admin/orders" element={<CheckOrder />} />

        <Route path="/admin/signup" element={<AdminAuth setIsAdminLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />

        {isAdmin && (
          <>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/menu" element={<AdminMenu />} />
            <Route path="/admin/orders" element={<CheckOrder />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;