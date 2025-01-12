import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { RegisterSchema, registerSchema } from "../validations/registerSchema";
import Input from "../components/Input";

const RegisterForm: FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });
  const onSubmit = async (data: RegisterSchema) => {
    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set JSON content type
      },
      body: JSON.stringify(data), // Stringify the form data
    });
    if (res?.ok) {
      alert('registered!')
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-1/3 flex justify-center items-center shadow-2xl border-black border-2 rounded-lg flex-col py-10"
    >
      <h1 className="text-3xl">register form</h1>

      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <Input
            type="text"
            id=""
            isError={Boolean(errors?.username?.message)}
            error={errors?.username?.message}
            label="username"
            {...field}
            placeholder="azcpcf"
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            type="email"
            id="email"
            isError={Boolean(errors?.email?.message)}
            error={errors?.email?.message}
            label="email"
            {...field}
            placeholder="azcpcf@test.com"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            type="password"
            id="password"
            isError={Boolean(errors?.password?.message)}
            error={errors?.password?.message}
            label="password"
            {...field}
            placeholder="oooooooo"
          />
        )}
      />
      <button
        className="w-8/12 h-10 rounded-md shadow-md border-orange-500 border-2 hover:bg-orange-500 transition-colors hover:text-white"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};
export default RegisterForm;
