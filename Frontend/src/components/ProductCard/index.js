import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ProductCard = ({ product }) => {
  const [imageURL, setImageURL] = useState("");
  useEffect(() => {
    if (product.avatar_id !== null) {
      axios.get(`http://localhost:3001/file/${product.avatar_id}`, { responseType: "blob" }).then((response) => {
        setImageURL(URL.createObjectURL(response.data));
      }).catch(() => setImageURL(""))
    }
  }, [])

  return (
    <Link className="prodCard-bg" to={`/products/${product.id}`}>
      <div className="prodCard-section">
        <img src={imageURL} alt="" />
      </div>
      <div className="prodCard-section">
        <h3>{product.name}</h3>
      </div>
      <div className="prodCard-section">
        <h2>${product.price}</h2>
      </div>
    </Link>
  );
}