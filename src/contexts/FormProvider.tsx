import { ReactNode, useState } from "react";
import { FormContext, PirateNinja } from "./FormContext";

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [name, setName] = useState<string>("");
  const [pirateOrNinja, setPirateOrNinja] = useState<PirateNinja>("pirate");

  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        pirateOrNinja,
        setPirateOrNinja,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
