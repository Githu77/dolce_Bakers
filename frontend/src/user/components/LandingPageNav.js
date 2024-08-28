import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/app.css';
import Logo from '../images/Logo.png';


function Navbar() {

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/"><img style={{ height: '50px' }} className='logo' src={Logo} alt="logo" /></Link>
        </li>
        <li>
          <Link to="#about-us" onClick={(e) => scrollToSection(e, 'about-us')}>About Us</Link>
        </li>
        <li>
          <Link to="#menu" onClick={(e) => scrollToSection(e, 'menu')}>Menu</Link>
        </li>
        <li>
          <Link to="#products" onClick={(e) => scrollToSection(e, 'products')}>Products</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
