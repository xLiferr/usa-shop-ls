import React, { useEffect, useState } from "react";
import "./style.css";
import MGN from "../../images/MGN.jpg";

export const Productos = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
      const getProducts = async() => {
          setLoading(true);
          const response = await fetch("http://fakestoreapi.com/products");
          if(componentMounted){
              setData(await response.clone().json());
              setFilter(await response.json());
              setLoading(false);
              console.log(filter);
          }

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

  const filterProduct = (cat) => {
    const updateList = data.filter((x)=>x.category === cat);
    setFilter(updateList);
  }

  const ShowProducts = () => {
    return(
      <>
      <div className="buttons-filter">
        <button className="btn-filtro" onClick={() => filterProduct("men's clothing")}>Polerones</button>
        <button className="btn-filtro" onClick={() => filterProduct("women's clothing")}>Poleras</button>
        <button className="btn-filtro" onClick={() => filterProduct("jewelery")}>Ropa interior</button>
      </div>
      <div className="products-list">
      {filter.map((product)=>{
        return(
          <>
              <div className="producto">
                <a href="#">
                  <div className="producto-img">
                    <img src={product.image} alt={product.title} />
                  </div>
                </a>
                <div className="producto-footer">
                  <h1> {product.title} </h1>
                  <p> {product.category} </p>
                  <p className="precio"> ${product.price} </p>
                </div>
                <div className="buttom">
                  <button className="btn">Añadir al carrito</button>
                <div>
                <a href="#" className="btn">
                  Ver producto
                </a>
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

  return (
    
    <div className="productos">
      {loading ? <Loading/> : <ShowProducts/>}
    </div>
  );
};
