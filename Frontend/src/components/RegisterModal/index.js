import React from "react";
import "./style.css";
import logo from "../../images/logo.png";
import close from "../../images/close.png";

export const RegisterModal = ({closeModal}) => {
    return(
        <div className="rm-bg">
            <div className="rm-border">
                <div className="rm-content">
                    <button className="rm-close" onClick={() => closeModal(false)} >
                        <img src={close} alt=""/>
                    </button>
                    <div className="rm-header">
                        <div className="rm-header-title"><h3>¡Bienvenido!</h3></div>
                        <div className="rm-header-logo"><img src={logo} alt=""/></div>
                    </div>
                    <form className="rm-form">
                        <div className="rm-input">
                            <input type="text" required />
                            <label>Correo electrónico</label>
                        </div>
                        <div className="rm-input">
                            <input type="password" required />
                            <label>Contraseña</label>
                        </div>
                        <div className="rm-input">
                            <input type="password" required />
                            <label>Confirmar contraseña</label>
                        </div>
                        <div className="rm-input">
                            <input type="text" required />
                            <label>Nombre</label>
                        </div>
                        <div className="rm-input">
                            <input type="text" required />
                            <label>Apellidos</label>
                        </div>
                        <div className="rm-input">
                            <input type="text" required />
                            <label>RUT</label>
                        </div>
                        <div className="rm-input">
                            <input type="text" required />
                            <label>Teléfono</label>
                        </div>
                    </form>
                    <div className="rm-buttons">
                        <div className="rm-button"><button type="submit">Registrar</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}