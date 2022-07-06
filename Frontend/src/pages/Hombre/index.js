import React from "react";
import "./style.css";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'
import { Products } from '../../components/Productos'

export const Hombre = () => {
    return (
        <>
            <Header />
            <Categorys />
            <Products generoFiltro={'Hombre'} />
            <Footer />
        </>
    )
}