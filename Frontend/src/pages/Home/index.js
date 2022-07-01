import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
// Components
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'
import { Carousel } from '../../components/Carousel'
import { ProductCard } from "../../components/ProductCard";

import icon from '../../images/delete.png';

export const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts([
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
    ])
    /*
    axios.get('http://localhost:3001/products/all').then((response) => {
      if (response.status === 200) setProducts(response.data);
    }).catch(() => setProducts([]))
    */
  }, [])
    return (
      <>
        <Header />
        <Categorys />
        <div className="home-section">
          <div className="home-title"><h2>Productos Destacados</h2></div>
          <Carousel products={products} />
        </div>
        <div className="home-section">
          <div className="home-title"><h2>Nuevos Productos</h2></div>
          <div className="home-products">
            {products.map((product, key) => {
              return <div className="home-product"><ProductCard key={key} product={product} /></div>
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
