import { Outlet } from "react-router";

import refundLogo from "../assets/logo.svg";

export function AuthLayout() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-400 text-gray-100 p-8">
      <main className="bg-white p-8 rounded-md shadow-md flex flex-col items-center md:max-w-115.5 w-full ">
        <img src={refundLogo} alt="Logo" className="my-4" />

        <Outlet />
      </main>
    </div>
  );
}
