import React from 'react'
import "./style.css";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'
import { Carrito } from '../../components/Carrito';

export const Cart = () => {
  return (
    <>
        <Header />
        <Categorys />
        <Carrito />
        <Footer />
    </>
  )
}
