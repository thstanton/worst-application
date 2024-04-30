import { useForm } from "../contexts/FormContext";

const hints = [
  "You need to enter a name and tick the box to continue.",
  "You need to click the upload button to continue.",
  "You need to click 'Start Scan' to continue.",
  "You do not need to 'fix' the errors but you do need to tick the box to continue.",
  "You need to answer for every language to continue.",
  "You need to click the upload button to continue.",
  "You need to start typing an answer to continue.",
  "You need to type more to continue. Sorry.",
  "You need to include the word 'inspiring' to continue.",
  "You need to include the word 'epic' to continue.",
  "You need to include the word 'arousal' to continue.",
  "You need to select any salary amount that is a number to continue.",
  "Choose pirates or ninjas to continue. Good luck with your application!",
];

export default function Hints() {
  const { hintIdx } = useForm();

  const handleHintModal = () => {
    const dialogEl = document.getElementById(
      "hint-dialog",
    ) as HTMLDialogElement;
    dialogEl.showModal();
  };

  return (
    <>
      <button
        className="btn btn-circle btn-secondary fixed bottom-4 left-4 text-xl drop-shadow-lg"
        onClick={handleHintModal}
      >
        ?
      </button>
      <dialog className="modal modal-bottom sm:modal-middle" id="hint-dialog">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="font-bold">Hint</h1>
          <p>{hints[hintIdx || 0]}</p>
        </div>
      </dialog>
    </>
  );
}
