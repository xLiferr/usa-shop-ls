import React from "react";
import "./style.css";
// Components
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'
import errorIcon from '../../images/error-404.png';

export const NotFound = () => {
  return (
    <>
      <Header />
      <Categorys />
      <div className="notfound-content">
        <div className="notfound-image"><img src={errorIcon} alt="" /></div>
        <div className="notfound-text">
          <h2>Página no encontrada</h2>
          <p>Lo sentimos, pero la página que buscas no existe.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
