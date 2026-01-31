import logo from "../assets/logo.svg";
import logOut from "../assets/logout.svg";

export function Header() {
  return (
    <header className="w-full flex justify-between m-8 px-8 md:min-w-115.5">
      <img src={logo} alt="Logo" className="h-9 my-8" />
      <div className="flex items-center justify-between gap-3">
        <span className="text-md font-semibold text-gray-200">
          Olá, Gustavo!
        </span>
        <img
          src={logOut}
          alt="Ícone de logout"
          className="cursor-pointer hover:opacity-75 transition ease-linear"
        />
      </div>
    </header>
  );
}
