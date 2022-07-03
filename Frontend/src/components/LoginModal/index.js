import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { successModal } from "../../utils/infoModals";
import axios from "axios";
import Swal from "sweetalert2";
import "./style.css";
// Components
import { RegisterModal } from '../RegisterModal';
// Icons
import logo from "../../images/logo.png";
import close from "../../images/close.png";

export const LoginModal = ({ closeModal }) => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const confirmLogin = async (access_token, role) => {
    await successModal('Sesión iniciada!', 'Usted ha iniciado sesión correctamente.', false, 3000);
    await login({ email, password, role, access_token });
    setEmail("");
    setPassword("");
    closeModal(false);
    window.location.reload();
  }

  const denyLogin = () => {
    Swal.fire({
      title: 'Sesión no iniciada',
      text: 'Su correo electrónico y/o contraseña no coinciden.',
      icon: 'error',
      confirmButtonText: 'Continuar',
      confirmButtonColor: '#00AFB9',
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/auth/login', {
      username: email,
      password: password
    }).then((response) => {
      if (response.status === 201) confirmLogin(response.data.access_token, "Administrador");
    }).catch((error) => {
      if (error.response.status === 401) denyLogin();
    })
  }

  return (
    <div className="lm-bg">
      <div className="lm-border">
        <div className="lm-content">
          <button className="lm-close" onClick={() => closeModal(false)} >
            <img src={close} alt="" />
          </button>
          <div className="lm-header">
            <div className="lm-header-title"><h3>¡Bienvenido!</h3></div>
            <div className="lm-header-logo"><img src={logo} alt="" /></div>
          </div>
          <form className="lm-form" onSubmit={handleLogin}>
            <div className="lm-input">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <label>Correo electrónico</label>
            </div>
            <div className="lm-input">
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              <label>Contraseña</label>
            </div>
            <div className="lm-buttons">
              <div className="lm-button"><button type="submit">Ingresar</button></div>
              <div className="lm-others">
                <button>¿Olvidaste tu contraseña?</button>
                <button className="openModal"
                  onClick={() => {
                    setOpenModal(true);
                  }}>
                  Registrarse
                </button>
                {openModal && <RegisterModal closeModal={setOpenModal} />}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}