import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { successModal, askModal, errorModal } from "../../../utils/infoModals";
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
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const editHandler = (product) => {
    setSelectedProduct({ ...product });
    setIsEditing(true);
  }

  const deleteHandler = async (product) => {
    if (await askModal('¿Eliminar producto?', 'Si eliminas el producto, se eliminará de forma permanente de la tienda.','No, mantener producto', 'Sí, eliminar producto')) {
      axios.delete(`http://localhost:3001/products/${product.id}`).then((response) => {
        if (response.status === 200) successModal('Producto eliminado!', 'El producto se ha eliminado correctamente.', true);
      }).catch(() => errorModal('Error inesperado!', 'Hubo un error al intentar eliminar el producto, Inténtelo nuevamente.'));
    }
  }
  const filterProducts = useMemo(() => {
    return products.filter((product) => {
      if (searchedProduct === "" && selectedCategory === -1) return true;
      if (product.name.toLowerCase().includes(searchedProduct.toLowerCase())) return true;
      return false;
    })
  }, [products, searchedProduct])

  const showProducts = useMemo(() => {
    if (products.length > 0) {
      return filterProducts.map((product, key) => {
        return (
          <div className="wap-product" key={key}>
            <div className="wap-product-image"></div>
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
  }, [filterProducts])

  useEffect(() => {
    axios.get("http://localhost:3001/category/all").then((response) => {
      if (response.status === 200) setCategories(response.data);
    }).catch((error) => setCategories([]));
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
              <select defaultValue="Elegir categoría" required onChange={(e) =>  setSelectedCategory(e.target.value)}>
                <option value="">Elegir categoría</option>
                {categories.map((category, key) => {
                  return <option key={key} value={category.id}>{category.name}</option>
                })}
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
            <ProductForm product={selectedProduct} type="edit"/>
          </div>
        ) : (<div className="wap-content">{showProducts}</div>)}
      </div>
      <Footer />
    </>
  )
}