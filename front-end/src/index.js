import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "../src/pages/Categories";
import Options from "../src/pages/Options";
import RandomPlay from "../src/pages/RandomPlay";
import CategoryPlay from "../src/pages/CategoryPlay";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/categories",
    element: <Categories />
  },
  {
    path: "/options",
    element: <Options />
  },
  {
    path: "/random_play",
    element: <RandomPlay />
  },
  {
    path: "/category_play",
    element: <CategoryPlay />
  }
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
