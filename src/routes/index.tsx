import { BrowserRouter } from "react-router";

import { Loading } from "../components/Loading";

import { AuthRoutes } from "./auth-routes";
import { ManagerRoutes } from "./manager-routes";
import { EmployeeRoutes } from "./employee-routes";

const isLoading = true;

export function Routes() {
  return (
    <BrowserRouter>{isLoading ? <Loading /> : <AuthRoutes />}</BrowserRouter>
  );
}
