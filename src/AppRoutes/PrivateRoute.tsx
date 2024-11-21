import { Navigate, Outlet } from "react-router-dom";
import { useAuthSelector } from "../redux/selectors";

const PrivateRoute = () => {
  const auth = useAuthSelector();
  return auth?.token ? <Outlet /> : <Navigate to="/login" />;

};

export default PrivateRoute;
