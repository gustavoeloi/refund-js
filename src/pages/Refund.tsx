import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { file, z } from "zod";
import { useNavigate, useParams } from "react-router";

import fileSvg from "../assets/file.svg";

import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";

import { CATEGORIES } from "../utils/categories";

type Props = React.ComponentProps<"form"> & {
  isLoading?: boolean;
};

const formSchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
  category: z.string().min(1, "Selecione uma categoria"),
  amount: z.coerce.number().min(0.01, "O valor deve ser maior que zero"),
  file: z.file().optional(),
});

type FormSchemaType = z.infer<typeof formSchema>;

export function Refund({ isLoading }: Props) {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  let defaultValues: FormSchemaType;

  if (params.id) {
    defaultValues = {
      name: "Trip to NYC",
      category: "travel",
      amount: 1200.5,
    };
  } else {
    defaultValues = {
      name: "",
      category: "",
      amount: 0,
    };
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema) as Resolver<FormSchemaType>,
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    navigate("/confirm", { state: { fromRefund: true } });

    if (params.id) {
      return navigate("/manager", { replace: true });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-500 p-10 rounded-lg flex flex-col lg:min-w-lg gap-4 "
    >
      <header>
        <h1 className="text-lg text-gray-100 font-bold">Refund Request</h1>
        <p className="text-sm text-gray-200 ">
          Expense details for requesting reimbursement.
        </p>
      </header>
      <Controller
        name="name"
        control={control}
        disabled={!!params.id}
        render={({ field }) => (
          <Input {...field} legend="Nome da solicitação" />
        )}
      />
      {errors.name && (
        <p className="text-xs text-red-500">{errors.name.message}</p>
      )}
      <div className="flex gap-4">
        <Controller
          name="category"
          control={control}
          disabled={!!params.id}
          render={({ field }) => (
            <Select {...field} legend="Category">
              {Object.entries(CATEGORIES).map(([key, category]) => (
                <option key={key} value={key}>
                  {category.name}
                </option>
              ))}
            </Select>
          )}
        />

        <Controller
          name="amount"
          control={control}
          disabled={!!params.id}
          render={({ field }) => (
            <Input {...field} legend="Amount" type="number" min={0} />
          )}
        />
      </div>
      {errors.category && (
        <p className="text-xs text-red-500">{errors.category.message}</p>
      )}
      {errors.amount && (
        <p className="text-xs text-red-500">{errors.amount.message}</p>
      )}

      {params.id && (
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm  text-blue-400 mb-4">
            Receipt already uploaded. To change the receipt, please create a new
            refund request.
          </p>
          <a
            href="#"
            className="text-sm font-bold text-green-200  hover:underline flex gap-2"
          >
            <img src={fileSvg} alt="file Icon" />
            Open Existing Receipt
          </a>
        </div>
      )}

      {!params.id && (
        <Controller
          name="file"
          control={control}
          disabled={!!params.id}
          render={({ field }) => (
            <Upload
              name={field.name}
              onBlur={field.onBlur}
              onChange={(e: any) => {
                const file = e?.target?.files
                  ? e.target.files[0]
                  : e instanceof File
                    ? e
                    : undefined;
                field.onChange(file);
              }}
              fileName={field.value?.name ?? null}
              legend="Payment Receipt"
              type="file"
            />
          )}
        />
      )}

      <Button type="submit" isLoading={isLoading}>
        {params.id ? "Update Request" : "Submit Request"}
      </Button>
    </form>
  );
}
