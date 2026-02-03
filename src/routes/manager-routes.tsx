import { Routes, Route } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { Dashboard } from "../pages/Dashboard";
import { RefundDetails } from "../pages/RefundDetails";
import { Refund } from "../pages/Refund";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/manager" element={<Dashboard />} />
        <Route path="/refund-details" element={<RefundDetails />} />
        <Route path="/refund/:id" element={<Refund />} />
      </Route>
    </Routes>
  );
}
