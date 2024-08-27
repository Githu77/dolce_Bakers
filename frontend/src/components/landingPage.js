import React from 'react';
import { Link } from 'react-router-dom';
import LandingPageNav from './LandingPageNav';

import homesImg from '../images/homes.jpg';
import burgerImg from '../images/burger.jpg';
import bread2 from '../images/bread2.jpg';
import cookie from '../images/cookie.jpg';
import pie from '../images/pie2.jpg';
import cake from '../images/cakee.jpg';
import croissant from '../images/croissant.jpg';


function LandingPage({ setIsLoggedIn }) {
  return (
    <>
      <LandingPageNav />
    <div className="forhomedash">
  <div className="dashone">
  <img src={homesImg} alt="bakings" />
  </div>
  <div className="dashtwo">
    <div className="bread">
    <img src={burgerImg} alt="burger" />
    </div>
    <p>
      Welcome to our bakery, where every bite is a celebration of flavor and
      craftsmanship! We take pride in using only the finest ingredients to
      create a delightful array of freshly baked goods, from artisanal breads
      to decadent pastries.
    </p>
  </div>
</div>
<div id='about-us' className="about-us">
  <div className="container">
    <h1>About Us</h1>
    <div className="content">
      <p>Welcome to <span className="highlight">Dolce Bakers</span>!</p>
      <p>At Dolce Bakers, we're passionate about crafting delightful and delicious baked goods that bring a touch of sweetness to your life. Nestled in the heart of our community, our bakery is more than just a place to buy bread and pastries—it's a warm and inviting space where the aroma of freshly baked treats greets you at the door and every bite is a celebration of flavor.</p>
      <p>Our journey began with a simple idea: to create a bakery that offers the perfect blend of tradition and innovation. We use only the finest, locally-sourced ingredients to ensure that every product is of the highest quality. From classic breads and pastries to innovative cakes and cookies, everything we bake is made with love and a commitment to excellence.</p>
      <p>Whether you're stopping by for your morning coffee and a croissant, picking up a loaf of artisan bread for dinner, or ordering a custom cake for a special occasion, you'll find that our dedication to quality and customer satisfaction is at the heart of everything we do.</p>
      <p>At Dolce Bakers, we believe that baking is an art form, and our team of skilled bakers is constantly experimenting with new recipes and techniques to bring you a unique and unforgettable experience. We take pride in every item that leaves our oven, and we’re always eager to share our latest creations with you.</p>
      <p>Thank you for choosing Dolce Bakers. We look forward to serving you and being a part of your sweetest moments.</p>
    </div>
  </div>
</div>

<div className="home-gallery">
  <div id='products' className="gallery">
    <h1>Our products</h1>
    <div className="for-samples">
      <div className="samples1">
        <article>
          <h2>Our bread is wholesome</h2>
          <p>
            Using traditional techniques and the highest quality ingredients.
            From crusty sourdough to soft, fluffy brioche,
            each loaf is a labor of love, designed to elevate your dining experience.
          </p>
          <div className="samples1-child">
            <img src={bread2} alt="bread" />
            <p>
              Using traditional techniques and the highest quality ingredients.
              From crusty sourdough to soft.
              <button className="flat-button" type="submit">Find more</button>
            </p>
          </div>
        </article>
      </div>

      <div className="samples2">
        <div className="samples2-child">
          <article>
            <img src={croissant} alt="cupcake" />
            <h4>Delectable Pastries</h4>
            <span>Indulge in the sweet and savory delights of our delectable pastries. <span className="flat-button">Find More</span></span>
          </article>
        </div>
        <div className="samples2-child">
          <article>
            <img src={cake} alt="cupcake" />
            <h4>Gourmet Cakes</h4>
            <span>Celebrate life’s sweetest moments with our gourmet cakes. <span className="flat-button">Find More</span></span>
          </article>
        </div>
        <div className="samples2-child">
          <article>
            <img src={cookie} alt="cupcake" />
            <h4>Cookies</h4>
            <span>Satisfy your sweet tooth with our handcrafted cookies, baked to perfection. <span className="flat-button">Find More</span></span>
          </article>
        </div>
        <div className="samples2-child">
          <article>
            <img src={pie} alt="cupcake" />
            <h4>Savory pies</h4>
            <span>Experience the comforting flavors of our savory pies and quiches, perfect for any meal. <span className="flat-button">Find More</span></span>
          </article>
        </div>
      </div>
    </div>

    <h1 style={{ textAlign: 'center' }}>Why Choose us:</h1>

    <div className="for-whyus">
      <div className="whyus">
        <img src="homecake.jpg" alt="a chef" />
        <article>
          <h3>Freshly Baked Every Day</h3>
          <p>
            At our bakery, freshness is our promise. We bake all our products daily, using only the finest ingredients to ensure that every bite is as fresh as possible.
            From the first morning loaf to the last evening treat, you can taste the difference that freshness makes.
          </p>
        </article>
      </div>
      <div className="whyus">
        <img src="ingredients.jpg" alt="a chef" />
        <article>
          <h3>Fresh Ingredients</h3>
          <p>
            We believe in supporting our community and delivering the best quality to our customers. That’s why we source our ingredients locally whenever possible.
            By partnering with local farmers and suppliers, we ensure our baked goods are not only delicious but also sustainable and eco-friendly.
          </p>
        </article>
      </div>
      <div className="whyus">
        <img src="chef1.png" alt="a chef" />
        <article>
          <h3>Passionate Bakers</h3>
          <p>
            Our team of skilled bakers brings passion and creativity to every product we make. We’re not just about baking; we’re about making memories.
            With a dedication to quality and a love for the craft, we add a personal touch to everything we create, making sure each bite feels like home.
          </p>
        </article>
      </div>
      <div className="whyus">
        <img src="party.png" alt="a chef" />
        <article>
          <h3>Custom Creations</h3>
          <p>
            Every celebration deserves a special treat, and our bakery is here to make it happen. Whether you’re planning a birthday, wedding, or any other event,
            we offer custom cakes, pastries, and more that are tailored to your taste and theme. Our creations are as unique as your special day.
          </p>
        </article>
      </div>
    </div>
  </div>
</div>

<div id='menu' className="menu">
  <h1>Our Menu</h1>
  <nav className="menu-nav">
    <ul>
      <li><a href="#bread" onClick={() => showSection('bread')}>Bread</a></li>
      <li><a href="#cakes" onClick={() => showSection('cakes')}>Cakes</a></li>
      <li><a href="#pastries" onClick={() => showSection('pastries')}>Pastries</a></li>
    </ul>
  </nav>
  <section id="bread">
    <div className="menu-host">
      <div className="menu-item">
        <img src="breads.jpg" alt="bread" />
        <div className="menu-item-details">
          <h3>Bread</h3>
          <p>The freshest of breads</p>
          <p className="price">$0.50</p>
        </div>
      </div>
      <div className="menu-item">
        <img src="burger.jpg" alt="Croissant" />
        <div className="menu-item-details">
          <h3>Croissant</h3>
          <p>Flaky and buttery croissant</p>
          <p className="price">$3.50</p>
        </div>
      </div>
      <div className="menu-item">
        <img src="burger.jpg" alt="Croissant" />
        <div className="menu-item-details">
          <h3>Croissant</h3>
          <p>Flaky and buttery croissant</p>
          <p className="price">$3.50</p>
        </div>
      </div>
      <div className="menu-item">
        <img src="burger.jpg" alt="Croissant" />
        <div className="menu-item-details">
          <h3>Croissant</h3>
          <p>Flaky and buttery croissant</p>
          <p className="price">$3.50</p>
        </div>
      </div>
      <div className="menu-item">
        <img src="burger.jpg" alt="Croissant" />
        <div className="menu-item-details">
          <h3>Croissant</h3>
          <p>Flaky and buttery croissant</p>
          <p className="price">$3.50</p>
        </div>
      </div>
    </div>
  </section>
  <section id="cakes" style={{ display: 'none' }}>
    <div className="menu-host">
      <div className="menu-item">
        <img src="cake.jpg" alt="cake" />
        <div className="menu-item-details">
          <h3>Cake</h3>
          <p>The freshest of breads</p>
          <p className="price">$4.00</p>
        </div>
      </div>
      <div className="menu-item">
        <img src="cake.jpg" alt="cake" />
        <div className="menu-item-details">
          <h3>Cake</h3>
          <p>The freshest of breads</p>
          <p className="price">$4.00</p>
        </div>
      </div>
      <div className="menu-item">
        <img src="cake.jpg" alt="cake" />
        <div className="menu-item-details">
          <h3>Cake</h3>
          <p>The freshest of breads</p>
          <p className="price">$4.00</p>
        </div>
      </div>
      <div className="menu-item">
        <img src="cake.jpg" alt="cake" />
        <div className="menu-item-details">
          <h3>Cake</h3>
          <p>The freshest of breads</p>
          <p className="price">$4.00</p>
        </div>
      </div>
    </div>
  </section>
  <section id="pastries" style={{ display: 'none' }}>
    <div className="menu-host">
      <div className="menu-item">
        <img src="pastry.jpg" alt="pastry" />
        <div className="menu-item-details">
          <h3>Pastry</h3>
          <p>The freshest of breads</p>
          <p className="price">$2.00</p>
        </div>
      </div>
      <div className="menu-item">
        <img src="pastry.jpg" alt="pastry" />
        <div className="menu-item-details">
          <h3>Pastry</h3>
          <p>The freshest of breads</p>
          <p className="price">$2.00</p>
        </div>
      </div>
      <div className="menu-item">
        <img src="pastry.jpg" alt="pastry" />
        <div className="menu-item-details">
          <h3>Pastry</h3>
          <p>The freshest of breads</p>
          <p className="price">$2.00</p>
        </div>
      </div>
      <div className="menu-item">
        <img src="pastry.jpg" alt="pastry" />
        <div className="menu-item-details">
          <h3>Pastry</h3>
          <p>The freshest of breads</p>
          <p className="price">$2.00</p>
        </div>
      </div>
    </div>
  </section>
</div>
<h1>Customer Reviews</h1>
        <div class="reviews">
            <div class="review-host">
                <article>
                    <h4>Talisman Mkunje</h4>
                    <p>
                        Their products are a cut above the rest, give it a try. They blew my mind, I'm
                        sure they'll blow yours trust me.
                    </p>
                </article>
            </div>
            <div class="review-host">
                <article>
                    <h4>Talisman Mkunje</h4>
                    <p>
                        Their products are a cut above the rest, give it a try. They blew my mind, I'm
                        sure they'll blow yours trust me.
                    </p>
                </article>
            </div>
            <div class="review-host">
                <article>
                    <h4>Talisman Mkunje</h4>
                    <p>
                        Their products are a cut above the rest, give it a try. They blew my mind, I'm
                        sure they'll blow yours trust me.
                    </p>
                </article>
            </div>
        </div>

  

        


        <h1>Our Working Hours</h1>
         <div class="days">
            <div class="day">
                <span class="day-name">Monday:</span>
                <span class="time">8:00 AM - 6:00 PM</span>
            </div>
            <div class="day">
                <span class="day-name">Tuesday:</span>
                <span class="time">8:00 AM - 6:00 PM</span>
            </div>
            <div class="day">
                <span class="day-name">Wednesday:</span>
                <span class="time">8:00 AM - 6:00 PM</span>
            </div>
            <div class="day">
                <span class="day-name">Thursday:</span>
                <span class="time">8:00 AM - 6:00 PM</span>
            </div>
            <div class="day">
                <span class="day-name">Friday:</span>
                <span class="time">8:00 AM - 8:00 PM</span>
            </div>
            <div class="day">
                <span class="day-name">Saturday:</span>
                <span class="time">9:00 AM - 4:00 PM</span>
            </div>
            <div class="day">
                <span class="day-name">Sunday:</span>
                <span class="time">Closed</span>
            </div>
         </div>
    <footer>
    <div class="footer-row">
        <h4>About Us</h4>
        <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Mission & Values</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
        </ul>
    </div>
    <div class="footer-row">
        <h4>Products</h4>
        <ul>
            <li><a href="#">Bread</a></li>
            <li><a href="#">Pastries</a></li>
            <li><a href="#">Cakes</a></li>
            <li><a href="#">Seasonal Specials</a></li>
        </ul>
    </div>
    <div class="footer-row">
        <h4>Customer Service</h4>
        <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
        </ul>
    </div>
    <div class="footer-row">
        <h4>Connect with Us</h4>
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Newsletter</a></li>
        </ul>
    </div>
</footer>
</>
  );
}

export default LandingPage;