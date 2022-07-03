import React from "react";
import "./style.css";
import { Footer } from '../../../components/Footer'
import { Header } from '../../../components/Header'
import { Categorys } from '../../../components/Categorys'
import { ProfileMenu } from "../ProfileMenu";

export const Shopping = () => {
  return (
    <>
      <Header />
      <Categorys />
      <ProfileMenu />
      <div className="shopping-content">
        <h2>Compras</h2>
      </div>
      <Footer />
    </>
  )
}