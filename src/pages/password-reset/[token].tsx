import ApplicationLogo from 'components/ApplicationLogo';
import AuthCard from 'components/AuthCard';
import AuthSessionStatus from 'components/AuthSessionStatus';
import AuthValidationErrors from 'components/AuthValidationErrors';
import Button from 'components/Button';
import GuestLayout from 'components/Layouts/GuestLayout';
import Input from 'components/Input';
import Label from 'components/Label';
import Link from 'next/link';
import { useAuth } from 'hooks/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function PasswordReset() {
  const router = useRouter();

  const { resetPassword } = useAuth({ middleware: 'guest' });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const submitForm = (event) => {
    event.preventDefault();

    resetPassword({
      email,
      password,
      passwordConfirmation,
      setErrors,
      setStatus
    });
  };

  useEffect(() => {
    setEmail(router.query?.email?.toString() || '');
  }, [router.query.email]);

  return (
    <GuestLayout>
      <AuthCard
        logo={
          <Link href="/">
            <a>
              <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
            </a>
          </Link>
        }
      >
        {/* Session Status */}
        <AuthSessionStatus className="mb-4" status={status} />

        {/* Validation Errors */}
        <AuthValidationErrors className="mb-4" errors={errors} />

        <form onSubmit={submitForm}>
          {/* Email Address */}
          <div>
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              type="email"
              value={email}
              className="mt-1 block w-full"
              onChange={(event) => setEmail(event.target.value)}
              required
              autoFocus
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              className="mt-1 block w-full"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mt-4">
            <Label htmlFor="passwordConfirmation">Confirm Password</Label>

            <Input
              id="passwordConfirmation"
              type="password"
              value={passwordConfirmation}
              className="mt-1 block w-full"
              onChange={(event) => setPasswordConfirmation(event.target.value)}
              required
            />
          </div>

          <div className="mt-4 flex items-center justify-end">
            <Button>Reset Password</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  );
}

export default PasswordReset;
