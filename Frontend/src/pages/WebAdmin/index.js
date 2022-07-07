import React from "react";
import "./style.css";
import { SidebarWA } from "../../components/SidebarWA";
import { Footer } from "../../components/Footer";

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

export const WebAdmin = () => {
  return (
    <>
      <SidebarWA />
      <div className="wa-dashboard">
        <div className="wa-dashboard-header">
          <h2>Reporte de ventas</h2>
        </div>
        <div className="wa-dashboard-content">
          <div className="wa-dashboard-item">
            <h3>Ventas por mes</h3>
            <div className="wa-dashboard-filters">
              <select>
                {months.map((month, key) => {
                  return (
                    <option key={key} value={month}>{month}</option>
                  )
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}