import { useNavigate } from "react-router-dom";
import InputContainer from "../components/Input/InputContainer";
import InputLabel from "../components/Input/InputLabel";
import FormPageLayout from "../layouts/FormPageLayout";
import { PirateNinja, useForm } from "../contexts/FormContext";
import NextButton from "../components/NextButton";

export default function Page9() {
  const navigate = useNavigate();
  const { pirateOrNinja, setPirateOrNinja } = useForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setPirateOrNinja) setPirateOrNinja(e.target.value as PirateNinja);
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
        <NextButton onClick={() => navigate("/form10")} />
      </InputContainer>
    </FormPageLayout>
  );
}
