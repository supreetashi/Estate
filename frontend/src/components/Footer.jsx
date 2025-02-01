import React from "react";
import "../assets/styles/Footer.css";
import logo2 from "../assets/images/logo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side - Branding & Vision */}
        <div className="footer-left">
          <img src={logo2} alt="Logo" className="footer-logo" />
          <p className="footer-text">
            Our vision is to make all people <br />
            the best place to live for them.
          </p>
        </div>

        {/* Right Side - Contact & Links */}
        <div className="footer-right">
          <h3 className="footer-title">Information</h3>
          <p className="footer-address">145 New York, FL 5467, USA</p>
          <div className="footer-links">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Homyz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
