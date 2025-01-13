import { Control, FieldErrors, FieldValues, Path } from "react-hook-form";

export interface ControlProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  errors:FieldErrors<T>;
  rules?: Record<string, any>;
  defaultValue?: any;
}
