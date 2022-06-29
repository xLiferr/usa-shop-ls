import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./style.css";
import logo from "../../images/logo.png";
import close from "../../images/close.png";

export const RegisterModal = ({ closeModal }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [name, setName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [rut, setRut] = useState("");
    const [telephone, setTelephone] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/user/register',
            {
                username: email,
                password: password,
                name: name,
                second_name: secondName,
                rut: rut,
                telephone: telephone
            }
        ).then((response) => {
            console.log(response)
            if (response.status === 201) {
              Swal.fire({
                title: 'Registro exitoso!',
                text: 'Usted se ha registrado correctamente en USA SHOP.',
                icon: 'success',
                confirmButtonText: 'Continuar',
                confirmButtonColor: '#00AFB9',
              })
            } else if (response.status >= 400) {
              Swal.fire({
                title: 'Error inesperado!',
                text: 'Hubo un error al intentar modificar el producto, Inténtelo nuevamente.',
                icon: 'warning',
                confirmButtonText: 'Continuar',
                confirmButtonColor: '#00AFB9',
              })
            }
          }).catch((error) => {
            Swal.fire({
              title: 'Error inesperado!',
              text: 'Hubo un error al intentar eliminar el producto, Inténtelo nuevamente.',
              icon: 'error',
              confirmButtonText: 'Continuar',
              confirmButtonColor: '#00AFB9',
            })
          })
    }
    return (
        <div className="rm-bg">
            <div className="rm-border">
                <div className="rm-content">
                    <button className="rm-close" onClick={() => closeModal(false)} >
                        <img src={close} alt="" />
                    </button>
                    <div className="rm-header">
                        <div className="rm-header-title"><h3>¡Bienvenido!</h3></div>
                        <div className="rm-header-logo"><img src={logo} alt="" /></div>
                    </div>
                    <div className="rm-form">
                        <div className="rm-input">
                            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label>Correo electrónico</label>
                        </div>
                        <div className="rm-input">
                            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label>Contraseña</label>
                        </div>
                        <div className="rm-input">
                            <input type="password" required value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                            <label>Confirmar contraseña</label>
                        </div>
                        <div className="rm-input">
                            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                            <label>Nombre</label>
                        </div>
                        <div className="rm-input">
                            <input type="text" required value={secondName} onChange={(e) => setSecondName(e.target.value)} />
                            <label>Apellidos</label>
                        </div>
                        <div className="rm-input">
                            <input type="text" required value={rut} onChange={(e) => setRut(e.target.value)} />
                            <label>RUT</label>
                        </div>
                        <div className="rm-input">
                            <input type="tel" required value={telephone}  onChange={(e) => setTelephone(e.target.value)} />
                            <label>Teléfono (Ej. +56912345678)</label>
                        </div>
                        <div className="rm-buttons">
                            <div className="rm-button"><button onClick={handleRegister}>Registrar</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}