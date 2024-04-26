import { useNavigate } from "react-router-dom";
import InputContainer from "../components/Input/InputContainer";
import InputLabel from "../components/Input/InputLabel";
import NextButton from "../components/NextButton";
import { useForm } from "../contexts/FormContext";
import FormPageLayout from "../layouts/FormPageLayout";

export default function Page2() {
  const navigate = useNavigate();
  const { photo, setPhotoFile } = useForm();

  const handleSubmit = () => {
    navigate("/form3");
  };

  return (
    <FormPageLayout progress={10}>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          {photo && (
            <img
              src={photo}
              alt="Your BEAUTIFUL face"
              className="mx-auto my-3 h-44 w-44 rounded-full object-cover blur-[0.5px] hue-rotate-[40deg] saturate-200"
            />
          )}
          <InputLabel htmlFor="photo">Upload a photo: </InputLabel>
          <input
            type="file"
            name="photo"
            id="photo"
            className="file-input file-input-bordered file-input-primary w-full"
            onChange={(event) =>
              setPhotoFile && setPhotoFile(event.target.files?.[0] || null)
            }
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="cv">Upload your CV: </InputLabel>
          <input
            type="file"
            name="cv"
            id="cv"
            className="file-input file-input-bordered file-input-primary w-full"
          />
        </InputContainer>
        <NextButton />
      </form>
    </FormPageLayout>
  );
}
