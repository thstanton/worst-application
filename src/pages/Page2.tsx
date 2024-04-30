import { useNavigate } from "react-router-dom";
import NextButton from "../components/NextButton";
import FormPageLayout from "../layouts/FormPageLayout";
import { useState } from "react";
import FileUpload, { UploadStatus } from "../components/FileUpload";
import { useForm } from "../contexts/FormContext";

export default function Page2() {
  const navigate = useNavigate();
  const [cvStatus, setCvStatus] = useState<UploadStatus>("false");
  const { setHintIdx } = useForm();

  const handleSubmit = () => {
    if (setHintIdx) setHintIdx(2);
    navigate("/form3");
  };

  return (
    <FormPageLayout progress={10}>
      <FileUpload
        setStatus={setCvStatus}
        status={cvStatus}
        labelText="Upload your CV"
        fileName="CV2-2023_v4_use-this.pdf"
      />
      <NextButton onClick={handleSubmit} disabled={cvStatus !== "true"} />
    </FormPageLayout>
  );
}
