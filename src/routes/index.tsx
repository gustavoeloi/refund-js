import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./auth-routes";
import { ManagerRoutes } from "./manager-routes";
import { EmployeeRoutes } from "./employee-routes";
import { useAuth } from "../hooks/useAuth";

export function Routes() {
  const { user, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <BrowserRouter>
      {!user ? (
        <AuthRoutes />
      ) : user.role === "manager" ? (
        <ManagerRoutes />
      ) : (
        <EmployeeRoutes />
      )}
    </BrowserRouter>
  );
}
