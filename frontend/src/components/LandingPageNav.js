import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

export default class Navbar extends Component {

render() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
      </ul>
    </nav>
  );
}
}
