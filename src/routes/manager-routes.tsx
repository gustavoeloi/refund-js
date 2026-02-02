import { Routes, Route } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { Dashboard } from "../pages/Dashboard";
import { RefundDetails } from "../pages/RefundDetails";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/manager" element={<Dashboard />} />
        <Route path="/refund-details" element={<RefundDetails />} />
      </Route>
    </Routes>
  );
}
