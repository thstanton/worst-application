import { ChangeEvent } from "react";

interface InputProps {
  type?: string;
  name: string;
  id: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  defaultValue?: string;
  required?: boolean;
}

export default function Input({
  type = "text",
  name,
  id,
  placeholder,
  className,
  value,
  onChange,
  disabled = false,
  defaultValue,
  required,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`input input-bordered w-full ${className}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
      defaultValue={defaultValue}
      required={required}
    />
  );
}
