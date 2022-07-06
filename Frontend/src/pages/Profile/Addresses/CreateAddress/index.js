import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../../hooks/useAuth";
import { errorModal, successModal } from "../../../../utils/infoModals";
import "./style.css";
import { Footer } from '../../../../components/Footer'
import { Header } from '../../../../components/Header'
import { Categorys } from '../../../../components/Categorys'
import { ProfileMenu } from "../../ProfileMenu";



export const CreateAddress = () => {
  const { user } = useAuth();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [telephone, setTelephone] = useState("");
  const [cellphone, setCellphone] = useState("");
  const handleCreate = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/address/create', {
      address: address,
      city: city,
      postal_code: parseInt(postalCode),
      country: "Chile",
      telephone: telephone,
      mobile: cellphone,
      user: user.id
    }).then((response) => {
      if (response.status === 201) successModal('Dirección agregada!', 'La dirección se ha agregado correctamente.', true);
    }).catch(() => errorModal('Error inesperado!', 'Hubo un error al intentar agregar la dirección, Inténtelo nuevamente.'))
  }
  return (
    <>
      <Header />
      <Categorys />
      <ProfileMenu />
      <div className="addresses-content">
        <div><h2>Agregar dirección</h2></div>
        <form className="addresses-form" onSubmit={handleCreate}>
          <div className="addresses-section">
            <h3>Dirección</h3>
            <div className="addresses-input"><input type="text" required onChange={(e) => setAddress(e.target.value)} /></div>
          </div>
          <div className="addresses-section">
            <h3>Región</h3>
            <div className="addresses-input">
              <select required onChange={(e) => setCity(e.target.value)}>
                <option value="">Eliga una región</option>
                <option value="Tarapacá">Tarapacá</option>
                <option value="Antofagasta">Antofagasta</option>
                <option value="Atacama">Atacama</option>
                <option value="Coquimbo">Coquimbo</option>
                <option value="Valparaíso">Valparaíso</option>
                <option value="O'Higgins">O'Higgins</option>
                <option value="El Maule">El Maule</option>
                <option value="El Bío Bío">El Bío Bío</option>
                <option value="La Araucanía">La Araucanía</option>
                <option value="Los Lagos">Los Lagos</option>
                <option value="Aysén">Aysén</option>
                <option value="Magallanes y Antártica Chilena">Magallanes y Antártica Chilena</option>
                <option value="Región Metropolitana de Santiago">Región Metropolitana de Santiago</option>
                <option value="Los Ríos">Los Ríos</option>
                <option value="Arica y Parinacota">Arica y Parinacota</option>
                <option value="Ñuble">Ñuble</option>
              </select>
            </div>
          </div>
          <div className="addresses-section" onChange={(e) => setPostalCode(e.target.value)}>
            <h3>Código postal</h3>
            <div className="addresses-input"><input type="text" /></div>
          </div>
          <div className="addresses-section" onChange={(e) => setTelephone(e.target.value)}>
            <h3>Teléfono</h3>
            <div className="addresses-input"><input type="text" /></div>
          </div>
          <div className="addresses-section">
            <h3>Celular</h3>
            <div className="addresses-input"><input type="text" required onChange={(e) => setCellphone(e.target.value)} /></div>
          </div>
          <div className="addresses-section">
            <button>Agregar</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}