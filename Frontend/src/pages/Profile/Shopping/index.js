import React, { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";
import "./style.css";
import { Footer } from '../../../components/Footer'
import { Header } from '../../../components/Header'
import { Categorys } from '../../../components/Categorys'
import { ProfileMenu } from "../ProfileMenu";
import { OrderTable } from "../../../components/OrderTable";

export const Shopping = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('', { access_token: user.access_token }).then((response) => {
      if (response.status === 200) setOrders(response.data);
    }).catch(() => setOrders([]));
  }, [])
  return (
    <>
      <Header />
      <Categorys />
      <ProfileMenu />
      <h2>Compras</h2>
      <OrderTable data={orders} detailText="Detalle de la compra" />
      <Footer />
    </>
  )
}