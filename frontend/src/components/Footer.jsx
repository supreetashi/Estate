import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} RealEstatePro. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    marginTop: "auto",
  },
};

export default Footer;
