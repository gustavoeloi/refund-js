import { Outlet } from "react-router";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col items-center ">
      <Header />
      <Outlet />
    </div>
  );
}
