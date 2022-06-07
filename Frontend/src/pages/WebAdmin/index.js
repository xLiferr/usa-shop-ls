import React, { useState, useMemo } from "react";
import "./style.css";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Categorys } from "../../components/Categorys";
import { ProductCard } from "../../components/ProductCard";
import { AddProduct } from "../../components/AddProduct";

export const WebAdmin = () => {
  const [show, setShow] = useState(-1);



const modifyProduct = () => {

}
const deleteProduct = () => {

}
const createReport = () => {

}

  const showContent = useMemo(() => {
    switch (show) {
      case 1:
        return <AddProduct />;
      case 2:
        return modifyProduct();
      case 3:
        return deleteProduct();
      case 4:
        return createReport();    
      default:
        break;
    }
  }, [show])
  return (
    <div>
      <Header/>
      <Categorys/>
      {/*<LoginModal/>*/}
      <div className="wb-content">
        <div className="wb-menu">
          <h2>Web Admin</h2>
          <button className="wb-button" onClick={() => setShow(1)}>Agregar producto</button>
          <button className="wb-button" onClick={() => setShow(2)}>Modificar producto</button>
          <button className="wb-button" onClick={() => setShow(3)}>Eliminar producto</button>
          <button className="wb-button" onClick={() => setShow(4)}>Generar reporte de ventas</button>
        </div>
        <div className="wb-show">
          {showContent}
        </div>
      </div>
      <Footer />
    </div>
  );
}