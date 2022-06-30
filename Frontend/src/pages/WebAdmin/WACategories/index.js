import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "../../../hooks/useAuth";
import "./style.css";
// Components
import { Footer } from "../../../components/Footer";
import { SidebarWA } from "../../../components/SidebarWA";
// Icons
import editIcon from "../../../images/edit.png";
import deleteIcon from "../../../images/delete.png";
// Utils
import { successModal, errorModal } from "../../../utils/infoModals";

export const WACategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const { user } = useAuth();
  const editHandler = (category) => {
    console.log("edit")
    /*
    Swal.fire({
      title: 'Modificar categoría',
      input: 'text',
      inputLabel: 'Nombre',
      inputValue: category.name,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      confirmButtonColor: '#00AFB9',
      showLoaderOnConfirm: true,
      inputValidator: (name) => {
        if(!name) return 'Debes que asignarle un nombre a la categoría.'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        axios.put("", {
          category: {
            id: category.id,
            name: result.value
          }
        }).then((response) => {
          if (response.status === 200) {
            Swal.fire({
              title: 'Categoría modificada!',
              text: 'La categoría se ha modificado correctamente.',
              icon: 'success',
              confirmButtonText: 'Continuar',
              confirmButtonColor: '#00AFB9',
            })
          } else if (response.status >= 400) {
            Swal.fire({
              title: 'Error inesperado!',
              text: 'Hubo un error al intentar modificar la categoría, Inténtelo nuevamente.',
              icon: 'error',
              confirmButtonText: 'Continuar',
              confirmButtonColor: '#00AFB9',
            })
          }
        }).catch((error) => {
          Swal.fire({
            title: 'Error inesperado!',
            text: 'Hubo un error al intentar modificar la categoría, Inténtelo nuevamente',
            icon: 'error',
            confirmButtonText: 'Continuar',
            confirmButtonColor: '#00AFB9',
          })
        })
      }
    })
  */
  }

  const deleteHandler = (category) => {
    console.log("delete")
    /*
    Swal.fire({
      title: '¿Eliminar categoría?',
      text: 'Si eliminas la categoría, se eliminará de forma permanente de la tienda.',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#B1B1B1',
      cancelButtonText: 'No, mantener categoría',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar categoría'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete('').then((response) => {
          if (response.status === 200) {
            Swal.fire({
              title: 'Categoría eliminada!',
              text: 'La categoría se ha eliminada correctamente.',
              icon: 'success',
              confirmButtonText: 'Continuar',
              confirmButtonColor: '#00AFB9',
            })
          } else if (response.status >= 400) {
            Swal.fire({
              title: 'Error inesperado!',
              text: 'Hubo un error al intentar eliminar la categoría, Inténtelo nuevamente.',
              icon: 'error',
              confirmButtonText: 'Continuar',
              confirmButtonColor: '#00AFB9',
            })
          }
        }).catch((error) => {
          Swal.fire({
            title: 'Error inesperado!',
            text: 'Hubo un error al intentar eliminar la categoría, Inténtelo nuevamente.',
            icon: 'error',
            confirmButtonText: 'Continuar',
            confirmButtonColor: '#00AFB9',
          })
        })
      }
    })
    */
  }

  const addCategory = (event) => {
    event.preventDefault();
    console.log("a")
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