import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

const formSchema = z
  .object({
    name: z.string().min(3, "Nome obrigatório"),
    email: z.email("E-mail inválido"),
    password: z
      .string("Senha obrigatória")
      .min(6, "O campo deve conter 6 caracteres"),
    confirmPassword: z.string().min(6, "O campo deve conter 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type FormSchemaType = z.infer<typeof formSchema>;

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4"
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input legend="Name" placeholder="Your Name" type="text" {...field} />
        )}
      />
      {errors.name && (
        <span className="text-sm text-red-400 ">{errors.name.message}</span>
      )}
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
        <span className="text-sm text-red-400">{errors.email.message}</span>
      )}

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            legend="Password"
            placeholder="******"
            type="password"
            {...field}
          />
        )}
      />
      {errors.password && (
        <span className="text-sm text-red-400">{errors.password.message}</span>
      )}

      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <Input
            legend="Confirm Password"
            placeholder=""
            type="password"
            {...field}
          />
        )}
      />
      {errors.confirmPassword && (
        <span className="text-sm text-red-400">
          {errors.confirmPassword.message}
        </span>
      )}

      <Button type="submit">Sign Up</Button>

      <a
        href="/login"
        className=" text-center my-7 font-semibold hover:text-green-100 transition ease-linear "
      >
        I already have an account
      </a>
    </form>
  );
}
