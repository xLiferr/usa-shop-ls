import React from "react";
import "./style.css";
import logo from "../../images/logo.png";
import instagram from "../../images/instagram.png";

export const Header = () =>{
    return(
        <div className = "header-container">
            <div className="header-top">
                <div className="header-logoUSA">
                    <img src = {logo} alt='' className = "header-logo"/>
                </div>
                <div className="header-envios">
                    <span> Productos en Chile son procesados en 2 - 5 días habiles </span>
                </div>
                <div className="header-info">
                    <a href="https://www.instagram.com/usa_shopping_ls/" target="_blank" rel="noreferrer">
                        <img src={instagram} alt="" className = "header-insta"/>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </div>
    );
}