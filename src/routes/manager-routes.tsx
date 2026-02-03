import { Routes, Route } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { Dashboard } from "../pages/Dashboard";
<<<<<<< HEAD

=======
import { RefundDetails } from "../pages/RefundDetails";
>>>>>>> 812237dd378d791204e2503ddabdd29da1f05158
import { Refund } from "../pages/Refund";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/manager" element={<Dashboard />} />
<<<<<<< HEAD
=======
        <Route path="/refund-details" element={<RefundDetails />} />
>>>>>>> 812237dd378d791204e2503ddabdd29da1f05158
        <Route path="/refund/:id" element={<Refund />} />
      </Route>
    </Routes>
  );
}
