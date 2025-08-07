import React from "react";
import loomLogo from "../assets/footer-loom-logo.png"
import "../style/Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left Column: Logo + Social + Why Loom */}
        <div className="footer-column left-column">
          <img src={loomLogo} alt="loom-logo" className="footer-logo-img" />

          <div className="footer-social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaXTwitter />
            <FaPinterestP />
          </div>

          <div className="footer-why-loom">
            <h3>Why Loom?</h3>
            <p>
              At Loom, we believe men's fashion should be simple, sharp, and
              effortless. Our pieces are made with care — designed for comfort,
              built for style, and tailored for confidence.
            </p>
          </div>
        </div>

        {/* Middle Column: SHOP */}
        <div className="footer-column">
          <h3>SHOP</h3>
          <ul>
            <li>Shirts</li>
            <li>Polo T-Shirt</li>
            <li>Trousers</li>
            <li>Jeans</li>
            <li>Shorts</li>
            <li>T-Shirts</li>
            <li>Cargos</li>
            <li>Co-Ord Set</li>
          </ul>
        </div>

        {/* Right Column: CONTACT SUPPORT */}
        <div className="footer-column">
          <h3>CONTACT SUPPORT</h3>
          <ul>
            <li>Blogs</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Terms of Services</li>
          </ul>
        </div>
      </div>

      <div className="footer-copy">
        © 2025 – Loom Fashion. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
