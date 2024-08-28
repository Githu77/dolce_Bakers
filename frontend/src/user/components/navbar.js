import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import Logo from '../images/Logo.png';


export default class Navbar extends Component {

render() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/home"><img style={{ height: '50px' }} className='logo' src={Logo} alt="logo" /></Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/history">Order History</Link>
        </li>
      </ul>
    </nav>
  );
}
}
