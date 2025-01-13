import { FC } from "react";
import { FormProps } from "../interfaces/FormProps";
import { Controller, useForm } from "react-hook-form";
import { formSchema, FormSchema } from "../validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";

const Form: FC<FormProps> = ({ className }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });
  const onSumbit = async (data: FormSchema) => {
    console.log(data)
  };
  return (
    <form onSubmit={handleSubmit(onSumbit)} className={`${className} flex flex-col *:m-3 *:p-1 w-80`}>
      <Controller
        control={control}
        name="username"
        render={({ field }) => <input {...field} placeholder={"username"} className="w-full"/>}
      />
      {Boolean(errors?.username?.message) && <p className="text-red-600 w-full" >{errors?.username?.message}</p>}
      
      <Controller
        control={control}
        name="password"
        render={({ field }) => <input {...field} placeholder={"password"} className="w-full"/>}
      />
      {Boolean(errors?.password?.message) && <p className="text-red-600 w-full" >{errors?.password?.message}</p>}
      <button className="w-full">submit</button>
    </form>
  );
};

export default Form;
