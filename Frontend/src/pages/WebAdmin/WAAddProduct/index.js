import React from "react";
import "./style.css";
// Components
import { SidebarWA } from "../../../components/SidebarWA";
import { Footer } from "../../../components/Footer";
import { ProductForm } from "../../../components/ProductForm";

export const WAAddProduct = () => {
  return(
    <>
      <SidebarWA />
      <div className="wa-ap-page">
        <div className="wa-ap-header">
          <h2>Agregar un producto</h2>
        </div>
        <ProductForm type={"create"}/>
      </div>
      <Footer />
    </>
  )
}