import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { AuthorizationForm } from 'features';
import { FirebaseErrors, ROUTE, useAppActions } from 'shared';

export const LogIn: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    setIsEmailError,
    setEmailErrorMessage,
    setIsPasswordError,
    setPasswordErrorMessage,
    setEmailValue,
    setPasswordValue
  } = useAppActions();

  const { t } = useTranslation(['layout', 'authorization']);

  const auth = getAuth();

  const handleLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      setIsEmailError(false);
      setEmailErrorMessage('');
      setIsPasswordError(false);
      setPasswordErrorMessage('');
      setPasswordValue('');
      setEmailValue('');
      navigate(ROUTE.Playground);
    } catch (e) {
      setIsLoading(false);
      const firebaseError = e as FirebaseError;
      if (firebaseError.code === FirebaseErrors.InvalidEmail) {
        setIsEmailError(true);
        setEmailErrorMessage('Invalid email');
      }
      if (firebaseError.code === FirebaseErrors.WrongPassword) {
        setIsPasswordError(true);
        setPasswordErrorMessage('Invalid password');
      }
      if (firebaseError.code === FirebaseErrors.UserNotFound) {
        setIsEmailError(true);
        setEmailErrorMessage("User with a such e-mail doesn't exist");
      }
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
