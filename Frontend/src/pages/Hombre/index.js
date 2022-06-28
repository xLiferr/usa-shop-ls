import React from "react";
import "./style.css";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'

export const Hombre = () => {
    return(
        <div className="Hombre">
            <Header/>
            <Categorys/>
            <div className="hom-content">

            </div>
            <Footer/>
        </div>
    )
}