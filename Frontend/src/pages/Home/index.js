import React from "react";
import "./style.css";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'
import { LoginModal } from '../../components/LoginModal'
import { RegisterModal } from '../../components/RegisterModal'

export const Home = () => {
  
  return (
    <div className="usa-shop">
      <Header/>
      <Categorys/>
      <div className="home-content">

      </div>
      {/*<LoginModal/>
      <RegisterModal/>*/}
      <Footer />
    </div>
  );
}
