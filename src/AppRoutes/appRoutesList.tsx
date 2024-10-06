import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import LogInPage from "../pages/LogInPage";
import RegisterPage from "../pages/RegisterPage";
import UserLibrary from "../pages/UserLibrary";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "../providers/AuthProvider";
import PublicRoute from "./PublicRoute";
import ErrorBoundary from "./ErrorBoundary";
import DiaryPage from "../pages/Diary";
import { LibraryProvider } from "../providers/LibraryProvider";

const WelcomePage = () => {
  return <Navigate to={"/register"} />;
};

export const appRoutesList = [
  { path: "/", element: <WelcomePage /> },
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    element: (
      <AuthProvider>
        <LibraryProvider>
          <PrivateRoute />
        </LibraryProvider>
      </AuthProvider>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/library",
        element: <UserLibrary />,
      },
      {
        path: "/diary",
        element: <DiaryPage />,
        children: [{ path: ":id", element: <DiaryPage /> }],
      },
    ],
  },
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    element: (
      <AuthProvider>
        <PublicRoute />
      </AuthProvider>
    ),
    children: [
      {
        path: "/register",

        element: (
          <AuthProvider>
            <RegisterPage />
          </AuthProvider>
        ),
      },
      {
        path: "/logIn",
        element: <LogInPage />,
      },
    ],
  },
];
