import { useNavigate } from "react-router-dom";
import NextButton from "../components/NextButton";
import FormPageLayout from "../layouts/FormPageLayout";
import FileUpload, { UploadStatus } from "../components/FileUpload";
import { useState } from "react";
import InputMessage from "../components/Input/InputMessage";

export default function Page5() {
  const navigate = useNavigate();
  const [cvStatus, setCvStatus] = useState<UploadStatus>("false");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (cvStatus === "true") navigate("/form6");
    else setError(true);
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
