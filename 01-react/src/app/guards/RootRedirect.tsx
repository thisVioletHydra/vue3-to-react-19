import { Navigate } from "react-router";

import { routes } from "#/app/routes";
import { session } from "./Session";

export function RootRedirect() {
  const to = session.has() ? routes.adminPanel : routes.login;

  return <Navigate to={to} replace />;
}
