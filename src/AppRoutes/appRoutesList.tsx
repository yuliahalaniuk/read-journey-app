import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import LogInPage from "../pages/auth/LogInPage";
import RegisterPage from "../pages/auth/RegisterPage";
import UserLibrary from "../pages/UserLibrary";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ErrorBoundary from "./ErrorBoundary";
import DiaryPage from "../pages/Diary";
import { ModalProvider } from "../providers/ModalProvider";
import GlobalSpinner from "../atoms/components/GlobalSpinner";

export const appRoutesList = [
  {
    path: "/",
    element: (
      <>
        <Navigate to="/home" replace />
        <GlobalSpinner />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <ModalProvider>
        <PrivateRoute />
      </ModalProvider>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "library",

        element: <UserLibrary />,
      },
      {
        path: "diary",
        element: <DiaryPage />,

        children: [
          {
            path: ":id",
            element: <DiaryPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: (
      <ModalProvider>
        <PublicRoute />
      </ModalProvider>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "logIn",
        element: <LogInPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorBoundary />,
  },
];
