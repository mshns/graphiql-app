import { FC, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthorizationForm } from 'shared';
import { ROUTE } from 'shared/constants';

export const LogIn: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation(['layout', 'authorization']);

  const auth = getAuth();

  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      navigate(ROUTE.Playground);
    } catch {
      setIsLoading(false);
      //TODO add error handling
    }
  };

  return (
    <AuthorizationForm
      buttonText={t('Sign In')}
      linkText={t('Sign Up for free', { ns: 'authorization' })}
      linkTo={ROUTE.SignUp}
      description={t('Do not have an account', { ns: 'authorization' })}
      title={t('Sign in to your account', { ns: 'authorization' })}
      onClick={handleLogin}
      isLoading={isLoading}
    />
  );
};
