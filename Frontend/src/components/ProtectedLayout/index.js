import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const ProtectedLayout = ({ allowedRoles }) => {
  const { user } = useAuth();
  const check = () => {
    try {
      if (user.access_token && user.email && allowedRoles.find((role) =>  user.role.includes(role))) return <Outlet />; 
      else return <Navigate to="/not-found" />;   
    } catch (error) {
      return <Navigate to="/not-found" />;
    }
  }
  return (check())
}

