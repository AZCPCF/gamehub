import { FC } from "react";
import { Controller } from "react-hook-form";
import { ControlProps } from "../interfaces/ControlProps";
import { LoginSchema } from "../validations/loginSchema";
import Input from "./Input";
const Control: FC<ControlProps<LoginSchema>> = ({
  control,
  name,
  errors,
  //   defaultValue,
  //   rules,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <Input {...field} placeholder={name} />}
      />
      {Boolean(errors[name]?.message) && (
        <p className="text-red-600 p-2 !text-left">{errors[name]?.message}</p>
      )}
    </>
  );
};
export default Control;
