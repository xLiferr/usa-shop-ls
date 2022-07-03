import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ProfileMenu = () => {
  return (
    <div className="profile-menu">
      <ul>
        <li>
          <Link className="profile-menu-item" to="/mi-cuenta">
            Datos personales
          </Link>
        </li>
        <li>
          <Link className="profile-menu-item" to="/mi-cuenta/direcciones">
            Direcciones
          </Link>
        </li>
        <li>
          <Link className="profile-menu-item" to="/mi-cuenta/compras">
            Compras
          </Link>
        </li>
        <li>
          <Link className="profile-menu-item" to="/mi-cuenta/contrasena">
            Cambiar contraseña
          </Link>
        </li>
      </ul>
    </div>
  )
}