import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import api from "../lib/api";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";

const formSchema = z
  .object({
    name: z.string().min(3, "Name is required"),
    email: z.email("Invalid E-mail"),
    password: z
      .string("Password is required")
      .min(6, "The field must contain at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "The field must contain at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The password does not match",
    path: ["confirmPassword"],
  });

type FormSchemaType = z.infer<typeof formSchema>;

export function SignUp() {
  const navigate = useNavigate();

  const alertSuccess = () => toast.success("Usuário criado!");
  const alertDenied = (message: string) => toast.error(message);

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

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      const { email, name, password } = data;

      await api.post("/users", {
        name,
        email,
        password,
      });

      alertSuccess();
      navigate("/login");
    } catch (error: any) {
      if (error.response) {
        const messageAPI = error.response.data.message;

        alertDenied(messageAPI);
      } else {
        console.log("Erro: ", error.message);
      }
    }
  };

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

      <Toaster position="bottom-right" />
    </form>
  );
}
