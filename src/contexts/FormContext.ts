import { createContext, useContext } from "react";

interface FormContextType {
  name?: string;
  setName?: React.Dispatch<React.SetStateAction<string>>;
  pirateOrNinja?: PirateNinja;
  setPirateOrNinja?: React.Dispatch<React.SetStateAction<PirateNinja>>;
  hintIdx?: number;
  setHintIdx?: React.Dispatch<React.SetStateAction<number>>;
}

export type PirateNinja = "pirate" | "ninja" | undefined;

export const FormContext = createContext<FormContextType>({});

export function useForm() {
  return useContext(FormContext);
}
