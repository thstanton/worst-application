import { useNavigate } from "react-router-dom";
import NextButton from "../components/NextButton";
import FormPageLayout from "../layouts/FormPageLayout";
import FileUpload, { UploadStatus } from "../components/FileUpload";
import { useState } from "react";
import InputMessage from "../components/Input/InputMessage";
import { useForm } from "../contexts/FormContext";

export default function Page5() {
  const navigate = useNavigate();
  const { setHintIdx } = useForm();
  const [cvStatus, setCvStatus] = useState<UploadStatus>("false");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (cvStatus === "true") {
      if (setHintIdx) setHintIdx(6);
      navigate("/form6");
    } else setError(true);
  };

  return (
    <FormPageLayout progress={40}>
      <FileUpload
        labelText="Upload your cover letter:"
        fileName="another-bloody-cover-letter1293847293.pdf"
        status={cvStatus}
        setStatus={setCvStatus}
      />
      {error && (
        <InputMessage customMessage="Please upload your cover letter" />
      )}
      <NextButton onClick={handleSubmit} />
    </FormPageLayout>
  );
}
