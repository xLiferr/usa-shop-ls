import React, { useMemo, useState } from "react";
import "./style.css";
import { OrderModal } from "../OrderModal";

export const OrderTable = ({ data, detailText, type }) => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [showProduct, setShowProduct] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const handleProduct = (product) => {
    setSelectedProduct({
      titles: ["Nombre", "Stock", "Price", "Categoría"],
      data: [product.name, product.stock, product.price, product.category.name]
    });
    setShowProduct(true);
  }
  const handleDetail = (detail) => {
    setSelectedDetail({
      titles: ["Cliente", "Modo de pago", "Total pagado"],
      data: [detail.user.name + " " + detail.user.second_name, detail.payment, detail.total]
    });
    setShowDetail(true);
  }

  const showOrders = useMemo(() => {
    return data.map((order, key) => {
      return (
        <tr key={key}>
          <td>{order.id}</td>
          <td><button onClick={() => handleDetail(order.order)}>Ver</button></td>
          <td><button onClick={() => handleProduct(order.product)}>Ver</button></td>
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