import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutesList } from "./appRoutesList";

const router = createBrowserRouter(appRoutesList, {
  basename: "/",
});

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
