import React, { useEffect, useState, useContext } from 'react';
import "./style.css";
import { useParams } from 'react-router';
import MGN from "../../images/MGN.jpg";
import DataContext, { DataProvider } from '../../context/DataProvider';
import axios from "axios";



export const ProductDetail = () => {
  const {id} = useParams();
  const [product,setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;
  const [imageURL, setImageURL] = useState("");
  
  useEffect(() => {
      const getProduct =  async () => {
          setLoading(true);
          const response = await fetch(`http://localhost:3001/products/${id}`);
          setProduct(await response.json());
          setLoading(false);
      }
      getProduct();
  }, [])


  const Loading = () => {
      return(
        <>
          Loading....
        </>
      );
  }
  useEffect(() => {
    if (product.avatar_id !== null) {
      axios.get(`http://localhost:3001/file/${product.avatar_id}`, { responseType: "blob" }).then((response) => {
        setImageURL(URL.createObjectURL(response.data));
      }).catch(() => setImageURL(""))
    }
  }, [])


  const ShowProduct = () => {


    return(
      <div className='container'>
        <div className='aa'>
          <img src= {imageURL} alt={product.name}/>
        </div>
        <div className='bb'>
          <h3>{product.name}</h3>
          <h1> CÓDIGO: {product.id}</h1>
          <h2> PRECIO: $ {product.price}</h2>
          <h2> STOCK: {product.stock}</h2>
          <div className='btn-cart'>
            <button className='btn-cart-a' onClick={() => addCarrito(product.id)}> Añadir al carrito </button>
          </div>
        </div>
      </div>
    )
  } 
    
    



  return (
    <div className='ver-producto'>
          {loading ? <Loading/> : <ShowProduct/>}
    </div>
  )
}
