import React, { useEffect, useState } from "react";
import "./style.css";
import MGN from "../../images/MGN.jpg";

export const Productos = () => {
  return (
    <div className="productos">
      <div className="producto">
        <a href="#">
          <div className="producto-img">
            <img src={MGN} alt="" />
          </div>
        </a>
        <div className="producto-footer">
          <h1> Title </h1>
          <p> Categoria </p>
          <p className="precio"> $59.990 </p>
        </div>
        <div className="buttom">
          <button className="btn">Añadir al carrito</button>
          <div>
            <a href="#" className="btn">
              Ver producto
            </a>
          </div>
        </div>
      </div>
      <div className="producto">
        <a href="#">
          <div className="producto-img">
            <img src={MGN} alt="" />
          </div>
        </a>
        <div className="producto-footer">
          <h1> Title </h1>
          <p> Categoria </p>
          <p className="precio"> $59.990 </p>
        </div>
        <div className="buttom">
          <button className="btn">Añadir al carrito</button>
          <div>
            <a href="#" className="btn">
              Ver producto
            </a>
          </div>
        </div>
      </div>
      <div className="producto">
        <a href="#">
          <div className="producto-img">
            <img src={MGN} alt="" />
          </div>
        </a>
        <div className="producto-footer">
          <h1> Title </h1>
          <p> Categoria </p>
          <p className="precio"> $59.990 </p>
        </div>
        <div className="buttom">
          <button className="btn">Añadir al carrito</button>
          <div>
            <a href="#" className="btn">
              Ver producto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
