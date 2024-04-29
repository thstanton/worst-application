import { useEffect, useState } from "react";
import Input from "../components/Input/Input";
import InputContainer from "../components/Input/InputContainer";
import InputLabel from "../components/Input/InputLabel";
import FormPageLayout from "../layouts/FormPageLayout";
import NextButton from "../components/NextButton";
import { useNavigate } from "react-router-dom";
import InputMessage from "../components/Input/InputMessage";

interface Job {
  id: number;
  jobTitle: string;
  jobTitleError?: string;
  company: string;
  companyError?: string;
  startDate: string;
  endDate?: string;
  currentRole: boolean;
  description: string;
  descriptionError?: string;
  randomQuestion: string;
  randomAnswer: string;
  randomAnswerError?: string;
}

interface JobFormProps {
  job: Job;
  status: JobFormStatus;
}

type ScanningStatus = "false" | "true" | "complete";
type JobFormStatus = "loaded" | "error";

export default function Page3() {
  const navigate = useNavigate();
  const [maxJobCount, setMaxJobCount] = useState(0);
  const [scanning, setScanning] = useState<ScanningStatus>("false");
  const [confirmed, setConfirmed] = useState(false);
  const [termsError, setTermsError] = useState("");
  const [jobsError, setJobsError] = useState<JobFormStatus>("loaded");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmed && jobsError === "error") {
      navigate("/form4");
    }
    if (jobsError === "loaded" && scanning === "complete") {
      setJobsError("error");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    confirmed
      ? setTermsError("")
      : setTermsError("Please confirm before proceeding");
  };

  useEffect(() => {
    if (scanning === "true" && maxJobCount < jobs.length)
      setTimeout(() => setMaxJobCount((prev) => prev + 1), 1000);
    else if (scanning === "true" && maxJobCount >= jobs.length)
      setScanning("complete");
  }, [scanning, setScanning, maxJobCount]);

  return (
    <FormPageLayout progress={28}>
      <p className="mb-3">Thank you for submitting your CV.</p>
      <p className="mb-3">
        Now we need your work history, but don't worry, we can scan your CV to
        pre-enter the data for you, saving you time!
      </p>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setScanning("true")}
        disabled={scanning === "true"}
      >
        {scanning === "true" ? (
          <span className="loading loading-dots"></span>
        ) : (
          "Start Scan"
        )}
      </button>
      <form onSubmit={handleSubmit}>
        {jobs
          .filter((job) => job.id <= maxJobCount)
          .map((job) => (
            <JobForm key={job.id} job={job} status={jobsError} />
          ))}
        {scanning === "complete" && (
          <InputContainer>
            <p className="flex items-center gap-3">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="checkbox"
                onChange={() => setConfirmed(!confirmed)}
              />
              <span>
                I confirm that this information is{" "}
                <strong>100% accurate</strong>.
              </span>
            </p>
            {!confirmed && <InputMessage customMessage={termsError} />}
          </InputContainer>
        )}
        <NextButton />
      </form>
    </FormPageLayout>
  );
}

function JobForm({ job, status }: JobFormProps) {
  const [endDateDisabled, setEndDateDisabled] = useState(job.currentRole);

  return (
    <form className="mb-8 w-full max-w-screen-md rounded-md bg-orange-50 p-4 drop-shadow-sm">
      <InputContainer>
        <InputLabel htmlFor="title">Job Title: </InputLabel>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Code Ninja"
          defaultValue={job?.jobTitle}
        />
        {status === "error" && (
          <InputMessage customMessage={job?.jobTitleError} />
        )}
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="company">Company: </InputLabel>
        <Input
          type="text"
          name="company"
          id="company"
          defaultValue={job?.company}
        />
        {status === "error" && (
          <InputMessage customMessage={job?.companyError} />
        )}
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="startDate">Start Date: </InputLabel>
        <Input
          type="date"
          name="startDate"
          id="startDate"
          defaultValue={job?.startDate}
        />
        <InputLabel htmlFor="endDate">End Date: </InputLabel>
        <Input
          type="date"
          name="endDate"
          id="endDate"
          defaultValue={job?.endDate}
          disabled={endDateDisabled}
        />
        <div className="mt-3 flex items-center gap-2">
          <input
            type="checkbox"
            name="isCurrent"
            id="isCurrent"
            className="checkbox"
            defaultChecked={job?.currentRole || false}
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
          defaultValue={job?.description}
          className="textarea textarea-bordered w-full"
          rows={5}
        />
        {status === "error" && (
          <InputMessage customMessage={job?.descriptionError} />
        )}
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="random">{job?.randomQuestion}</InputLabel>
        <Input
          type="text"
          name="random"
          id="random"
          defaultValue={job?.randomAnswer}
        />
        {status === "error" && (
          <InputMessage customMessage={job?.randomAnswerError} />
        )}
      </InputContainer>
    </form>
  );
}

const jobs: Job[] = [
  {
    id: 1,
    jobTitle: "20th Aug",
    jobTitleError: "Please enter a valid job title",
    company: "ust 2023 - present",
    companyError: "Please enter a valid company name",
    startDate: "",
    currentRole: true,
    description: "Facetching the most exciting jobs",
    descriptionError: "Please enter a valid job description",
    randomQuestion: "What colour were your line manager's eyes?",
    randomAnswer: "",
    randomAnswerError: "Please enter your answer",
  },
  {
    id: 2,
    jobTitle: "Lorem ipsum dolor sit amet, consectetur",
    company: "adipiscing elit,",
    startDate: "2018-03-05",
    endDate: "2020-01-01",
    currentRole: true,
    description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    descriptionError:
      "This appears to be Lorem Ipsum text. Please replace with a detailed job description.",
    randomQuestion: "What's your best memory of your boss?",
    randomAnswer: "",
    randomAnswerError: "Tell us what made your boss wonderful.",
  },
  {
    id: 3,
    jobTitle: "Is this the real life?",
    company: "Is this just fantasy?",
    startDate: "2018-03-05",
    endDate: "2020-01-01",
    currentRole: false,
    description:
      "Caught in a landslide, no escaping reality. Open your eyes, look up to the skies and see. I'm just a poor boy, I need no sympathy",
    descriptionError: "🤨 These are just the lyrics to Bohemian Rhapsody.",
    randomQuestion: "What was your least favourite part of the job?",
    randomAnswer: "",
    randomAnswerError: "What really got your goat?",
  },
  {
    id: 4,
    jobTitle: "// Some Loser's Job Title",
    jobTitleError: "Whoops...something went wrong!",
    company: "// Don't Care",
    companyError: "Nothing to see here...",
    startDate: "2020-01-01",
    currentRole: true,
    description: "// As if we're going to read this lol",
    descriptionError: "Can't wait to read it really 😅",
    randomQuestion: "Why are you such a n00b?",
    randomAnswer: "",
    randomAnswerError: "...",
  },
];
