import { ReactNode, useEffect, useState } from "react";
import { FormContext } from "./FormContext";

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [name, setName] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  useEffect(() => {
    if (photoFile) {
      const photoURL = URL.createObjectURL(photoFile);
      setPhoto(photoURL);
    }
  }, [photoFile]);

  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        photo,
        setPhoto,
        photoFile,
        setPhotoFile,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
