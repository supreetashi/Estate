import React from "react";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div class="logo" style={styles.logo}>
        <img src={logo} alt="" />
      </div>
          <div class="menu">
            <ul style={styles.navLinks}>
              <li><a style={styles.a} href="/">Residences</a></li>
              <li><a style={styles.a} href="/residences">Our Value</a></li>
              <li><a style={styles.a} href="/about">Contact Us</a></li>
              <li><a style={styles.a} href="/about">About Us</a></li>
              <li><button href="/contact">Contact</button></li>
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
    padding: "16px 145px",
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
