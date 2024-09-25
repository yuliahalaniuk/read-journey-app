import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const PublicRoute = () => {
  const auth = useAuth();

  return !auth?.token ? <Outlet /> : <Navigate to="/home" />;
};

export default PublicRoute;
