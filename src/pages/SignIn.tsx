import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Toaster } from "react-hot-toast";

const formSchema = z.object({
  email: z.email("E-mail inválido"),
  password: z
    .string("Senha obrigatória")
    .min(6, "A senha deve conter 6 caracteres"),
});

type FormSchemaType = z.infer<typeof formSchema>;

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4"
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            legend="E-mail"
            placeholder="user@email.com"
            type="email"
            {...field}
          />
        )}
      />
      {errors.email && (
        <span className="text-sm text-red-400 ">{errors.email?.message}</span>
      )}
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            legend="Password"
            placeholder="123456"
            type="password"
            {...field}
          />
        )}
      />
      {errors.password && (
        <span className="text-sm text-red-400">{errors.password?.message}</span>
      )}

      <Button type="submit">Submit</Button>

      <a
        href="/register"
        className=" text-center my-7 font-semibold hover:text-green-100 transition ease-linear "
      >
        Sign up
      </a>
      <Toaster position="bottom-right" />
    </form>
  );
}
