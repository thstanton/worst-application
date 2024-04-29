import { useEffect, useState } from "react";
import { useForm } from "../contexts/FormContext";
import FormPageLayout from "../layouts/FormPageLayout";

export default function Page10() {
  const { name, pirateOrNinja } = useForm();
  const [loading, setLoading] = useState(true);
  let weAre: string;
  if (pirateOrNinja?.toString() === "pirate") {
    weAre = "🥷 ninjas";
  } else {
    weAre = "🏴‍☠️ pirates";
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <FormPageLayout progress={100}>
      <h1 className="mb-3 text-2xl font-bold">
        Thank you for applying{name && `, ${name}`}!
      </h1>
      {loading ? (
        <>
          <h2 className="mb-6 text-lg italic">Analysing your answers...</h2>
          <span className="loading loading-spinner loading-lg"></span>
        </>
      ) : (
        <div>
          <h2 className="mb-6 text-lg italic">
            We're sorry, we will not be proceeding with your application.
          </h2>
          <p className="text-lg">
            Our company culture is precious to us, and it's by being united as{" "}
            <span className="font-bold">{weAre}</span> that we achieve our
            stunning levels of success.
          </p>
        </div>
      )}
    </FormPageLayout>
  );
}
