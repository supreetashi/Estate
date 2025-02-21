import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div className="logo" style={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <ul style={styles.navLinks}>
          <li><Link style={styles.a} to="/">Home</Link></li>
          <li><Link style={styles.a} to="/residences">Residences</Link></li>
          <li><Link style={styles.a} to="/about">About Us</Link></li>
          <li><Link style={styles.a} to="/contact">Contact Us</Link></li>
          <li><button><Link style={styles.a} to="/contact">Contact</Link></button></li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#000",
    color: "#fff",
    // padding: "16px 145px",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    gap: "35px",
    color: "#fff",
    fontFamily: "poppins, sans-serif",
  },
  a: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Navbar;
