interface NextButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export default function NextButton({ onClick, disabled }: NextButtonProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="btn btn-primary mt-8 w-fit"
        onClick={onClick}
        disabled={disabled}
      >
        Next
      </button>
      <p className="my-3 text-xs italic text-slate-500">
        NB. No data will actually be transferred
      </p>
    </div>
  );
}
