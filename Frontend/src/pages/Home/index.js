import React from "react";
import "./style.css";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'
import { Carousel } from '../../components/Carousel'

import icon from '../../images/delete.png';

export const Home = () => {
  
  return (
    <div className="usa-shop">
      <Header/>
      <Categorys/>
      <div className="home-content">
        {/*<Carousel products={[
          {
            id: 1,
            name: "Mochila",
            description: "Mochila para vos",
            images: [icon],
            price: 19990
          },
          {
            id: 1,
            name: "Mochila",
            description: "Mochila para vos",
            images: [icon],
            price: 19990
          },
          {
            id: 1,
            name: "Mochila",
            description: "Mochila para vos",
            images: [icon],
            price: 19990
          },
          {
            id: 1,
            name: "Mochila",
            description: "Mochila para vos",
            images: [icon],
            price: 19990
          },
          {
            id: 1,
            name: "Mochila",
            description: "Mochila para vos",
            images: [icon],
            price: 19990
          },
          {
            id: 1,
            name: "Mochila",
            description: "Mochila para vos",
            images: [icon],
            price: 19990
          },
          {
            id: 1,
            name: "Mochila",
            description: "Mochila para vos",
            images: [icon],
            price: 19990
          }
        ]}/>*/}
      </div>
      <Footer />
    </div>
  );
}
