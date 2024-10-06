import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutesList } from "./appRoutesList";
import { ModalProvider } from "../providers/ModalProvider";

const router = createBrowserRouter(appRoutesList, {
  basename: "/",
});

const AppRoutes = () => {
  return (
    <ModalProvider>
      <RouterProvider router={router} />{" "}
    </ModalProvider>
  );
};

export default AppRoutes;
