import { FC, useState } from "react";
import { InputProps } from "../interfaces/InputProps";

const Input: FC<InputProps> = ({ placeholder, className, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [focus,setFocus] = useState(false)
  return (
    <div className="relative w-full m-2">
      <input
        {...props}
        id={placeholder}
        className={`p-2 w-full rounded-md border-2 border-[#4b4959] outline-none bg-[#242424] transition-colors duration-250 focus:border-[#646cff] ${className}`}
        onFocus={() => {setIsFocused(true)
          setFocus(true)
        }}
        onBlur={(e) => {setIsFocused(e.target.value !== "")
          setFocus(false)
        }}
      />
      <label htmlFor={placeholder}
        className={`absolute left-2 px-2 py-[2px] transition-all duration-300 bg-[#242424] ${
          isFocused
            ? "text-xs top-[-8px] text-[#646cff] !py-0"
            : "text-sm top-2 "
        } ${!focus && isFocused && "text-[#e2e2e2]"}`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
