import { useNavigate } from "react-router-dom";
import NextButton from "../components/NextButton";
import FormPageLayout from "../layouts/FormPageLayout";

export default function Page8() {
  const navigate = useNavigate();
  return (
    <FormPageLayout progress={55}>
      <h1 className="text-2xl font-bold">Section 1 Complete 🙌</h1>
      <p className="text-lg italic">You're over half way there!</p>
      <NextButton onClick={() => navigate("/form9")} />
    </FormPageLayout>
  );
}
