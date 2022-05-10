import React from "react";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'
{/*import { LoginModal } from '../../components/LoginModal'*/}

export const Home = () => {
  
  return (
    <div>
      <Header/>
      <Categorys/>
      {/*<LoginModal/>*/}
      <Footer />
    </div>
  );
}
