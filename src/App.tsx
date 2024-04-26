import { useNavigate } from "react-router-dom";
import PageContainer from "./components/PageContainer";

function App() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <div className="flex h-full grow flex-col items-center justify-center gap-8">
        <div className="text-center">
          <h1 className="font-anton mb-6 text-4xl">
            So You're Looking for a Tech Job?
          </h1>
          <h2 className="text-xl">Good luck with that 🤣</h2>
        </div>
        <button
          className="btn btn-primary btn-lg drop-shadow-lg"
          onClick={() => navigate("/form1")}
        >
          EASY APPLY 🤌
        </button>
        <p className="text-xs italic text-slate-500">
          This is just for fun. No data will be transferred or collected.
        </p>
      </div>
    </PageContainer>
  );
}

export default App;
