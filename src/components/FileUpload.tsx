import React from "react";
import { FaFilePdf } from "react-icons/fa";
import InputContainer from "./Input/InputContainer";
import InputLabel from "./Input/InputLabel";

export type UploadStatus = "false" | "loading" | "true";

interface FileUploadProps {
  setStatus: React.Dispatch<React.SetStateAction<UploadStatus>>;
  status: UploadStatus;
  fileName: string;
  labelText: string;
}

export default function FileUpload({
  setStatus,
  status,
  labelText,
  fileName,
}: FileUploadProps) {
  const handleButton = () => {
    setStatus("loading");
    setTimeout(() => {
      setStatus("true");
    }, 2000);
  };

  return (
    <InputContainer className="w-full">
      <InputLabel htmlFor="cv">{labelText}</InputLabel>
      <div className="flex w-full items-center justify-start gap-2 rounded-xl border-[1px] border-solid border-primary bg-white md:min-w-96">
        <button className="btn btn-primary w-24" onClick={handleButton}>
          Upload
        </button>
        <div className="flex w-full items-center gap-2 pr-6">
          {status === "true" ? (
            <span className="flex items-center gap-2">
              <FaFilePdf className="text-2xl" /> {fileName}
            </span>
          ) : status === "loading" ? (
            <span className="loading loading-dots"></span>
          ) : (
            ""
          )}
        </div>
      </div>
    </InputContainer>
  );
}
