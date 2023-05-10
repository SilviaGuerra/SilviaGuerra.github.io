import React from "react";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      © {new Date().getFullYear()} - Silvia Guerra Hernández - Frontend
      developer
    </div>
  );
};

export default Footer;
