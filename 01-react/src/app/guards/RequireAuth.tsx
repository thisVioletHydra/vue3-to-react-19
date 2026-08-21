import { Navigate, Outlet } from "react-router";

import { routes } from "#/app/routes";
import { session } from "./Session";

export function RequireAuth() {
  if (session.has() === false) {
    return <Navigate to={routes.login} replace />;
  }

  return <Outlet />;
}
