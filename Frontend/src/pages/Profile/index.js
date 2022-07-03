import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import "./style.css";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Categorys } from '../../components/Categorys'
import { ProfileMenu } from "./ProfileMenu";

export const Profile = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios.get('', { access_token: user.access_token, username: user.email }).then((response) => {
      if (response.status === 200) setUserInfo(response.data);
    }).catch(() => setUserInfo({ username: user.email }))
  }, [])
  return (
    <>
      <Header />
      <Categorys />
      <ProfileMenu />
      {userInfo ? (
        <div className="profile-content">
          <h2>Datos personales</h2>
          <div className="profile-section">
            <h3>Nombre</h3>
            <input type="text" disabled value={userInfo.name} />
          </div>
          <div className="profile-section">
            <h3>Apellido</h3>
            <input type="text" disabled value={userInfo.second_name} />
          </div>
          <div className="profile-section">
            <h3>RUT</h3>
            <input type="text" disabled value={userInfo.rut} />
          </div>
          <div className="profile-section">
            <h3>Correo electrónico</h3>
            <input type="text" disabled value={userInfo.username} />
          </div>
          <div className="profile-section">
            <h3>Teléfono</h3>
            <input type="text" disabled value={userInfo.telephone} />
          </div>
        </div>
      ) : ("")}

      <Footer />
    </>
  )
}