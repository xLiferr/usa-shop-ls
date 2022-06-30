import { createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../utils/useLocalStorage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = async (credentials) => {
    await setUser(credentials);
    navigate("/")
  }
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true })
  }
  const value = useMemo(() => {
    return { user, login, logout }
  }, [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext;