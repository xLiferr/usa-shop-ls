import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./style.css";
import { Footer } from "../../../components/Footer";
import { SidebarWA } from "../../../components/SidebarWA";
import search from "../../../images/search-ib.png";

export const WAClients = () => {
  const [clients, setClients] = useState([]);
  const [searchUser, setSearchUser] = useState("")
  useEffect(() => {
    axios.get('http://localhost:3001/user/all').then((response) => {
      if (response.status === 200) setClients(response.data);
    }).catch(() => setClients([]))
  }, [])

  const filterClients = useMemo(() => {
    return clients.filter((client) => {
      let fullName = client.name + " " + client.second_name;
      if (searchUser === "") return true;
      if (fullName.toLowerCase().includes(searchUser.toLowerCase())) return true;
      return false;
    })
  }, [clients, searchUser])

  const showClients = useMemo(() => {
    return filterClients.map((client, key) => {
      return (
        <div className="wa-client-card" key={key}>
          <div className="wa-client-card-header">
            <h2>{client.name} {client.second_name}</h2>
          </div>
          <div className="wa-client-card-items">
            <div className="wa-client-card-item">
              <h3>ID</h3>
              <h4>{client.id}</h4>
            </div><div className="wa-client-card-item">
              <h3>Correo electrónico</h3>
              <h4>{client.username}</h4>
            </div>
            <div className="wa-client-card-item">
              <h3>Teléfono</h3>
              <h4>{client.telephone}</h4>
            </div>
          </div>
        </div>
      )
    })
  }, [filterClients])
  return (
    <>
      <SidebarWA />
      <div className="wa-clients">
        <div className="wa-clients-header">
          <div className="wa-clients-title"><h2>Clientes</h2></div>
          <div className="wa-clients-search">
            <div className="wa-clients-input">
              <img src={search} alt="" />
              <input type="text" placeholder="Buscar un cliente" onChange={(e) => setSearchUser(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="wa-clients-content">{showClients}</div>
      </div>
      <Footer />
    </>
  )
}