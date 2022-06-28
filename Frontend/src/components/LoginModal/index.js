import React from "react";
import {useEffect, useState} from 'react';
import "./style.css";
import logo from "../../images/logo.png";
import close from "../../images/close.png";
import {RegisterModal} from '../RegisterModal';




export const LoginModal = ({ closeModal }) => {
  const [openModal,setOpenModal] = useState(false);

  return (
    <div className="lm-bg">
      <div className="lm-border">
        <div className="lm-content">
          <button className="lm-close" onClick={() => closeModal(false)} >
            <img src={close} alt=""/>
          </button>
          <div className="lm-header">
            <div className="lm-header-title"><h3>¡Bienvenido!</h3></div>
            <div className="lm-header-logo"><img src={logo} alt=""/></div>
          </div>
          <form className="lm-form">
            <div className="lm-input">
              <input type="text" required />
              <label>Correo electrónico</label>
            </div>
            <div className="lm-input">
              <input type="password" required />
              <label>Contraseña</label>
            </div>
          </form>
          <div className="lm-buttons">
            <div className="lm-button"><button type="submit">Ingresar</button></div>
            <div className="lm-others">
              <button>¿Olvidaste tu contraseña?</button>
              <button className="openModal"
                    onClick={() => {
                        setOpenModal(true);
                    }}>
                  Registrarse
                </button>
                {openModal && <RegisterModal closeModal={setOpenModal}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}