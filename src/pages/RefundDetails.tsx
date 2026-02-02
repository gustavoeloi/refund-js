import { useNavigate } from "react-router";
import { Input } from "../components/Input";
import { Select } from "../components/Select";

import fileSvg from "../assets/file.svg";
import { Button } from "../components/Button";

export function RefundDetails() {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/manager", { replace: true });

  return (
    <div className="bg-gray-500 rounded-lg md:min-w-3xl p-10 ">
      <h1 className="text-xl font-bold mb-3 text-gray-100">Refund Details</h1>
      <p className="text-gray-200 text-md mb-10">
        Expense details for reimbursement request
      </p>

      <div className="flex  flex-col gap-8">
        <Input legend="Nome da Solicitação" value="Gustavo" />

        <div className="flex flex-1 gap-4">
          <Select value="Food" legend="Categoria">
            <option value="Food">Food</option>
          </Select>
          <Input legend="Valor" value="34,87" />
        </div>
        <div className="flex items-center justify-center gap-2 transition ease-linear hover:opacity-75 cursor-pointer">
          <img src={fileSvg} alt="Ícone" className="w-6 h-6" />
          <span className="font-semibold text-sm text-green-100 ">
            Abrir Comprovante
          </span>
        </div>
        <Button onClick={handleNavigate}>Voltar</Button>
      </div>
    </div>
  );
}
