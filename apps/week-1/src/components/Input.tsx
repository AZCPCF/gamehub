import { FC } from "react";
import { InputProps } from "../interfaces/input";

const Input: FC<InputProps> = ({
  id,
  type,
  error,
  isError,
  label,
  placeholder,
  ...props
}) => {
    console.log(error)
  return (
    <div className="flex flex-col w-8/12 mb-4">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border-2 text-orange-600 border-orange-500 bg-inherit outline-none p-2 rounded-lg placeholder:text-[#787777]"
        {...props}
      />
      <p className="text-red-600">{isError &&error}</p>
    </div>
  );
};
export default Input;
