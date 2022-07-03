import React, { useMemo, useState } from "react";
import { successModal, errorModal } from "../../../utils/infoModals";
import "./style.css";
import { useAuth } from "../../../hooks/useAuth";
import { Footer } from '../../../components/Footer'
import { Header } from '../../../components/Header'
import { Categorys } from '../../../components/Categorys'
import { ProfileMenu } from "../ProfileMenu";
import showPassIcon from "../../../images/showPass.png";
import hidePassIcon from "../../../images/hidePass.png";
import axios from "axios";

export const ChangePassword = () => {
  const { user, login } = useAuth();
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [showPass3, setShowPass3] = useState(false);
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("")
  const [messagePass, setMessagePass] = useState("Ingresa una nueva contraseña.");
  const [canChange, setCanChange] = useState(false);

  const handleConfirmPass = useMemo(() => {
    try {
      if (confirmPass === newPass) {
        setMessagePass("Las contraseñas coinciden.");
        setCanChange(true);
      } else {
        setMessagePass("Las contraseñas no coinciden.")
        setCanChange(false);
      }
    } catch (error) {
      setMessagePass("Ingresa una nueva contraseña.");
      setCanChange(false);
    }
  }, [confirmPass, newPass])
  const handleChange = async (e) => {
    e.preventDefault();
    if (canChange) {
      // FALTA UNIR PARA EL BACKEND!!!!!!!!!!!!!!!!!!!!!!!!
      await login({ email: user.email, password: newPass, role: user.role, access_token: user.access_token });
      await successModal("Contraseña cambiada!", "Usted a cambiado su contraseña exitosamente.", true, 3000);
      window.location.reload();
    } else {
      errorModal("", "Las contraseñas no coinciden, por favor ingresa dos veces la misma contraseña.")
    }
  }
  return (
    <>
      <Header />
      <Categorys />
      <ProfileMenu />
      <div className="changePass-content">
        <h2>Cambiar Contraseña</h2>
        <form className="changePass-form" onSubmit={handleChange}>
          <div className="changePass-section">
            <h3>Contraseña actual</h3>
            <div className="changePass-input">
              <input type={showPass1 ? ("text") : ("password")} defaultValue={user.password} disabled/>
              <img src={showPass1 ? (hidePassIcon) : (showPassIcon)} alt="" onClick={() => setShowPass1(!showPass1)}/>
            </div>
          </div>
          <div className="changePass-section">
            <h3>Contraseña nueva</h3>
            <div className="changePass-input">
              <input required type={showPass2 ? ("text") : ("password")} defaultValue={newPass} onChange={(e) => setNewPass(e.target.value)}/>
              <img src={showPass2 ? (hidePassIcon) : (showPassIcon)} alt="" onClick={() => setShowPass2(!showPass2)}/>
            </div>
          </div>
          <div className="changePass-section">
            <h3>Confirmar contraseña nueva</h3>
            <div className="changePass-input">
              <input required type={showPass3 ? ("text") : ("password")} onChange={(e) => setConfirmPass(e.target.value)} />
              <img src={showPass3 ? (hidePassIcon) : (showPassIcon)} alt="" onClick={() => setShowPass3(!showPass3)}/>
            </div>
          </div>
          <div className="changePass-section">
            <p>{messagePass}</p>
          </div>
          <div className="changePass-section">
            <button>Guardar</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}