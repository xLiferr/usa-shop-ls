import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "../../hooks/useAuth";
import "./style.css";
// Icons
import logo from "../../images/logo.png";
import carrito from "../../images/carrito.png";
import userIcon from '../../images/clients.png'
import logoutIcon from "../../images/log-out.png";
import webAdminBtn from "../../images/admin.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import { LoginModal } from '../LoginModal';
import { RegisterModal } from '../RegisterModal';

export const Header = () => {
    const [busqueda, setBusqueda] = useState("");
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const { user, logout } = useAuth();
    const handleChange = e => {
        setBusqueda(e.target.value);
    }

    const hasUser = () => {
        return (
            <div className="header-buttons">
                <Link className="header-button" to="/mi-cuenta">
                    <img src={userIcon} alt="" className="bn-modal" />
                    <div className="bn-info">
                        <h3>Mi Cuenta</h3>
                    </div>
                </Link>
                {user.role.includes("Administrador") ? (
                    <Link className="header-button" to="/web-admin">
                        <img src={webAdminBtn} alt="" className="bn-modal" />
                        <div className="bn-info">
                            <h3>Web admin</h3>
                        </div>
                    </Link>
                ) : ("")}
                <Link className="header-button" to="/carrito">
                    <img src={carrito} alt='' className="header-carritoIMG" />
                </Link>
                <button className="header-button" onClick={async () => await logout()}>
                    <img src={logoutIcon} alt="Cerrar sesión" className="bn-modal" />
                </button>
            </div>
        )
    }

    const hasNoUser = () => {
        return (
            <div className="header-buttons">
                <button className="header-button"
                    onClick={() => {
                        setOpenLogin(true);
                    }}>
                    <img src={userIcon} alt="" className="bn-modal" />
                    <div className="bn-info">
                        <h3>Hola!, Inicia sesión</h3>
                    </div>
                </button>
            </div>
        )
    }

    const showButtons = useMemo(() => {
        if (user != null) return hasUser();
        else return hasNoUser();
    }, [user])

    return (
        <div className="header-top">
            <div className="header-info">
                <div className="header-logoUSA">
                    <Link to="/"><img src={logo} alt='' className="header-logo" /></Link>
                </div>
                <div className="header-USA">
                    <h3>USA SHOP</h3>
                </div>
                <div className="header-envios">
                    <span> Productos en Chile son procesados en 2 - 5 días habiles </span>
                </div>
            </div>
            <div className="header-containerInput">
                <input
                    className="form-control inputBuscar"
                    value={busqueda}
                    placeholder="Buscar producto"
                    onChange={handleChange}
                />
                <button className="btn btn-success">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            {showButtons}
            {openLogin && <LoginModal setOpenLogin={setOpenLogin} setOpenRegister={setOpenRegister} />}
            {openRegister && <RegisterModal setOpenRegister={setOpenRegister} />}
        </div >
    );
}