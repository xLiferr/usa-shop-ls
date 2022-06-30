import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

export const useAuth = () => {
  const { user, login, logout } = useContext(AuthContext);
  return { user, login, logout }
}
