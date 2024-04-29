import { ZodIssue } from "zod";

interface InputMessageProps {
  message?: ZodIssue[];
  path?: string;
  customMessage?: string;
  className?: string;
}

export default function InputMessage({
  message,
  path,
  customMessage,
  className,
}: InputMessageProps) {
  return customMessage ? (
    <p className={`text-sm text-red-500 ${className}`}>{customMessage}</p>
  ) : (
    <>
      {message &&
        message
          .filter((m) => m.path[0] === path)
          .map((m) => <p className="text-sm text-red-500">{m.message}</p>)}
    </>
  );
}
