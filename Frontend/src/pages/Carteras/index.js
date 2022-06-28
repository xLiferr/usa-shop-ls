import React from "react";
import "./style.css";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'

export const Carteras = () => {
    return(
        <div className="Carteras">
            <Header/>
            <Categorys/>
            <div className="car-content">

            </div>
            <Footer/>
        </div>
    )
}