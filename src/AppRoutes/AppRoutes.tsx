import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutesList } from "./appRoutesList";

export const router = createBrowserRouter(appRoutesList, {
  basename: "/",
});

const AppRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoutes;
