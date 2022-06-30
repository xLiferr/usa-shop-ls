import React, { useEffect, useState } from "react";
import { successModal, errorModal } from "../../utils/infoModals";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";
// Icons
import add from "../../images/add.png";
import deleteIcon from "../../images/delete.png";
import "./style.css";

export const ProductForm = ({ product = {} }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const { user } = useAuth();
  const submitProduct = (event) => {
    event.preventDefault();
    let formDataImages = new FormData();
    selectedImages?.forEach((image) => {
      formDataImages.append("images", image)
    })
    axios.post("http://localhost:3001/products/create", {
      access_token: user.access_token,
      name: product.name,
      category: parseInt(product.category),
      stock: parseInt(product.stock),
      price: parseInt(product.price)
    }).then((response) => {
      if (response.status === 200) successModal('Producto modificado!', 'El producto se ha modificado correctamente.', true);
    }).catch((error) => { errorModal('Error inesperado!', 'Hubo un error al intentar eliminar el producto, Inténtelo nuevamente.') });
  }
  const imageHandler = (event) => {
    if (selectedImages) setSelectedImages((previusImages) => previusImages.concat(Array.from(event.target.files)));
    else setSelectedImages(Array.from(event.target.files));
  }

  useEffect(() => {
    setSelectedImages(product ? (product.images) : ([]));
    axios.get("http://localhost:3001/category/all").then((response) => {
      if (response.status === 200) setCategories(response.data);
    }).catch((error) => setCategories([]));
  }, [])
  return (
    categories.length > 0 ? (
      <div className="prodForm-content">
        <form className="prodForm-form" onSubmit={submitProduct}>
          <div>
            <div className="prodForm-form-item">
              <h4>Nombre</h4>
              <input type="text" defaultValue={product.name} onChange={(e) => product.name = e.target.value} required placeholder="Ej: Mochila"/>
            </div>
            <div className="prodForm-form-item">
              <h4>Descripción</h4>
              <textarea defaultValue={product.description} placeholder="Escriba la descripción de producto" onChange={(e) => product.description = e.target.value} required />
            </div>
            <div className="prodForm-form-item">
              <h4>Categoría</h4>
              <select defaultValue={product.category} required onChange={(e) => product.category = e.target.value}>
                <option value="">Elegir categoría</option>
                {categories.map((category, key) => {
                  return <option value={category.id}>{category.name}</option>
                })}
              </select>
            </div>
            <div className="prodForm-form-item">
              <h4>Stock</h4>
              <input type="number" min="1" defaultValue={product.stock} onChange={(e) => product.stock = e.target.value} placeholder="Ej: 20" required />
            </div>
            <div className="prodForm-form-item">
              <h4>Precio</h4>
              <input type="number" min="1" required defaultValue={product.price} onChange={(e) => product.price = e.target.value} placeholder="Ej: 19999" />
            </div>
            <div className="prodForm-form-item">
              <h4>Fotos</h4>
              <label>
                + Agregar fotos
                <input type="file" multiple accept="image/png, image/jpeg" onChange={imageHandler} />
              </label>
            </div>
          </div>
          <div className="prodForm-form-buttons">
            <input type="submit" value="Guardar" />
          </div>
        </form>
        <div className="prodForm-preview">
          {selectedImages ? (
            selectedImages.map((image, key) => {
              let objUrl = URL.createObjectURL(image);
              return (
                <div className="prodForm-image" key={key}>
                  <img className="prodForm-image-preview" src={objUrl} alt="" />
                  <img
                    className="prodForm-image-button"
                    src={deleteIcon}
                    onClick={() => {
                      URL.revokeObjectURL(objUrl);
                      setSelectedImages(selectedImages.filter((i) => i !== image))
                      console.log(selectedImages)
                    }}
                    alt=""
                  />
                </div>
              )
            })
          ) : ("")}
        </div>
      </div>
    ) : (
      <div className="prodForm-missing-categories">
        <h2>No existen categorías registradas en la base de datos.</h2>
        <Link className="prodForm-missing-button" to="/web-admin/categorias">
          <img src={add} alt="" />
          Agregar una categoría
        </Link>
      </div>
    )
  )
}