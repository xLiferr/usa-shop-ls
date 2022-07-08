import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import { ProductCardCategory } from "./ProductCardCategory";



export const Products = (generoFiltro) => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(-1);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const genero = generoFiltro;

  const filtro = data.filter((x)=>{
    if(filter !== -1){
      return x.gender === genero.generoFiltro && x.category.id === filter;
    }
    return x.gender === genero.generoFiltro
  });



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

  const filterProduct = (cat) => {
    setFilter(cat);
  }

  

  


  const ShowProducts = () => {  
    return(
      <>
      <div className="buttons-filter">
        <button className="btn-filtro" onClick={() => filterProduct(-1)}>Todo</button>
        <button className="btn-filtro" onClick={() => filterProduct(1)}>Poleras</button>
        <button className="btn-filtro" onClick={() => filterProduct(5)}>Polerones</button>
        <button className="btn-filtro" onClick={() => filterProduct(7)}>Ropa interior</button>
        <button className="btn-filtro" onClick={() => filterProduct(6)}>Pantalones</button>
      </div>
      <div className="products-list">
      {filtro.map((product,i)=>{
        return(
          <>
             <ProductCardCategory product={product} key={i}/> 
          </>
        )
        
      })}
      </div>
      </>
    );
  }

  return (
    <>
      {loading ? <Loading/> : <ShowProducts/>}
    </>
  );
};
