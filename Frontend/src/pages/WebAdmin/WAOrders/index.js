import React, { useEffect, useState, useMemo } from "react";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";
import "./style.css";
import { Footer } from "../../../components/Footer";
import { SidebarWA } from "../../../components/SidebarWA";
import { OrderTable } from "../../../components/OrderTable";
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
        <OrderTable data={filterOrders} detailText="Detalle del pedido" type={"Administrador"}/>
      </div>
      <Footer />
    </>
  )
}