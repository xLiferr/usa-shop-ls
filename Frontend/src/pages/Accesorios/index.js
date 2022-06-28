import React from "react";
import "./style.css";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'

export const Accesorios = () => {
    return(
        <div className="Accesorios">
            <Header/>
            <Categorys/>
            <div className="acc-content">

            </div>
            <Footer/>
        </div>
        
    )
}