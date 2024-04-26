import { useForm } from "../contexts/FormContext";

export default function NavBar() {
  const saveButton = () => {
    window.alert("🤣 Nice Try! It's now or never.");
  };
  const { name } = useForm();

  return (
    <div className="navbar flex px-8">
      <div className="font-anton navbar-start text-3xl text-primary">
        Please Hire Me
      </div>
      <div className="navbar-end">
        <p className="mr-4">{name?.length ? `👋 Hi ${name}!` : ""}</p>
        <button className="btn btn-outline" onClick={saveButton}>
          Save Progress
        </button>
      </div>
    </div>
  );
}
