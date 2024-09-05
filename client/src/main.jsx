import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Delivery from "./pages/Delivery/DeliveryPage.jsx";
import Street from "./pages/Street/StreetPage.jsx";
import Authorization from "./pages/Authorization/Authorization.jsx";
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
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/street",
    element: <Street />,
  },
  {
    path: "/auth",
    element: <Authorization />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
