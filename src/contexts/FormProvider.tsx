import { ReactNode, useState } from "react";
import { FormContext, PirateNinja } from "./FormContext";

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [name, setName] = useState<string>("");
  const [pirateOrNinja, setPirateOrNinja] = useState<PirateNinja>();
  const [hintIdx, setHintIdx] = useState(0);

  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        pirateOrNinja,
        setPirateOrNinja,
        hintIdx,
        setHintIdx,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
