import { useEffect, useState } from "react";
import { useForm } from "../contexts/FormContext";
import FormPageLayout from "../layouts/FormPageLayout";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ShareModal from "../components/ShareModal";

export default function Page10() {
  const navigate = useNavigate();
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

  const handleModal = () => {
    const dialogEl = document.getElementById(
      "share-modal",
    ) as HTMLDialogElement;
    dialogEl.showModal();
  };

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
          <div className="my-8 flex justify-center gap-4">
            <button
              className="btn btn-primary btn-lg drop-shadow-lg"
              onClick={() => navigate("/")}
            >
              Try Again
            </button>
            <button
              className="btn btn-primary btn-lg drop-shadow-lg"
              onClick={handleModal}
            >
              Share
            </button>
          </div>
          <Footer />
          <ShareModal />
        </div>
      )}
    </FormPageLayout>
  );
}
