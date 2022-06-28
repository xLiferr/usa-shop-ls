import React from "react";
import "./style.css";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'

export const Mochilas = () => {
    return(
        <div className="Mochilas">
            <Header/>
            <Categorys/>
            <div className="moc-content">

            </div>
            <Footer/>
        </div>
    )
}