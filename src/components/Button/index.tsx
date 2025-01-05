import { FC } from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    disabled?:boolean;
    className?:string;
  }
  
  const Button: FC<ButtonProps> = ({ text, onClick, variant = 'primary',disabled=false }) => {
    const baseStyles = 'w-full my-2 px-4 py-2 rounded font-medium focus:outline-none';
    const variantStyles =
      variant === 'primary'
        ? 'bg-blue-500 text-white hover:bg-blue-600'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  
    return (
      <button disabled={disabled} className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
        {text}
      </button>
    );
  };
  
  export default Button;
  