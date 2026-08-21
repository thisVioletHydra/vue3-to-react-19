import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { router } from "#/app/router";
import "./app/styles/index.css";

createRoot(document.querySelector("#app")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
