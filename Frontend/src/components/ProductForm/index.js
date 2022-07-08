import React, { useEffect, useState } from "react";
import { successModal, errorModal } from "../../utils/infoModals";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";
// Icons
import add from "../../images/add.png";
import deleteIcon from "../../images/delete.png";
import "./style.css";

export const ProductForm = ({ product = {}, type }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState(product ? (product.name) : (""));
  const [category, setCategory] = useState(product ? (product.category) : (-1));
  const [stock, setStock] = useState(product ? (product.stock) : (-1));
  const [price, setPrice] = useState(product ? (product.price) : (-1));
  const { user } = useAuth();
  const handleEdit = (event) => {
    event.preventDefault();
    let formDataImages = new FormData();
    selectedImages?.forEach((image) => {
      formDataImages.append("images", image)
    })
    axios.put(`http://localhost:3001/products/${product.id}`, {
      access_token: user.access_token,
      name: product.name,
      category: parseInt(product.category),
      stock: parseInt(product.stock),
      price: parseInt(product.price)
    }).then((response) => {
      if (response.status === 201) successModal('Producto modificado!', 'El producto se ha modificado correctamente.', true);
    }).catch((error) => { errorModal('Error inesperado!', 'Hubo un error al intentar modificar el producto, Inténtelo nuevamente.') });
  }

  const handleUploadImage = (id) => {
    console.log(selectedImages[0])
    let formDataImages = new FormData();
    formDataImages.append("file", selectedImages[0]);
    formDataImages.append("name", selectedImages[0].name);
    console.log(formDataImages);
    axios.post(`http://localhost:3001/products/${id}/img`, formDataImages).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error);
    })
  }

  const handleCreate = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/products/create", {
      access_token: user.access_token,
      name: name,
      category: parseInt(category),
      stock: parseInt(stock),
      price: parseInt(price)
    }).then(async (response) => {
      if (response.status === 201) {
        handleUploadImage(response.data.id);
        successModal('Producto creado!', 'El producto se ha creado correctamente.', true);
      }
    }).catch((error) => { 
      errorModal('Error inesperado!', 'Hubo un error al intentar crear el producto, Inténtelo nuevamente.');
      console.log(error) 
    });
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
        <form className="prodForm-form" onSubmit={type === "create"? (handleCreate) : (handleEdit)}>
          <div>
            <div className="prodForm-form-item">
              <h4>Nombre</h4>
              <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} required placeholder="Ej: Mochila"/>
            </div>
            <div className="prodForm-form-item">
              <h4>Descripción</h4>
              <textarea defaultValue={product.description} placeholder="Escriba la descripción de producto" onChange={(e) => product.description = e.target.value} />
            </div>
            <div className="prodForm-form-item">
              <h4>Categoría</h4>
              <select defaultValue={category} required onChange={(e) => setCategory(e.target.value)}>
                <option value="">Elegir categoría</option>
                {categories.map((category, key) => {
                  return <option key={key} value={category.id}>{category.name}</option>
                })}
              </select>
            </div>
            <div className="prodForm-form-item">
              <h4>Stock</h4>
              <input type="number" min="1" defaultValue={stock} onChange={(e) => setStock(e.target.value)} placeholder="Ej: 20" required />
            </div>
            <div className="prodForm-form-item">
              <h4>Precio</h4>
              <input type="number" min="1" required defaultValue={price} onChange={(e) => setPrice(e.target.value)} placeholder="Ej: 19999" />
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