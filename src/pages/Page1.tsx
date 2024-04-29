import Input from "../components/Input/Input";
import InputContainer from "../components/Input/InputContainer";
import InputLabel from "../components/Input/InputLabel";
import NextButton from "../components/NextButton";
import { useForm } from "../contexts/FormContext";
import FormPageLayout from "../layouts/FormPageLayout";
import { useNavigate } from "react-router-dom";
import InputMessage from "../components/Input/InputMessage";
import { useState } from "react";

export default function Page1() {
  const navigate = useNavigate();
  const { name, setName } = useForm();
  const [confirmed, setConfirmed] = useState(false);
  const [nameError, setNameError] = useState("");
  const [termsError, setTermsError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && confirmed) {
      navigate("/form2");
    }
    confirmed
      ? setTermsError("")
      : setTermsError("Please confirm before proceeding");
    name ? setNameError("") : setNameError("Please enter your name");
  };

  return (
    <FormPageLayout progress={5}>
      <form
        className="flex w-full max-w-screen-md flex-col"
        onSubmit={handleSubmit}
      >
        <InputContainer>
          <InputLabel htmlFor="name">Name: </InputLabel>
          <Input
            id="name"
            name="name"
            placeholder="Hapless Jobseeker"
            value={name}
            onChange={(e) => setName && setName(e.target.value)}
          />
          {!name && <InputMessage customMessage={nameError} />}
        </InputContainer>
        <InputContainer>
          <p className="mb-3">
            Please note that this is an <strong>entry-level</strong> role.
          </p>
          <p className="flex items-center gap-3">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="checkbox"
              onChange={() => setConfirmed(!confirmed)}
            />
            <span>
              I confirm that I have <strong>at least</strong> 2 years of{" "}
              <strong>commercial</strong> experience.
            </span>
          </p>
          {!confirmed && <InputMessage customMessage={termsError} />}
        </InputContainer>
        <NextButton />
      </form>
    </FormPageLayout>
  );
}
