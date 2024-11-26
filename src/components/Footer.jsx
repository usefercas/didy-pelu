import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <h4>Horario</h4>
          <p>Lunes a Viernes</p>
          <p>10:00-14:00 y 17:00-21:00 horas</p>
          <hr />
          <p>Sábado y Domingo</p>
          <p>Cerrado</p>
        </div>
        <div className="footer-instagram">
          <a href="https://instagram.com/clarityods" target="_blank" rel="noopener noreferrer">
            <img src="insta3.png" alt="Instagram" className="instagram-logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
