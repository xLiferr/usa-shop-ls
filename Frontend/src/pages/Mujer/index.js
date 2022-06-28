import React from "react";
import "./style.css";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'

export const Mujer = () => {
    return(
        <div className="Mujer">
            <Header/>
            <Categorys/>
            <div className="muj-content">

            </div>
            <Footer/>
        </div>
    )
}