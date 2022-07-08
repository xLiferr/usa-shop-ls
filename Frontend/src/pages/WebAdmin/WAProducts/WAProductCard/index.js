import React, { useEffect, useState } from "react";
import axios from "axios";
import deleteIcon from "../../../../images/delete.png";
import editIcon from "../../../../images/edit.png";

export const WAProductCard = ({ product, editHandler, deleteHandler }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (product.avatar_id !== null) {
      axios.get(`http://localhost:3001/file/${product.avatar_id}`, { responseType: "blob" }).then((response) => {
        if (response.status === 200) setImage(URL.createObjectURL(response.data));
      }).catch(() => setImage(""));
    }
  }, [])
  return (
    <div className="wap-product">
      <div className="wap-product-image"><img src={image} alt="" /></div>
      <div className="wap-product-name"><h3>{product.name}</h3></div>
      <div className="wap-product-price"><h4>${product.price}</h4></div>
      <div className="wap-product-buttons">
        <img src={editIcon} alt="" onClick={() => editHandler(product)} />
        <img src={deleteIcon} alt="" onClick={() => deleteHandler(product)} />
      </div>
    </div>
  )
}