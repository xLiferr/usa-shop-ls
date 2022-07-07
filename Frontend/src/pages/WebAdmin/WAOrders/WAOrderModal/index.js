import React from "react";
import "./style.css";
export const WAOrderModal = ({ data, maintitle, openModal }) => {
  console.log(data)
  return (
    <div className="wao-modal-bg">
      <div className="wao-modal-card">
        <div className="wao-modal-section"><h2>{maintitle}</h2></div>
        {data.titles.map((title, index) => {
          return (
            <div className="wao-modal-section" key={index}>
              <h3>{title}</h3>
              <input type={"text"} disabled value={data.data[index]} />
            </div>
          )
        })}
        <div className="wao-modal-button">
          <button onClick={() => openModal(false)}>Volver</button>
        </div>
      </div>
    </div>
  )
}