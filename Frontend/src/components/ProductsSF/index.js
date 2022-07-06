import React, { useEffect, useState } from "react";
import "./style.css";
import { NavLink } from 'react-router-dom';

export const ProductsSF = (catID) => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(-1);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const categoria = catID;
  const filtro = data.filter((x)=>{
    return x.category.id === categoria.catID
  });

  const cant = filtro.length;

  useEffect(() => {
    const getProducts = async() => {
      setLoading(true);
      const response = await fetch("http://localhost:3001/products/all");
      if(componentMounted){
          setData(await response.clone().json());
          setLoading(false);
      }
      console.log(data);
      return () =>{
          componentMounted = false;
      }
    }

    getProducts();
  }, [])

  const Loading = () => {
    return(
      <>
        Loading....
      </>
    );
  }


  const ShowProducts = () => {  
    return(
      <>
      <div className="products-list">
      {filtro.map((product,i)=>{
        console.log(cant);
        return(
          <>
              <div className="producto" key={i}>
                <a href="#">
                  <div className="producto-img">
                    <img src='' alt={product.name} />
                  </div>
                </a>
                <div className="producto-footer">
                  <h1> {product.name} </h1>
                  <p> {product.gender} </p>
                  <p> {product.category.name} </p>
                  <p className="precio"> ${product.price} </p>
                </div>
                <div className="buttom">
                  <button className="btn">Añadir al carrito</button>
                <div>
                <NavLink to = {`/products/${product.id}`} className="btn">
                  Ver producto
                </NavLink>
              </div>
            </div>
        </div>
          </>
        )
        
      })}
      </div>
      </>
    );
  }
    console.log(cant)
    if(cant === 0){
      return(
        <div className="sin-productos">
          <h1> NO HAY PRODUCTOS </h1>
        </div>
      )
    }

  return (
    <div className="productos">
      {loading ? <Loading/> : <ShowProducts/>}
    </div>
  );
};
