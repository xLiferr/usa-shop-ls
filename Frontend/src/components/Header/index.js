import React from "react";
import {useEffect, useState} from 'react';
import "./style.css";
import logo from "../../images/logo.png";
import carrito from "../../images/carrito.png";
import user from '../../images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import {LoginModal} from '../LoginModal';

export const Header = () =>{

    const [busqueda, setBusqueda] = useState("");

    const [openModal,setOpenModal] = useState(false);

    const handleChange=e=>{
        setBusqueda(e.target.value);

    }


    return(
        <div className = "header-container">
            <div className="header-top">
                <div className="header-logoUSA">
                    <img src = {logo} alt='' className = "header-logo"/>
                </div>
                <div className="header-USA">
                    <h3>USA SHOP</h3>
                </div>
                <div className="header-envios">
                    <span> Productos en Chile son procesados en 2 - 5 días habiles </span>
                </div>
                <div className="containerInput">
                    <input
                        className="form-control inputBuscar"
                        value={busqueda}
                        placeholder="Buscar producto"
                        onChange={handleChange}
                    />
                    <button className="btn btn-success">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
                <button className="openModal"
                    onClick={() => {
                        setOpenModal(true);
                    }}>
                    <img src={user} alt="" className = "bn-modal"/>
                    <div className="bn-info">
                        <h2 >Iniciar sesión</h2>
                    </div>
                </button>
                {openModal && <LoginModal closeModal={setOpenModal}/>}
                <button className="header-carrito">
                    <img src = {carrito} alt='' className = "header-carritoIMG"/>
                    <div className="bn-info">
                        <h2 >Carrito</h2>
                    </div>
                </button>
            </div>
        </div>
    );
}