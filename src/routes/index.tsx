import { BrowserRouter } from "react-router";

import { Loading } from "../components/Loading";

import { AuthRoutes } from "./auth-routes";
import { ManagerRoutes } from "./manager-routes";
import { EmployeeRoutes } from "./employee-routes";

const isLoading = true;

const session = {
  user: {
    role: "manager", // Possible values: 'manager', 'employee'
  },
};

export function Routes() {
  function Route() {
    switch (session.user.role) {
      case "manager":
        return <ManagerRoutes />;
      case "employee":
        return <EmployeeRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
