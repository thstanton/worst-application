import { ReactNode } from "react";

interface InputLabelProps {
  htmlFor: string;
  children: ReactNode;
  className?: string;
}

export default function InputLabel({
  htmlFor,
  children,
  className,
}: InputLabelProps) {
  return (
    <label htmlFor={htmlFor} className={`text-sm ${className}`}>
      {children}
    </label>
  );
}
