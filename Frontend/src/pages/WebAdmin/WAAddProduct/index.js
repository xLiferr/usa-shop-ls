import React, { useState } from "react";
import "./style.css";
import { SidebarWA } from "../../../components/SidebarWA";
import { Footer } from "../../../components/Footer";

export const WAAddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(1);
  const [price, setPrice] = useState("");
  return(
    <>
      <SidebarWA />
      <div className="wa-ap-page">
        <div className="wa-ap-header">
          <h3>Agregar un producto</h3>
        </div>
        <div className="wa-ap-content">
          <form className="wa-ap-form">
            <div className="wa-ap-form-item">
              <h4>Nombre</h4>
              <input type="text" onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="wa-ap-form-item">
              <h4>Descripción</h4>
              <textarea placeholder="Escriba la descripción de producto" onChange={(e) => setDescription(e.target.value)} required/>
            </div>
            <div className="wa-ap-form-item">
              <h4>Categoría</h4>
              <select>
                <option>Algo</option>
              </select>
            </div>
            <div className="wa-ap-form-item">
              <h4>Stock</h4>
              <input type="number" min="1" defaultValue="1" onChange={(e) => setStock(e.target.value)} required />
            </div>
            <div className="wa-ap-form-item">
              <h4>Precio</h4> 
              <input type="text" required onChange={(e) => setPrice(e.target.value)} placeholder="Ej: 19.999"/>
            </div>
            <div className="wa-ap-form-item">
              <h4>Fotos</h4>
              <input type="file" multiple required/>
            </div>
            <div className="wa-ap-form-buttons">
              <input type="submit" value="Guardar" />
            </div>
          </form>
          <div className="wa-ap-preview">
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}