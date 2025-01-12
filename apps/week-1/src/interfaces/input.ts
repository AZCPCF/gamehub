
export interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
  error?: string;
  isError: boolean;
  type: "password" | "email" | "number" | "text";
  [key: string]: any;
}
