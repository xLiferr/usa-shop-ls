import React from "react";
import "./style.css";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'
import { ProductsSF } from '../../components/ProductsSF'

export const Mochilas = () => {
    return(
        <div className="Mochilas">
            <Header/>
            <Categorys/>
            <ProductsSF catID={8}/>
            <Footer/>
        </div>
    )
}