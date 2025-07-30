import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="newsletter">
        <div className="newsletter-text">
          <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe to Newsletter</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          <h1>SHOP.CO</h1>
          <p>
            We have clothes that suit your style and which you're proud to wear.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>COMPANY</h4>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>HELP</h4>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>FAQ</h4>
            <ul>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>RESOURCES</h4>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
