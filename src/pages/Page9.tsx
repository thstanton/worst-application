import { useNavigate } from "react-router-dom";
import InputContainer from "../components/Input/InputContainer";
import InputLabel from "../components/Input/InputLabel";
import FormPageLayout from "../layouts/FormPageLayout";
import { PirateNinja, useForm } from "../contexts/FormContext";
import NextButton from "../components/NextButton";
import InputMessage from "../components/Input/InputMessage";
import { useState } from "react";

export default function Page9() {
  const navigate = useNavigate();
  const { pirateOrNinja, setPirateOrNinja } = useForm();
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setPirateOrNinja) setPirateOrNinja(e.target.value as PirateNinja);
  };

  const handleSubmit = () => {
    if (pirateOrNinja) navigate("/form10");
    else setError(true);
  };

  return (
    <FormPageLayout progress={90}>
      <h1 className="mb-8 text-2xl font-bold">Final Question!</h1>
      <InputContainer>
        <InputLabel htmlFor="pirateNinja">
          Do you prefer pirates 🏴‍☠️ or ninjas 🥷?
        </InputLabel>
        <div className={`form-control`}>
          <label className="label cursor-pointer">
            <span className="label-text">🏴‍☠️ Pirates</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
              checked={pirateOrNinja?.toString() === "pirates"}
              onChange={(e) => handleChange(e)}
              value="pirates"
            />
          </label>
        </div>
        <div className={`form-control`}>
          <label className="label cursor-pointer">
            <span className="label-text">🥷 Ninjas</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
              checked={pirateOrNinja?.toString() === "ninjas"}
              onChange={(e) => handleChange(e)}
              value="ninjas"
            />
          </label>
        </div>
        {error && (
          <InputMessage customMessage="Get off the fence. Pirate or ninja. Make your choice!" />
        )}
        <NextButton onClick={handleSubmit} />
      </InputContainer>
    </FormPageLayout>
  );
}
