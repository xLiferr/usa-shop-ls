import React, { useEffect, useState, useMemo } from "react";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";
import "./style.css";
import { Footer } from "../../../components/Footer";
import { SidebarWA } from "../../../components/SidebarWA";
import search from "../../../images/search-ib.png";

export const WAOrders = () => {
  const { user } = useAuth();
  const [searchOrder, setSearchOrder] = useState("");
  const [orders, setOrders] = useState([]);

  const filterOrders = useMemo(() => {
    return orders.filter((order) => {
      if (searchOrder === "") return true;
      if (order.id.toString().toLowerCase().includes(searchOrder.toLowerCase())) return true;
      return false;
    })
  }, [searchOrder, orders])

  const showOrders = useMemo(() => {
    return filterOrders.map((order, key) => {
      return (
        <tr key={key}>
          <td>{order.id}</td>
          <td><button>Ver</button></td>
          <td><button>Ver</button></td>
          <td>{order.quantity}</td>
          <td>
            <select defaultValue={order.status} >
              <option value={"En preparación"}>En preparación</option>
              <option value={"En camino"}>En camino</option>
              <option value={"Entregado"}>Entregado</option>
            </select>
          </td>
        </tr>
      )
    })
  }, [filterOrders])

  useEffect(() => {
    axios.get('', { access_token: user.access_token }).then((response) => {
      if (response.status === 200) setOrders(response.data);
    }).catch(() => setOrders([]));
  }, [])
  return (
    <>
      <SidebarWA />
      <div className="wa-orders">
        <div className="wa-orders-header">
          <div className="wa-orders-title"><h2>Pedidos</h2></div>
          <div className="wa-orders-search">
            <div className="wa-orders-input">
              <img src={search} alt="" />
              <input type="text" placeholder="Buscar un pedido" onChange={(e) => setSearchOrder(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="wa-orders-content">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Detalle</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>{showOrders}</tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  )
}