import { useNavigate } from "react-router-dom";
import InputContainer from "../components/Input/InputContainer";
import InputLabel from "../components/Input/InputLabel";
import NextButton from "../components/NextButton";
import FormPageLayout from "../layouts/FormPageLayout";
import { useState } from "react";
import InputMessage from "../components/Input/InputMessage";
import { useForm } from "../contexts/FormContext";

export default function Page6() {
  const navigate = useNavigate();
  const { setHintIdx } = useForm();
  const [answer, setAnswer] = useState<string>("");

  const targetWords = [/inspiring/i, /epic/i, /arousal/i];
  let errorIndex = 0;
  const errorMessages = [
    "",
    "Your answer should be longer.",
    "Come on. Tell us why you love us 😍.",
    "Yes, good. Keep going. Feed us your delicious adulation.",
    "Why don't you tell us that you find us 'inspiring'?",
    "Try to use the word 'epic' in your answer.",
    "Try to use the word 'arousal' in your answer.",
  ];

  if (answer.length <= 10) {
    errorIndex = 0;
  } else if (answer.length > 10 && answer.length <= 30) {
    errorIndex = 1;
    if (setHintIdx) setHintIdx(7);
  } else if (answer.length > 30 && answer.length <= 90) {
    errorIndex = 2;
  } else if (answer.length > 90 && answer.length <= 150) {
    errorIndex = 3;
  } else if (!targetWords[0].test(answer)) {
    if (setHintIdx) setHintIdx(8);
    errorIndex = 4;
  } else if (!targetWords[1].test(answer)) {
    if (setHintIdx) setHintIdx(9);
    errorIndex = 5;
  } else if (!targetWords[2].test(answer)) {
    if (setHintIdx) setHintIdx(10);
    errorIndex = 6;
  } else {
    errorIndex = 7;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errorIndex < 7) {
      return;
    }
    if (setHintIdx) setHintIdx(11);
    navigate("/form7");
  };

  return (
    <>
      <FormPageLayout progress={50}>
        <form className="max-w-screen-md" onSubmit={handleSubmit}>
          <h1 className="mb-3">
            Thank you for your cover letter. Now please answer this question.
          </h1>
          {errorIndex > 0 && <StarRating errorIndex={errorIndex} />}
          <InputContainer>
            <InputLabel htmlFor="question">
              Why do you want to work for us?
            </InputLabel>
            <textarea
              name="question"
              id="question"
              className="textarea textarea-bordered w-full"
              rows={8}
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
            />
            <InputMessage customMessage={errorMessages[errorIndex]} />
          </InputContainer>
          <NextButton disabled={errorIndex < 7} />
        </form>
      </FormPageLayout>
    </>
  );
}

function StarRating({ errorIndex }: { errorIndex: number }) {
  return (
    <div className="mx-auto mb-3 w-40 rounded-md bg-slate-50 p-3 drop-shadow-md md:fixed md:right-8 md:top-20">
      <h1>Answer quality:</h1>
      <div className="rating rating-half">
        <input
          type="radio"
          name="rating-1"
          className="mask mask-half-1 mask-star bg-orange-500"
          checked={errorIndex === 0}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-half-2 mask-star bg-orange-500"
          checked={errorIndex === 1}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-half-1 mask-star bg-orange-500"
          checked={errorIndex === 2}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-half-2 mask-star bg-orange-500"
          checked={errorIndex === 3}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-half-1 mask-star bg-orange-500"
          checked={errorIndex === 4}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-half-2 mask-star bg-orange-500"
          checked={errorIndex === 5}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-half-1 mask-star bg-orange-500"
          checked={errorIndex === 6}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-half-2 mask-star bg-orange-500"
          checked={errorIndex === 7}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-half-1 mask-star bg-orange-500"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-half-2 mask-star bg-orange-500"
        />
      </div>
    </div>
  );
}
