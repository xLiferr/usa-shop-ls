import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./style.css";
// Components
import { Footer } from "../../../components/Footer";
import { SidebarWA } from "../../../components/SidebarWA";
import { ProductForm } from "../../../components/ProductForm";
// Icons
import search from "../../../images/search-ib.png";
import deleteIcon from "../../../images/delete.png";
import editIcon from "../../../images/edit.png";
import addProducts from "../../../images/add.png";
import back from "../../../images/back.png";

export const WAProducts = () => {
  const [searchedProduct, setSearchedProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const editHandler = (product) => {
    setSelectedProduct({ ...product });
    setIsEditing(true);
  }

  const deleteHandler = (product) => {
    Swal.fire({
      title: '¿Eliminar producto?',
      text: 'Si eliminas el producto, se eliminará de forma permanente de la tienda.',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#B1B1B1',
      cancelButtonText: 'No, mantener producto',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar producto'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete('').then((response) => {
          if (response.status === 200) {
            Swal.fire({
              title: 'Producto eliminado!',
              text: 'El producto se ha eliminado correctamente.',
              icon: 'success',
              confirmButtonText: 'Continuar',
              confirmButtonColor: '#00AFB9',
            })
          } else if (response.status >= 400) {
            Swal.fire({
              title: 'Error inesperado!',
              text: 'Hubo un error al intentar eliminar el producto, Inténtelo nuevamente.',
              icon: 'error',
              confirmButtonText: 'Continuar',
              confirmButtonColor: '#00AFB9',
            })
          }
        }).catch((error) => {
          Swal.fire({
            title: 'Error inesperado!',
            text: 'Hubo un error al intentar eliminar el producto, Inténtelo nuevamente.',
            icon: 'error',
            confirmButtonText: 'Continuar',
            confirmButtonColor: '#00AFB9',
          })
        })
      }
    })
  }
  const filterProducts = useMemo(() => {
    return products.filter((product) => {
      if (searchedProduct === "") return true;
      if (product.name.toLowerCase().includes(searchedProduct.toLowerCase())) return true;
      return false;
    })
  }, [products, searchedProduct])

  const showProducts = useMemo(() => {
    if (products.length > 0) {
      return filterProducts.map((product, key) => {
        return (
          <div className="wap-product" key={key}>
            <div className="wap-product-image"><img src={product.images[0]} alt="" /></div>
            <div className="wap-product-name"><h3>{product.name}</h3></div>
            <div className="wap-product-price"><h4>${product.price}</h4></div>
            <div className="wap-product-buttons">
              <img src={editIcon} alt="" onClick={() => editHandler(product)} />
              <img src={deleteIcon} alt="" onClick={() => deleteHandler(product)} />
            </div>
          </div>
        )
      })
    } else {
      return (
        <div className="wap-no-products">
          <h2>No existen productos registrados en la base de datos.</h2>
          <Link className="wap-add-button" to="/web-admin/agregar-producto">
            <img src={addProducts} alt="" />
            Agregar un producto
          </Link>
        </div>
      )
    }
  }, [filterProducts, products.length])

  useEffect(() => {
    axios.get("http://localhost:3001/products/all")
      .then((response) => {
        if (response.status === 200) setProducts(response.data);
      })
      .catch((error) => setProducts([]))
  }, [])

  return (
    <>
      <SidebarWA />
      <div className="wa-products">
        <div className="wap-header">
          <div className="wap-title"><h2>Productos</h2></div>
          <div className="wap-search">
            <div className="wap-input">
              <img src={search} alt="" />
              <input type="text" placeholder="Buscar un producto" onChange={(e) => setSearchedProduct(e.target.value)} />
            </div>
            <div className="wap-filters">
              <label>Categoría</label>
              <select>
                <option>Categoría</option>
              </select>
            </div>
          </div>
        </div>
        {isEditing ? (
          <div className="wap-edit">
            <button onClick={() => setIsEditing(false)}>
              <img src={back} alt=""/>
              Atrás
            </button>
            <div className="wap-edit-header">
              <h3>Modificar producto</h3>
            </div>
            <ProductForm product={selectedProduct}/>
          </div>
        ) : (<div className="wap-content">{showProducts}</div>)}
      </div>
      <Footer />
    </>
  )
}