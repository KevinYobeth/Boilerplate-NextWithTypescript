import useSWR from 'swr';
import axios from 'lib/axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface Props {
  middleware?: 'auth' | 'guest';
  redirectIfAuthenticated?: string;
}

// eslint-disable-next-line import/prefer-default-export
export const useAuth = ({ middleware, redirectIfAuthenticated }: Props = {}) => {
  const router = useRouter();

  const fetcher = (url) =>
    axios
      .get(url)
      .then((res) => res.data)
      .catch((errors) => {
        if (errors.response.status !== 409) throw errors;
        router.push('/verify-email');
      });
  const { data: user, error, mutate } = useSWR('/api/user', fetcher);

  const csrf = () => axios.get('/sanctum/csrf-cookie');

  const register = async ({ setErrors, ...props }) => {
    await csrf();

    setErrors([]);

    axios
      .post('/register', props)
      .then(() => mutate())
      .catch((errors) => {
        if (errors.response.status !== 422) throw errors;

        setErrors(Object.values(errors.response.data.errors).flat());
      });
  };

  const login = async ({ setErrors, setStatus, ...props }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post('/login', props)
      .then(() => mutate())
      .catch((errors) => {
        if (errors.response.status !== 422) throw errors;

        setErrors(Object.values(errors.response.data.errors).flat());
      });
  };

  const forgotPassword = async ({ setErrors, setStatus, email }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post('/forgot-password', { email })
      .then((response) => setStatus(response.data.status))
      .catch((errors) => {
        if (errors.response.status !== 422) throw errors;

        setErrors(Object.values(errors.response.data.errors).flat());
      });
  };

  const resetPassword = async ({ setErrors, setStatus, ...props }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post('/reset-password', { token: router.query.token, ...props })
      .then((response) => router.push(`/login?reset=${btoa(response.data.status)}`))
      .catch((errors) => {
        if (errors.response.status !== 422) throw errors;

        setErrors(Object.values(errors.response.data.errors).flat());
      });
  };

  const resendEmailVerification = ({ setStatus }) => {
    axios
      .post('/email/verification-notification')
      .then((response) => setStatus(response.data.status));
  };

  const logout = async () => {
    if (!error) {
      await axios.post('/logout').then(() => mutate());
    }

    window.location.pathname = '/login';
  };

  useEffect(() => {
    if (middleware === 'guest' && redirectIfAuthenticated && user) {
      router.push(redirectIfAuthenticated);
    }
    if (middleware === 'auth' && error) logout();
  }, [user, error]);

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout
  };
};
