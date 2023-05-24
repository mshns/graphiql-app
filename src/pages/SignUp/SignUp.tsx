import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthorizationForm } from 'features';
import { useAppActions, ROUTE } from 'shared';

export const SignUp: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const { setIsLoggedIn } = useAppActions();
  const { t } = useTranslation(['authorization']);

  const auth = getAuth();

  const handleSignUp = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      setIsLoading(false);
      navigate(ROUTE.Playground);
    } catch (e) {
      setIsLoggedIn(false);
      setIsLoading(false);
      //TODO add error handling
    }
  };

  return (
    <AuthorizationForm
      buttonText={t('Register')}
      linkText={t('Sign in')}
      linkTo={ROUTE.Login}
      description={t('Already have an account?')}
      title={t('Create your account')}
      onClick={handleSignUp}
      isLoading={isLoading}
    />
  );
};
