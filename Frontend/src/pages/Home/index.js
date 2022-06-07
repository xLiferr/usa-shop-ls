import React from "react";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'
import { LoginModal } from '../../components/LoginModal'
import { RegisterModal } from '../../components/RegisterModal'

export const Home = () => {
  
  return (
    <div>
      <Header/>
      <Categorys/>
      {/*<LoginModal/>
      <RegisterModal/>*/}
      <Footer />
    </div>
  );
}
