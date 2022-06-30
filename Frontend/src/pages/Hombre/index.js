import React from "react";
import "./style.css";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'
import { Productos } from '../../components/Productos'

export const Hombre = () => {
    return(
        <div className="Hombre">
            <Header/>
            <Categorys/>
            <Productos/>
            <Footer/>
        </div>
    )
}