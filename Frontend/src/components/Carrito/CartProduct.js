import React, { useState, useEffect } from 'react'
import axios from 'axios';
import 'boxicons';
export const CartProduct = ({ product, handleDelete, suma, resta }) => {
  const [imageURL, setImageURL] = useState("");
  useEffect(() => {
    if (product.avatar_id !== null) {
      axios.get(`http://localhost:3001/file/${product.avatar_id}`, { responseType: "blob" }).then((response) => {
        setImageURL(URL.createObjectURL(response.data));
      }).catch(() => setImageURL(""))
    }
  }, [])
  return (
    <div className='carrito-item' key={product.id}>
      <img src={imageURL} alt='' />
      <div>
        <h3> {product.name} </h3>
        <p className='price'>${product.price}</p>
      </div>
      <div className='carrito-arrows'>
        <box-icon name='up-arrow' type='solid' onClick={() => suma(product.id)}></box-icon>
        <p className='cantidad'> {product.stock}</p>
        <box-icon name='down-arrow' type='solid' onClick={() => resta(product.id)}></box-icon>
      </div>
      <div className='remove-item' onClick={() => handleDelete(product.id)}>
        <box-icon name='trash'></box-icon>
      </div>
    </div>
  )
}