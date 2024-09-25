import { ToastContainer } from "react-toastify";
import AppRoutes from "./AppRoutes/AppRoutes";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./theme";
import { GlobalStyle } from "./theme/GlobalStyles";

export default function App() {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyle />

        <AppRoutes />
        <ToastContainer theme={"light"} autoClose={2000} />
      </ThemeProvider>
    </>
  );
}
