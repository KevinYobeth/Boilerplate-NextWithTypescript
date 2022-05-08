interface Props {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

function Label({ className, children, htmlFor }: Props) {
  return (
    <label className={`${className} block text-sm font-medium text-gray-700`} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
