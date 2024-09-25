import React from 'react';
import './styles.css';
import top1 from '../src/Asserts/top1.jpg';
import top2 from '../src/Asserts/top2.jpg';
import top3 from '../src/Asserts/top3.jpg';
import logo from '../src/Asserts/logo.jpg';
import top4 from '../src/Asserts/top4.jpg';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import top5 from '../src/Asserts/top5.jpg';
import L1 from '../src/Asserts/L1.jpg';
import card from '../src/Asserts/Screenshot (145).png';
import mult from '../src/Asserts/multi.jpg';
import youtube from '../src/Asserts/Screenshot (146).png';
import health from '../src/Asserts/Screenshot (147).png';
import bg from '../src/Asserts/Screenshot (148).png';
import tab1 from '../src/Asserts/Screenshot (150).png';

const App = () => {
  return (
    <div className="landing-page">
      <header className="header">
      <div className="sub-header">
        Worldwide Shipping - Duties and Taxes Prepaid
      </div>
      </header>
      <div className="nav-bar">
      
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>

      
        <div className="nav-links">
          <a href="/"><h3>Home</h3></a>
          <a href="/"><h3>Shop by brand</h3></a>
          <a href="/"><h3>Shop by category</h3></a>
          <a href="/"><h3>Meet us CMO</h3></a>
          <a href="/"><h3>Contact us</h3></a>
        </div>

      
        <div className="nav-icons">
          <FaSearch className="icon" />
          <FaUser className="icon" />
          <FaShoppingBag className="icon" />
        </div>
      </div>

    

      <main className="main-content">
        <section className="hero">
        <img src={bg} alt='hero' />
        
        </section>

        <section className="top-brands">
          <h2>Top Brands</h2>
          <div className="brand-list">

            <img src={top1} alt='brand-image' />
            <img src={top2} alt='brand-image' />
            <img src={top3} alt='brand-image' />
            <img src={top4} alt='brand-image' />
            <img src={top5} alt='brand-image' />

          </div>

        </section>

        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-grid">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="product-card">
            <img src={tab1} alt='brand-image' />
               
                <h3 className="product-title">Arterosil HP</h3>
                <p className="product-brand">Allergy Research Group Nattokinase</p>
                <p className="product-price">Rs. 90</p>
                <p className="original-price">Rs. 115.99</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            ))}
          </div>
          <section className="care-plan">
            <img src={card} alt='card' />

          </section>
        </section>

        <section className="proven-bestsellers">
          <h2>Proven Bestsellers</h2>
          <div className="health-concerns-grid">
            {['Multivitamins', 'Omega - 3', 'Nervous system support', 'Gastrointestinal Health', 'Joint Health', 'Household Essentials'].map((category) => (
              <div key={category} className="health-concern-item">
                <img src={mult} alt='brand-image' />

                <p>{category}</p>
              </div>
            ))}
          </div>
          <div className='concern'>
            <img src={health} alt='brand-image' />

          </div>


        </section>



        <section className="deal-of-the-day">
          <h2>Deal of the Day</h2>
          <div className="product-grid">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="product-card">
                           <img src={tab1} alt='brand-image' />

                <h3 className="product-title">Special Deal Product {index}</h3>
                <p className="product-brand">Brand Name</p>
                <p className="product-price">Rs. 79.99</p>
                <p className="original-price">Rs. 99.99</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            ))}
          </div>
        </section>

        <section className="lorem-section">
          <div className="lorem-content">
            <h2>Lorem ipsum heading main patterns</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.</p>
            <button className="cta-button">Lorem ipsum</button>
          </div>
          <div className="lorem-image">
            <img src={L1} alt='l1' />

          </div>
        </section>
        <div className='youtube'>
          <img src={youtube} alt='brand-image' />

        </div>

      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Security & Privacy</a></li>
              <li><a href="#">Why shop with us?</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Secure Website</h3>
            <p>PCI Compliance</p>
            <p>Privacy Policy</p>
            <p>Terms of service</p>
          </div>
          <div className="footer-section">
            <h3>Subscribe</h3>
            <p>Invite customers to join your mailing list.</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Email address" className="email-input" />
              <button type="submit" className="submit-button">Sign up</button>
            </form>
          </div>
          <div className="footer-section">
            <p className="disclaimer">*Statements made on this website have not been evaluated by the U.S. Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease. Information provided by this website or this company is not a substitute for individual medical advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;