import { Routes, Route } from "react-router";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { AuthLayout } from "../components/AuthLayout";

import { NotFound } from "../pages/NotFound";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
