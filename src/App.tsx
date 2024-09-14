import { ToastContainer } from "react-toastify";
import AppRoutes from "./AppRoutes/AppRoutes";

export interface AppProps {}
export default function App(_props: AppProps) {
  return (
    <>
      <AppRoutes />
      <ToastContainer theme={"light"} autoClose={2000} />
    </>
  );
}
