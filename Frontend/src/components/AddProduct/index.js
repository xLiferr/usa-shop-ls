import React from "react";
import "./style.css";

export const AddProduct = () => {
  return(
    <div className="ap-content">
      <h3>Agregar un producto</h3>
      <form className="ap-form">
        <div className="ap-form-item">
          <h4>Nombre</h4>
          <input type="text" required />
        </div>
        <div className="ap-form-item">
          <h4>Descripción</h4>
          <textarea placeholder="Escriba la descripción de producto" required/>
        </div>
        <div className="ap-form-item">
          <h4>Categoría</h4>
          <select>
            <option>Algo</option>
          </select>
        </div>
        <div className="ap-form-item">
          <h4>Stock</h4>
          <input type="number" min="1" defaultValue="1" required />
        </div>
        <div className="ap-form-item">
          <h4>Precio</h4>
          <input type="text" required placeholder="Ej: 19.999"/>
        </div>
        <div className="ap-form-item">
          <h4>Fotos</h4>
          <input type="file" multiple required/>
        </div>
        <div className="ap-form-buttons">
          <input type="submit" value="Guardar" />
        </div>
      </form>
    </div>
  )
}