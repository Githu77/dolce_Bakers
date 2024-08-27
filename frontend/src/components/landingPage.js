import React from 'react';
import { Link } from 'react-router-dom';
import LandingPageNav from './LandingPageNav';

function LandingPage({ setIsLoggedIn }) {
  return (
    <div className="landing-page">
      <LandingPageNav />
      <div className="landing-page-content">
        <section id="section1">
          <h2>Welcome to Our Bakery</h2>
          <p>Enjoy our fresh baked goods made with love.</p>
        </section>
        <section id="section2">
          <h2>Our Story</h2>
          <p>Learn more about our journey and our passion for baking.</p>
        </section>
        <section id="section3">
          <h2>Specialties</h2>
          <p>Discover our wide range of delicious treats.</p>
        </section>
        <section id="section4">
          <h2>Get Started</h2>
          <p><Link to="/auth">Sign Up or Login</Link> to place your first order.</p>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
