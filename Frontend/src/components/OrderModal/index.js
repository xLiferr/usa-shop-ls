import React from "react";
import "./style.css";
export const OrderModal = ({ data, maintitle, openModal }) => {
  return (
    <div className="order-modal-bg">
      <div className="order-modal-card">
        <div className="order-modal-section"><h2>{maintitle}</h2></div>
        {data.titles.map((title, index) => {
          return (
            <div className="order-modal-section" key={index}>
              <h3>{title}</h3>
              <input type={"text"} disabled value={data.data[index]} />
            </div>
          )
        })}
        <div className="order-modal-button">
          <button onClick={() => openModal(false)}>Volver</button>
        </div>
      </div>
    </div>
  )
}