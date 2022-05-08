interface Props {
  id: string;
  type?: string;
  name?: string;
  value?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  disabled?: boolean;
}

function Input({
  id,
  type,
  name,
  value,
  className,
  onChange,
  required,
  autoFocus,
  autoComplete,
  disabled = false
}: Props) {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      className={`${className} rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
      onChange={onChange}
      required={required}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      disabled={disabled}
    />
  );
}

export default Input;
