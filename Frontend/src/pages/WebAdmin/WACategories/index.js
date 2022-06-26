import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./style.css";
// Components
import { Footer } from "../../../components/Footer";
import { SidebarWA } from "../../../components/SidebarWA";
// Icons
import editIcon from "../../../images/edit.png";
import deleteIcon from "../../../images/delete.png";

export const WACategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  const editHandler = (category) => {
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

  }

  const deleteHandler = (category) => {
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
  }

  const addCategory = () => {
    console.log(newCategory)
    /*
    axios.post("", { name: newCategory }).then((response) => {
      if (response.status === 200) {
        Swal.fire({
          title: 'Categoría agregada!',
          text: 'La categoría se ha agregado correctamente.',
          icon: 'success',
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#00AFB9',
        })
      } else if (response.status >= 400) {
        Swal.fire({
          title: 'Error inesperado!',
          text: 'Hubo un error al intentar agregar la categoría, Inténtelo nuevamente.',
          icon: 'error',
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#00AFB9',
        })
      }
    })
    */
  }

  useEffect(() => {
    setCategories([{
      id: 1,
      name: "Hombre"
    },{
      id: 2,
      name: "Mujer"
    },{
      id: 3,
      name: "Accesorios"
    }])
    /*
    axios.get('').then((response) => {
      setCategories(response);
    })
    */
  }, [])
  return (
    <>
      <SidebarWA />
      <div className="wa-categories">
        <div className="wac-header">
          <div className="wac-title"><h2>Categorías</h2></div>
        </div>
        <div className="wac-content">
          <div className="wac-form">
            <h3>Agregar categoría</h3>
            <input type="text" required placeholder="Nombre categoría" onChange={(e) => setNewCategory(e.target.value)}/>
            <button onClick={addCategory}>Agregar</button>
          </div>
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
            ) : ("")}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}