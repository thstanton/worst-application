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
        <div className="flex h-full flex-col justify-between">
          <div className="text-center">
            <h2 className="mb-6 text-lg italic">
              We're sorry, we will not be proceeding with your application.
            </h2>
            <div className="mb-3 rounded-xl bg-blue-300 p-6 drop-shadow-lg">
              <p className="mb-3 text-lg">
                Our company culture is precious to us, and it's by being united
                as <span className="font-bold">{weAre}</span> that we achieve
                our stunning levels of success.
              </p>
              <p className="text-lg">
                We of course wish you all the best of luck with your future
                endeavours. Why don't you sign up to our newsletter?
              </p>
            </div>
          </div>
          <div className="text-center">
            Made by{" "}
            <a href="https://tim-stanton.vercel.app" className="link">
              Tim Stanton
            </a>{" "}
            (please hire me!)
          </div>
        </div>
      )}
    </FormPageLayout>
  );
}
