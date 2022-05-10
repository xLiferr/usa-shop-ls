import React from "react";
import {useEffect, useState} from 'react';
import "./style.css";
import logo from "../../images/logo.png";
import search from "../../images/search.png"
import instagram from "../../images/instagram.png";
import user from '../../images/user.png'

export const Header = () =>{

    const [busqueda, setBusqueda] = useState("");

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
                <div className='header-busqueda'>
                    <input
                        className = 'header-input-buscar'
                        value={busqueda}
                        placeholder='Buscar producto'
                        onChange={handleChange}
                    />
                    <button className="header-button">
                        <img src = {search} alt='' className = "search-logo"/>
                    </button>
                </div>
                <div className="header-info">
                    <a href="" target="_blank" rel="noreferrer">
                        <img src={user} alt="" className = "header-insta"/>
                        <span>Hola!, Inicia sesión</span>
                    </a>
                </div>
            </div>
        </div>
    );
}