import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import DataContext, { DataProvider } from '../../../context/DataProvider';
import axios from "axios";

export const ProductCardCategory = ({product}) => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;
  const [imageURL, setImageURL] = useState("");
  useEffect(() => {
    if (product.avatar_id !== null) {
      axios.get(`http://localhost:3001/file/${product.avatar_id}`, { responseType: "blob" }).then((response) => {
        setImageURL(URL.createObjectURL(response.data));
      }).catch(() => setImageURL(""))
    }
  }, [])
  return (
    <div className="producto">
      <a href={`/products/${product.id}`}>
        <div className="producto-img">
          <img src={imageURL} alt={product.name} />
        </div>
      </a>
      <div className="producto-footer">
        <h1> {product.name} </h1>
        <p> {product.gender} </p>
        <p> {product.category.name} </p>
        <p className="precio"> ${product.price} </p>
      </div>
      <div className="buttom-add">
        <button className="btn-a" onClick={() => addCarrito(product.id)}>Añadir al carrito</button>
        <div>
          <NavLink to={`/products/${product.id}`} className="btn-v">
            Ver producto
          </NavLink>
        </div>
      </div>
    </div>
  )
}