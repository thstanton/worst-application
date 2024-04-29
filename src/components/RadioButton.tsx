interface RadioButtonProps {
  className?: string;
  children?: React.ReactNode;
  checked?: boolean;
  onChange?: () => void;
  value?: string;
}

export default function RadioButton({
  className,
  children,
  checked,
  onChange,
  value,
}: RadioButtonProps) {
  return (
    <div className={`form-control ${className}`}>
      <label className="label cursor-pointer">
        <span className="label-text">{children}</span>
        <input
          type="radio"
          name="radio-10"
          className="radio checked:bg-primary"
          checked={checked}
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
}
