import { createContext, useContext } from "react";

interface FormContextType {
  name?: string;
  setName?: React.Dispatch<React.SetStateAction<string>>;
  pirateOrNinja?: PirateNinja;
  setPirateOrNinja?: React.Dispatch<React.SetStateAction<PirateNinja>>;
}

export type PirateNinja = "pirate" | "ninja";

export const FormContext = createContext<FormContextType>({});

export function useForm() {
  return useContext(FormContext);
}
