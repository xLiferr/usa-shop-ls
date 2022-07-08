import React, { useMemo, useState } from "react";
import "./style.css";
import { OrderModal } from "../OrderModal";
import axios from "axios";

export const OrderTable = ({ data, detailText, type }) => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [showProduct, setShowProduct] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const handleProduct = (product, quantity) => {
    axios.get(`http://localhost:3001/products/${product}`).then((response) => {
      if (response.status === 200) {
        setSelectedProduct({
          titles: ["Nombre", "Categoría", "Cantidad comprada"],
          data: [response.data.name, response.data.category.name, quantity]
        });
        setShowProduct(true);
      }
    })  
  }
  const handleDetail =  (detail) => {
    axios.get(`http://localhost:3001/order-detail/${detail}`).then((response) => {
      if (response.status === 200) {
        console.log(response.data.user)
        axios.get(`http://localhost:3001/address/user/${response.data.user}`).then((resp) => {
          if (resp.status === 200) {
            setSelectedDetail({
              titles: ["Dirección del cliente", "Ciudad", "Teléfono", "Total pagado"],
              data: [resp.data.address, resp.data.city, resp.data.mobile, response.data.total]
            });
            setShowDetail(true);
          }
        })
      }
    })
  }

  const showOrders = useMemo(() => {
    return data.map((order, key) => {
      return (
        <tr key={key}>
          <td>{order.id}</td>
          <td><button onClick={() => handleDetail(order.order)}>Ver</button></td>
          <td><button onClick={() => handleProduct(order.product, order.quantity)}>Ver</button></td>
          <td>{order.quantity}</td>
          <td>
            {type === "Administrador" ? (
              <select defaultValue={order.status} >
                <option value={"En preparación"}>En preparación</option>
                <option value={"En camino"}>En camino</option>
                <option value={"Entregado"}>Entregado</option>
              </select>
            ) : (order.status)}

          </td>
        </tr>
      )
    })
  }, [data])
  return (
    <>
      <div className="ordertable-content">
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
      {showProduct ? (<OrderModal data={selectedProduct} maintitle="Producto" openModal={setShowProduct} />) : ("")}
      {showDetail ? (<OrderModal data={selectedDetail} maintitle={detailText} openModal={setShowDetail} />) : ("")}
    </>
  )
}