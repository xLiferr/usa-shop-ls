import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../hooks/useAuth";
import "./style.css";
// Components
import { Footer } from "../../../components/Footer";
import { SidebarWA } from "../../../components/SidebarWA";
// Icons
import editIcon from "../../../images/edit.png";
import deleteIcon from "../../../images/delete.png";
// Utils
import { successModal, errorModal, inputModal, askModal } from "../../../utils/infoModals";

export const WACategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const { user } = useAuth();

  const editHandler = async (category) => {
    const result = await inputModal('Modificar categoría', 'text', 'Nombre', category.name, 'Guardar', 'Debes que asignarle un nombre a la categoría.');
    if (result.isConfirmed) {
      axios.put(`http://localhost:3001/category/${category.id}`, { access_token: user.access_token, name: result.value }).then((response) => {
        if (response.status === 200) successModal('Categoría modificada!', 'La categoría se ha modificado correctamente.', true);
      }).catch(() => {
        errorModal('Error inesperado!', 'Hubo un error al intentar modificar la categoría, Inténtelo nuevamente');
      })
    }
  }

  const deleteHandler = async (category) => {
    const result = await askModal('¿Eliminar categoría?', 'Si eliminas la categoría, se eliminará de forma permanente de la tienda.', 'No, mantener categoría', 'Sí, eliminar categoría');
    if (result) {
      axios.delete(`http://localhost:3001/category/${category.id}`, { access_token: user.access_token }).then((response) => {
        if (response.status === 200) successModal('Categoría eliminada!', 'La categoría se ha eliminada correctamente.', true);
      }).catch(() => errorModal('Error inesperado!', 'Hubo un error al intentar eliminar la categoría, Inténtelo nuevamente.'));
    }
  }

  const addCategory = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/category/create", { access_token: user.access_token, name: newCategory }).then((response) => {
      if (response.status === 201)  {
        successModal('Categoría agregada!', 'La categoría se ha agregado correctamente.', true);
      }
    }).catch((error) => {
      errorModal('Error inesperado!', 'Hubo un error al intentar agregar la categoría, Inténtelo nuevamente.')
    })
  }

  useEffect(() => {
    axios.get('http://localhost:3001/category/all').then((response) => {
      if (response.status === 200) setCategories(response.data);
    }).catch((error) => {
      console.log(error)
      setCategories([]);
    }) 
  }, [])
  return (
    <>
      <SidebarWA />
      <div className="wa-categories">
        <div className="wac-header">
          <div className="wac-title"><h2>Categorías</h2></div>
        </div>
        <div className="wac-content">
          <form className="wac-form" onSubmit={addCategory}>
            <h3>Agregar categoría</h3>
            <input type="text" required placeholder="Nombre categoría" onChange={(e) => setNewCategory(e.target.value)}/>
            <button type="submit">Agregar</button>
          </form>
          <div className="wac-table">
            {categories.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, key) => {
                    return (
                      <tr key={key}>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                        <td><img src={editIcon} alt="" onClick={() => editHandler(category)}/></td>
                        <td><img src={deleteIcon} alt="" onClick={() => deleteHandler(category)}/></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            ) : (<h2>No existen categorías registradas.</h2>)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}