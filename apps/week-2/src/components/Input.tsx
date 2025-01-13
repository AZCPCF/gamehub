import { FC } from "react";
import { InputProps } from "../interfaces/InputProps";

const Input: FC<InputProps> = ({ placeholder, className, ...props }) => {
  return (
    <input
      placeholder={placeholder}
      {...props}
      className={`p-2 m-2 w-full rounded-md border-2 border-transparent outline-none transition-colors duration-[250ms] focus:border-[#646cff] ${className}`}
    />
  );
};
export default Input;
