import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./style.css";
// Icons
import logo from "../../images/logo.png";
import menuOpen from "../../images/menuOpen.png";
import menuClose from "../../images/menuClose.png";
import addProducts from "../../images/add.png";
import categories from "../../images/categories.png";
import clients from "../../images/clients.png";
import orders from "../../images/orders.png";
import products from "../../images/products.png";
import sales from "../../images/sales.png";
import back from "../../images/back.png";
import logoutIcon from "../../images/log-out.png"


export const SidebarWA = () => {
  const [waSidebar, setWaSidebar] = useState(false);
  const { logout } = useAuth();
  return (
    <>
      <div className={!waSidebar ? ("wa-sidebar-open") : ("wa-sidebar-close")}>
        <div className="wa-sidebar-header" onClick={() => setWaSidebar(!waSidebar)}>
          <div className="wa-sidebar-logo"><img src={logo} alt="" /></div>
          <div className="wa-sidebar-title">Web Admin</div>
          {waSidebar 
          ? (<img className="wa-menu-open wa-sidebar-icon" src={menuOpen} alt="" onClick={() => setWaSidebar(!waSidebar)}/>) 
          : (<img className="wa-menu-close wa-sidebar-icon" src={menuClose} alt="" onClick={() => setWaSidebar(!waSidebar)}/>)}          
        </div>
        <ul className="wa-sidebar-items">
          <li className="wa-sidebar-item">
            <Link className="wa-sidebar-link" to="/web-admin/agregar-producto">
              <img className="wa-sidebar-icon" src={addProducts} alt="" />
              Agregar un producto
            </Link>
          </li>
          <li className="wa-sidebar-item">
            <Link className="wa-sidebar-link" to="/web-admin/productos">
              <img className="wa-sidebar-icon" src={products} alt="" />
              Productos
            </Link>
          </li>
          <li className="wa-sidebar-item">
            <Link className="wa-sidebar-link" to="/web-admin/categorias">
              <img className="wa-sidebar-icon" src={categories} alt="" />
              Categorías
            </Link>
          </li>
          <li className="wa-sidebar-item">
            <Link className="wa-sidebar-link" to="/web-admin/pedidos">
              <img className="wa-sidebar-icon" src={orders} alt="" />
              Pedidos
            </Link>
          </li>
          <li className="wa-sidebar-item">
            <Link className="wa-sidebar-link" to="/web-admin/clientes">
              <img className="wa-sidebar-icon" src={clients} alt="" />
              Clientes
            </Link>
          </li>
          <li className="wa-sidebar-item">
            <Link className="wa-sidebar-link" to="/">
              <img className="wa-sidebar-icon" src={back} alt="" />
              Volver a la tienda
            </Link>
          </li>
          <li className="wa-sidebar-item">
            <button className="wa-sidebar-link" onClick={async () => await logout()}>
              <img className="wa-sidebar-icon" src={logoutIcon} alt="" />
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}