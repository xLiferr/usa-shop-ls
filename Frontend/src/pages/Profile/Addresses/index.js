import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import "./style.css";
import { Footer } from '../../../components/Footer'
import { Header } from '../../../components/Header'
import { Categorys } from '../../../components/Categorys'
import { ProfileMenu } from "../ProfileMenu";
import addIcon from "../../../images/add.png";


export const Addresses = () => {
  const { user } = useAuth();
  const [userAddresses, setUserAddresses] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/address/user/${user.id}`).then((response) => {
      if (response.status === 200) setUserAddresses(response.data);
    }).catch(() => setUserAddresses([]))
  }, [])
  return (
    <>
      <Header />
      <Categorys />
      <ProfileMenu />
      <div className="addresses-content">
        <div className="addresses-header">
          <div className="addresses-title"><h2>Direcciones</h2></div>
          {userAddresses.length > 0 ? (
            <div className="addresses-button">
              <Link className="addresses-create-btn" to="/mi-cuenta/direcciones/crear">
                <img src={addIcon} alt="" />
                Agregar dirección
              </Link>
            </div>
          ) : ("")}
        </div>
        {userAddresses.length > 0 ? (
          <div className="addresses-cards">
            {userAddresses.map((address, key) => {
              return (
                <div className="addresses-items" key={key}>
                  <h2>Dirección {key + 1}</h2>
                  <div className="addresses-item">
                    <h3>Dirección</h3>
                    <input disabled type="text" value={address.address} />
                  </div>
                  <div className="addresses-item">
                    <h3>Región</h3>
                    <input disabled type="text" value={address.city} />
                  </div>
                  <div className="addresses-item">
                    <h3>País</h3>
                    <input disabled type="text" value={address.country} />
                  </div>
                  <div className="addresses-item">
                    <h3>Código postal</h3>
                    <input disabled type="text" value={address.postal_code} />
                  </div>
                  <div className="addresses-item">
                    <h3>Teléfono</h3>
                    <input disabled type="text" value={address.telephone} />
                  </div>
                  <div className="addresses-item">
                    <h3>Celular</h3>
                    <input disabled type="text" value={address.mobile} />
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="addresses-empty">
            <h3>No tienes direcciones registradas.</h3>
            <Link className="addresses-create-btn" to="/mi-cuenta/direcciones/crear">
              <img src={addIcon} alt="" />
              Agregar dirección
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}