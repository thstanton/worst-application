import { useNavigate } from "react-router-dom";
import NextButton from "../components/NextButton";
import FormPageLayout from "../layouts/FormPageLayout";

export default function Page5() {
  const navigate = useNavigate();
  return (
    <FormPageLayout progress={35}>
      <h1 className="relative -top-12 font-mono text-[15rem]">[]</h1>
      <div className="relative -top-20 flex flex-col items-center gap-2">
        <h1>Complete the sentence:</h1>
        <p>To me, this represents ______________.</p>
        <div className="form-control">
          <div className="flex items-center gap-2">
            <input type="radio" name="array" value="a" id="array" />
            <label htmlFor="array">an empty array</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="opportunity" value="b" id="opportunity" />
            <label htmlFor="opportunity">an opportunity</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="emptiness" value="c" id="emptiness" />
            <label htmlFor="emptiness">
              the great emptiness that lies within
            </label>
          </div>
        </div>
        <NextButton onClick={() => navigate("/form6")} />
      </div>
    </FormPageLayout>
  );
}
