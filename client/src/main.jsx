import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App.jsx";
import Favorites from "./pages/Favorites/FavoritesPage.jsx";
import Delivery from "./pages//Delivery/DeliveryPage.jsx";
import Street from "./pages/Street/Street.jsx";
import "./index.css";

// This array defined the pages of an app
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/delivery",
    element: <Delivery />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/street",
    element: <Street />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
