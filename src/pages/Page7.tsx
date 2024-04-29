import { useState } from "react";
import InputContainer from "../components/Input/InputContainer";
import InputLabel from "../components/Input/InputLabel";
import FormPageLayout from "../layouts/FormPageLayout";
import RadioButton from "../components/RadioButton";
import NextButton from "../components/NextButton";
import InputMessage from "../components/Input/InputMessage";
import { useNavigate } from "react-router-dom";

const rangeValueLabels = [
  "£0",
  "£5,000",
  "£10,000",
  "£15,000",
  "£16,000",
  "£17,000",
  "£18,000",
  "£19,000",
  "£20,000",
  "£20,100",
  "£20,200",
  "£20,300",
  "£20,400",
  "£20,500",
  "£20,550",
  "£20,600",
  "£20,650",
  "£20,700",
  "£20,750",
  "£20,800",
  "£20,850",
  "£20,900",
  "£20,950",
  "£21,000",
  "£21,010",
  "£21,020",
  "£21,030",
  "£21,040",
  "£21,050",
  "£21,060",
  "£21,070",
  "£21,080",
  "£21,090",
  "£21,100",
  "£21,110",
  "£21,120",
  "£21,130",
  "£21,140",
  "£21,150",
  "£21,160",
  "£21,170",
  "£21,180",
  "£21,190",
  "£21,200",
  "£21,210",
  "£21,220",
  "£21,230",
  "£21,240",
  "£21,250",
  "£21,260",
  "£21,270",
  "£21,280",
  "£21,290",
  "£21,300",
  "£21,301",
  "£21,302",
  "£21,303",
  "£21,304",
  "£21,305",
  "£21,306",
  "£21,307",
  "£21,308",
  "£21,309",
  "£21,310",
  "£21,311",
  "£21,312",
  "£21,313",
  "£21,314",
  "£21,315",
  "£21,316",
  "£21,317",
  "£21,318",
  "£21,319",
  "£21,320",
  "£21,321",
  "£21,322",
  "£21,323",
  "£21,324",
  "£21,325",
  "£21,326",
  "£21,327",
  "£21,328",
  "£21,329",
  "£21,330",
  "NaN",
];

export default function Page7() {
  const navigate = useNavigate();
  const [rangeValue, setRangeValue] = useState(0);
  const maxRange = rangeValueLabels.length - 1;
  const [remoteOptions, setRemoteOptions] = useState<string[]>([
    "Office",
    "Hybrid",
    "Remote",
  ]);
  const [salaryError, setSalaryError] = useState<boolean>(false);

  const handleOptions = (option: string, idx: number) => {
    if (option !== "Office") {
      const newOptions = [...remoteOptions];
      while (newOptions[idx] !== "Office") {
        newOptions.unshift(newOptions.pop()!);
      }
      setRemoteOptions(newOptions);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rangeValue === maxRange) {
      setSalaryError(true);
    } else {
      navigate("/form8");
    }
  };

  return (
    <FormPageLayout progress={80}>
      <form
        className="flex w-full max-w-screen-md flex-col items-center"
        onSubmit={handleSubmit}
      >
        <InputContainer className="mb-8 w-full">
          <InputLabel htmlFor="salaryRange">
            What is your ideal salary?
          </InputLabel>
          <div className="flex justify-between gap-2">
            <input
              type="range"
              min={0}
              max={maxRange}
              className={`
                range 
                ${
                  rangeValue < maxRange * 0.5
                    ? "range-primary"
                    : rangeValue > maxRange * 0.5 && rangeValue < maxRange
                      ? "range-warning"
                      : "range-error"
                }`}
              id="salaryRange"
              value={rangeValue}
              onChange={(e) => setRangeValue(Number(e.target.value))}
            />
            <p className="w-24 text-right text-sm">
              {rangeValueLabels[rangeValue]}
            </p>
          </div>
          {salaryError && (
            <InputMessage customMessage="The amount you have selected is greater than any possible value you could have. Please be reasonable." />
          )}
        </InputContainer>
        <InputContainer className="w-full">
          <InputLabel htmlFor="radio-10">
            What is your preferred working environment?
          </InputLabel>
          {remoteOptions.map((option, idx) => (
            <RadioButton
              key={option}
              className="w-full max-w-screen-md"
              checked={option === "Office"}
              onChange={() => handleOptions(option, idx)}
            >
              {option}
            </RadioButton>
          ))}
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="select">
            Our philosophy is work hard, work hard. How do you feel about
            working weekends?
          </InputLabel>
          <select
            name="select"
            id="select"
            className="select select-bordered w-full"
          >
            <option value="select" selected disabled>
              Select an option
            </option>
            <option value="option1">Sounds cool</option>
            <option value="option2">
              I can't relax if I'm not bringing value to customers
            </option>
            <option value="option3">What's a weekend?</option>
          </select>
        </InputContainer>
        <NextButton />
      </form>
    </FormPageLayout>
  );
}
