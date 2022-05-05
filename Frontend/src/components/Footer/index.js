import React from "react";
import "./style.css";
import instagram from "../../images/instagram.png";
import contacto from "../../images/contacto.png";
import webpay from "../../images/webpay-logo.png";

export const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="footer-sections">
        <div className="footer-webpay">
          <img src={webpay} alt=""/>
        </div>
        <div className="footer-section">
          <h4>Ayuda</h4>
          <a href="/" target="_blank" rel="noreferrer">
            <img src={contacto} alt="" />
            <span>Formulario de contacto</span>
          </a>
        </div>
        <div className="footer-section">
          <h4>Redes sociales</h4>
          <a href="https://www.instagram.com/usa_shopping_ls/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="footer-copyright"><span>© 2022 | USA-SHOP Todos los derechos reservados</span></div>
    </div>
  );
}