import { ReactNode } from "react";

interface InputContainerProps {
  children?: ReactNode;
  className?: string;
}

export default function InputContainer({
  children,
  className,
}: InputContainerProps) {
  return <div className={`mb-3 ${className}`}>{children}</div>;
}
