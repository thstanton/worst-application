import { useNavigate } from "react-router-dom";
import InputContainer from "../components/Input/InputContainer";
import InputLabel from "../components/Input/InputLabel";
import NextButton from "../components/NextButton";
import FormPageLayout from "../layouts/FormPageLayout";

export default function Page6() {
  const navigate = useNavigate();
  return (
    <FormPageLayout progress={40}>
      <InputContainer>
        <InputLabel htmlFor="cv">Upload your cover letter: </InputLabel>
        <input
          type="file"
          name="coverletter"
          id="coverletter"
          className="file-input file-input-bordered file-input-primary w-full"
        />
      </InputContainer>
      <NextButton onClick={() => navigate("/form7")} />
    </FormPageLayout>
  );
}
