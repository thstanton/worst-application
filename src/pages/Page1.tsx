import { ZodIssue, z } from "zod";
import Input from "../components/Input/Input";
import InputContainer from "../components/Input/InputContainer";
import InputLabel from "../components/Input/InputLabel";
import NextButton from "../components/NextButton";
import { useForm } from "../contexts/FormContext";
import FormPageLayout from "../layouts/FormPageLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMessage from "../components/Input/InputMessage";

const schema = z.object({
  title: z.string({ required_error: "Title is required" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({
    message: "Please provide a valid email address",
  }),
  linkedIn: z.string().min(1, {
    message: "LinkedIn is required",
  }),
  github: z.string().min(1, {
    message: "GitHub is required",
  }),
  portfolio: z.string(),
  myspace: z.string().url({ message: "MySpace URL invalid" }).min(1, {
    message: "MySpace is required",
  }),
});

export default function Page1() {
  const navigate = useNavigate();
  const { name, setName } = useForm();
  const [message, setMessage] = useState<ZodIssue[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const result = schema.safeParse(data);
    if (result.success) {
      setMessage([]);
      navigate("/form2");
      return;
    }
    console.log(result.error.issues);
    setMessage(result.error.issues);
  };

  return (
    <FormPageLayout progress={5}>
      <form
        className="flex w-full max-w-screen-md flex-col"
        onSubmit={handleSubmit}
      >
        <InputContainer>
          <InputLabel htmlFor="title">Title: </InputLabel>
          <br />
          <select id="title" className="select select-bordered" name="title">
            <option disabled selected>
              Select
            </option>
            <option>Earl</option>
            <option>Squire</option>
            <option>Lord</option>
            <option>Lady</option>
            <option>Madame</option>
            <option>Her Royal Highness</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Ms</option>
            <option>Miss</option>
            <option>Mx</option>
          </select>
          {message && <InputMessage message={message} path="title" />}
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name: </InputLabel>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Hapless"
            value={name}
            onChange={(e) => setName && setName(e.target.value)}
          />
          {message && <InputMessage message={message} path="firstName" />}
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last Name: </InputLabel>
          <Input id="lastName" name="lastName" placeholder="Jobseeker" />
          {message && <InputMessage message={message} path="lastName" />}
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="email">Email: </InputLabel>
          <Input
            id="email"
            name="email"
            placeholder="haplessjobseeker69@hotmail.com"
          />
          {message && <InputMessage message={message} path="email" />}
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="linkedIn">LinkedIn Profile: </InputLabel>
          <Input
            id="linkedIn"
            name="linkedIn"
            placeholder="linkedin.com/in/haplessjobseeker69"
          />
          {message && <InputMessage message={message} path="linkedIn" />}
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="github">GitHub Profile: </InputLabel>
          <Input
            id="github"
            name="github"
            placeholder="github.com/haplessjobseeker69"
          />
          {message && <InputMessage message={message} path="github" />}
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="portfolio">Portfolio: </InputLabel>
          <Input
            id="portfolio"
            name="portfolio"
            placeholder="www.haplessjobseeker69.com"
          />
          {message && <InputMessage message={message} path="portfolio" />}
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="myspace">MySpace Profile: </InputLabel>
          <Input
            id="myspace"
            name="myspace"
            placeholder="myspace.com/haplessjobseeker69"
          />
          {message && <InputMessage message={message} path="myspace" />}
        </InputContainer>

        <NextButton />
      </form>
    </FormPageLayout>
  );
}
