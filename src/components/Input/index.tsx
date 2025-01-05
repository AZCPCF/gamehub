import React from "react";

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  className?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error,
  required = false,
  className = "",
}) => {
  return (
    <div className={`w-full ${className} my-2`}>
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full px-2 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;
