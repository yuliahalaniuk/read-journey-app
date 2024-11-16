import { ToastContainer } from "react-toastify";
import AppRoutes from "./AppRoutes/AppRoutes";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./theme";
import { GlobalStyle } from "./theme/GlobalStyles";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";


export default function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={baseTheme}>
            <GlobalStyle />

            <AppRoutes />
            <ToastContainer theme={"light"} autoClose={2000} />
          </ThemeProvider>
        </PersistGate>
      </ReduxProvider>
    </>
  );
}
