import { useState } from "react";
import Input from "../components/Input/Input";
import InputContainer from "../components/Input/InputContainer";
import InputLabel from "../components/Input/InputLabel";
import FormPageLayout from "../layouts/FormPageLayout";
import NextButton from "../components/NextButton";
import { useNavigate } from "react-router-dom";

export default function Page3() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<number>(1);
  return (
    <FormPageLayout progress={28}>
      <p className="mb-3">
        Thank you for submitting your CV. Now give us your work history.
      </p>
      {Array.from({ length: jobs }).map((_, index) => (
        <JobForm key={index} number={index} />
      ))}
      <button className="btn btn-primary" onClick={() => setJobs(jobs + 1)}>
        Add another job
      </button>
      <NextButton onClick={() => navigate("/form4")} />
    </FormPageLayout>
  );
}

function JobForm({ number }: { number: number }) {
  const [endDateDisabled, setEndDateDisabled] = useState(false);
  const randomQuestions = [
    "What colour were your line manager's eyes?",
    "What was your least favourite part of the job?",
    "What was your most fulfilling relationship with a colleague and why?",
    "Do you regret leaving?",
    "What's your favourite sandwich filling?",
    "What's your least favourite sandwich filling?",
    "What's your best memory of your boss?",
    "Rewrite the best code you wrote for this company here:",
  ];
  return (
    <form className="mb-8 w-full rounded-md bg-orange-50 p-4 drop-shadow-sm">
      <p className="mb-3 text-center font-bold">Job {number + 1}</p>
      <InputContainer>
        <InputLabel htmlFor="title">Job Title: </InputLabel>
        <Input type="text" name="title" id="title" placeholder="Code Ninja" />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="company">Company: </InputLabel>
        <Input type="text" name="company" id="company" placeholder="Big Tech" />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="startDate">Start Date: </InputLabel>
        <Input type="date" name="startDate" id="startDate" />
        <InputLabel htmlFor="endDate">End Date: </InputLabel>
        <Input
          type="date"
          name="endDate"
          id="endDate"
          disabled={endDateDisabled}
        />
        <div className="mt-3 flex items-center gap-2">
          <input
            type="checkbox"
            name="isCurrent"
            id="isCurrent"
            className="checkbox"
            onChange={() => setEndDateDisabled(!endDateDisabled)}
          />
          <span>I currently work here</span>
        </div>
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="desc">Job Description: </InputLabel>
        <textarea
          name="desc"
          id="desc"
          placeholder="Changing the world, one div at a time baby!"
          className="textarea textarea-bordered w-full"
          rows={5}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="random">
          {number <= randomQuestions.length
            ? randomQuestions[number]
            : randomQuestions[
                Math.floor(Math.random() * randomQuestions.length)
              ]}
        </InputLabel>
        <Input type="text" name="random" id="random" placeholder="Well..." />
      </InputContainer>
    </form>
  );
}
