import { Navigate, Outlet } from "react-router-dom";
import { useAuthSelector } from "../redux/selectors";

const PublicRoute = () => {
  const auth = useAuthSelector();

  return auth?.token ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;
