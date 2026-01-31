import confirmSvg from "../assets/ok.svg";
import { Button } from "../components/Button";

import { Navigate, useLocation, useNavigate } from "react-router";

export function Confirm() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state?.fromRefund) {
    return <Navigate to="/refund" replace />;
  }

  function handleNav() {
    navigate("/refund", { replace: true });
  }

  return (
    <main className="bg-gray-500 gap-10 p-10 flex flex-col  lg:max-w-lg rounded-lg">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-3xl text-green-100  font-bold text-center">
          Request submitted successfully!
        </h1>
        <img src={confirmSvg} alt="Confirmado" className="h-28" />
        <p className="text-center text-sm text-gray-200">
          Now you have to wait for approval. Your request is being reviewed, so
          please be patient, the financial team will get back to you soon.
        </p>
      </div>
      <Button onClick={handleNav}>Submit another request</Button>
    </main>
  );
}
