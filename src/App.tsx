import { ToastContainer } from "react-toastify";
import AppRoutes from "./AppRoutes/AppRoutes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/GlobalStyles";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { baseTheme } from "./theme";

export default function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={baseTheme}>
            <GlobalStyle />

            <AppRoutes />

            <ToastContainer
              hideProgressBar={false}
              autoClose={1000}
              position={"top-right"}
              draggable={true}
              pauseOnHover={true}
            />
          </ThemeProvider>
        </PersistGate>
      </ReduxProvider>
    </>
  );
}
