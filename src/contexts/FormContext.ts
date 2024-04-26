import { createContext, useContext } from "react";

interface FormContextType {
  name?: string;
  setName?: React.Dispatch<React.SetStateAction<string>>;
  photo?: string;
  setPhoto?: React.Dispatch<React.SetStateAction<string>>;
  photoFile?: File | null;
  setPhotoFile?: React.Dispatch<React.SetStateAction<File | null>>;
}

export const FormContext = createContext<FormContextType>({});

export function useForm() {
  return useContext(FormContext);
}
