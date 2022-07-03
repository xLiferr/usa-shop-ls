import React from "react";
import "./style.css";
import { Footer } from '../../../components/Footer'
import { Header } from '../../../components/Header'
import { Categorys } from '../../../components/Categorys'
import { ProfileMenu } from "../ProfileMenu";

export const Addresses = () => {
  return (
    <>
      <Header />
      <Categorys />
      <ProfileMenu />
      <div className="addresses-content">
        <h2>Direcciones</h2>
      </div>
      <Footer />
    </>
  )
}