interface Props {
  status: boolean;
  className?: string;
}

function AuthSessionStatus({ status, className }: Props) {
  return (
    <div>
      {status && <div className={`${className} text-sm font-medium text-green-600`}>{status}</div>}
    </div>
  );
}

export default AuthSessionStatus;
