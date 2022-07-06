import React from "react";
import "./style.css";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'
import { ProductsSF } from '../../components/ProductsSF'

export const Accesorios = () => {
    return(
        <div className="Accesorios">
            <Header/>
            <Categorys/>
            <ProductsSF catID={2}/>
            <Footer/>
        </div>
        
    )
}