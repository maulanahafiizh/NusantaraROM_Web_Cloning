import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/main-page";
import ErrorPage from "./error-page";
import About from "./routes/about-page";
import Help from "./routes/help-pages";
import Wiki from "./routes/wiki-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "help",
    element: <Help />,
  },
  {
    path: "wiki",
    element: <Wiki />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
