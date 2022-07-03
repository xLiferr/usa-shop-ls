import { createContext, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { successModal } from "../utils/infoModals";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();
  const location = useLocation();

  const login = async (credentials) => {
    await setUser(credentials);
  }
  const logout = async () => {
    await setUser(null);
    if (location.pathname.includes('/web-admin') || location.pathname.includes('/mi-cuenta')) {
      navigate('/');
    }
    window.location.reload();
  }
  const value = useMemo(() => {
    return { user, login, logout }
  }, [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext;