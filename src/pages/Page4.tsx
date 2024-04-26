import { useEffect, useState } from "react";
import FormPageLayout from "../layouts/FormPageLayout";
import NextButton from "../components/NextButton";
import InputContainer from "../components/Input/InputContainer";
import InputLabel from "../components/Input/InputLabel";
import { useNavigate } from "react-router-dom";

export default function Page4() {
  const navigate = useNavigate();
  const [skillValues, setSkillValues] = useState<number[]>([0]);
  const [displayedSkills, setDisplayedSkills] = useState<number>(3);
  const [averageYears, setAverageYears] = useState<number>(0);

  useEffect(() => {
    const average = skillValues.reduce((a, b) => a + b, 0) / skillValues.length;
    setAverageYears(average);
  }, [skillValues]);

  const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "HTML5",
    "TypeScript",
    "CSS3",
    "Python",
    "Go",
    "Kotlin",
    "C#",
    "C++",
    "C",
    "Lisp",
    "Haskell",
    "Rust",
    "Dart",
    "Swift",
    "Ruby",
    "PHP",
    "R",
    "SQL",
    "Lua",
    "Julia",
    "Scala",
    "Rust",
    "F#",
    "Elixir",
    "Erlang",
    "Clojure",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (skillValues.length > 20) navigate("/form5");
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setSkillValues([...skillValues, value]);
    if (skillValues.length > 2) setDisplayedSkills((prev) => prev + 1);
  };

  return (
    <>
      {skillValues.length > 3 && (
        <div className="fixed right-8 top-20 w-40 rounded-md bg-red-200 p-3 drop-shadow-md">
          <h2 className="text-sm">Average Years of Experience:</h2>
          <p className="text-lg font-bold">
            {averageYears.toFixed(1)} years{" "}
            <span className="text-2xl">{emoji(averageYears)}</span>
          </p>
        </div>
      )}
      <FormPageLayout progress={20}>
        <form onSubmit={handleSubmit}>
          <h1 className="mb-4">
            How many years of experience do you have with:
          </h1>
          {languages
            .filter((_, idx) => idx < displayedSkills)
            .map((language, idx) => (
              <InputContainer
                key={idx}
                className="mb-2 flex items-center justify-between gap-4"
              >
                <InputLabel htmlFor={language}>{language}</InputLabel>
                <select
                  id={language}
                  className="select select-bordered"
                  onChange={handleChange}
                >
                  <option disabled>Select</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9+</option>
                </select>
              </InputContainer>
            ))}
          <NextButton />
        </form>
      </FormPageLayout>
    </>
  );
}

function emoji(num: number) {
  if (num < 0.6) return "🫣";
  if (num < 0.9) return "😬";
  if (num < 1.5) return "😕";
  if (num < 2) return "🥱";
  if (num < 3) return "🫤";
  if (num < 4) return "😐";
  if (num < 5) return "🤨";
  if (num < 6) return "🤔";
  if (num < 7) return "🤥";
  return "🤪";
}
