import { ZodIssue } from "zod";

interface InputMessageProps {
  message?: ZodIssue[];
  path?: string;
  customMessage?: string;
}

export default function InputMessage({
  message,
  path,
  customMessage,
}: InputMessageProps) {
  return customMessage ? (
    <p className="text-sm text-red-500">{customMessage}</p>
  ) : (
    <>
      {message &&
        message
          .filter((m) => m.path[0] === path)
          .map((m) => <p className="text-sm text-red-500">{m.message}</p>)}
    </>
  );
}
