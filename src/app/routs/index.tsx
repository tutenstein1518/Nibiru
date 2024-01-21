import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layouts } from "../routs-layouts";
// consts
import { ABOUT, AUTH, FORM, HOME, PRODUCT } from "../../shared/consts";
// pages
import { Home } from "../../pages/home";
import { Form } from "../../pages/form";
import { Autentification } from "../../pages/autentification";
import { AboutUs } from "../../pages/about";
import { Product } from "../../pages/product";

export const Routs = () => {
  const router = createBrowserRouter([
    {
      path: HOME,
      element: <Layouts />,
      children: [
        {
          path: HOME,
          element: <Home />,
        },
        {
          path: PRODUCT,
          element: <Product />,
        },
        {
          path: FORM,
          element: <Form />,
        },
        {
          path: AUTH,
          element: <Autentification />,
        },
        {
          path: ABOUT,
          element: <AboutUs />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
