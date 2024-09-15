import Home from "../pages/Home";
import LogInPage from "../pages/LogInPage";
import RegisterPage from "../pages/RegisterPage";
import UserLibrary from "../pages/UserLibrary";

export const appRoutesList = [
  { path: "/", element: <RegisterPage /> },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/logIn",
    element: <LogInPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/library",
    element: <UserLibrary />,
  },
];
