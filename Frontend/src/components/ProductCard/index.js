import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ProductCard = ({product}) => {
  return (
    <Link className="prodCard-bg" to={`/products/${product.id}`}>
      <div className="prodCard-section">
        <img src='' alt="" />
      </div>
      <div className="prodCard-section">
        <h3>{product.name}</h3>
      </div>
      <div className="prodCard-section">
        <p>{product.description}</p>
      </div>
      <div className="prodCard-section">
        <h2>${product.price}</h2>
      </div>
    </Link>
  );
}