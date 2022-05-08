interface Props {
  errors: string[];
  className?: string;
}

function AuthValidationErrors({ errors = [], className }: Props) {
  return (
    <div>
      {errors.length > 0 && (
        <div className={className}>
          <div className="font-medium text-red-600">Whoops! Something went wrong.</div>

          <ul className="mt-3 list-inside list-disc text-sm text-red-600">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AuthValidationErrors;
