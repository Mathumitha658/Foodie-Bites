import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">Foodie Bites</h2>
          <p>
            Serving delicious meals with premium ingredients,
            perfect recipes, and hygienic cooking practices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/meals">Meals</Link></li>
            <li><Link to="/trending">Trending Recipes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Our Menu</h3>
          <ul>
            <li>Veg Meals</li>
            <li>Non-Veg Meals</li>
            <li>Special Combos</li>
            <li>Desserts</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Chennai, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@foodiebites.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Foodie Bites. Crafted with ❤️ & Gold
      </div>
    </footer>
  );
};

export default Footer;
