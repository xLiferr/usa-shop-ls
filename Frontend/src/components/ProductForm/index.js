import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import deleteIcon from "../../images/delete.png";
import "./style.css";

export const ProductForm = ({product = {}}) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const submitProduct = (event) => {
    event.preventDefault();
    axios.post("", {
      product: product
    }).then((response) => {
      if (response.status === 200) {
        Swal.fire({
          title: 'Producto modificado!',
          text: 'El producto se ha modificado correctamente.',
          icon: 'success',
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#00AFB9',
        })
      } else if (response.status >= 400) {
        Swal.fire({
          title: 'Error inesperado!',
          text: 'Hubo un error al intentar modificar el producto, Inténtelo nuevamente.',
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
  const imageHandler = (event) => {
    if (selectedImages) setSelectedImages((previusImages) =>previusImages.concat(Array.from(event.target.files)));
    else setSelectedImages(Array.from(event.target.files));
  }

  useEffect(() => {
    setSelectedImages(product ? (product.images) : ([]));
  }, [])
  return (
    <div className="prodForm-content">
      <form className="prodForm-form" onSubmit={submitProduct}>
        <div>
          <div className="prodForm-form-item">
            <h4>Nombre</h4>
            <input type="text" defaultValue={product.name} onChange={(e) => product.name = e.target.value} required />
          </div>
          <div className="prodForm-form-item">
            <h4>Descripción</h4>
            <textarea defaultValue={product.description} placeholder="Escriba la descripción de producto" onChange={(e) => product.description = e.target.value} required />
          </div>
          <div className="prodForm-form-item">
            <h4>Categoría</h4>
            <select>
              <option>Categoría</option>
            </select>
          </div>
          <div className="prodForm-form-item">
            <h4>Stock</h4>
            <input type="number" min="1" defaultValue={product.stock} onChange={(e) => product.stock = e.target.value} required />
          </div>
          <div className="prodForm-form-item">
            <h4>Precio</h4>
            <input type="text" required defaultValue={product.price} onChange={(e) => product.price = e.target.value} placeholder="Ej: 19.999" />
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
  )
}