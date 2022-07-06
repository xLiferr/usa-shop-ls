import React from "react";
import "./style.css";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'
import { ProductDetail } from '../../components/ProductDetail'

export const Product = () => {
    return(
        <div className="Producto">
            <Header/>
            <Categorys/>
            <ProductDetail/>
            <Footer/>
        </div>
    )
}
