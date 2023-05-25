import { FirebaseError } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE, useAppSelector, useAppActions, FirebaseErrorsCodes } from 'shared';

export const useAuthorizationForm = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const { passwordValue, emailValue } = useAppSelector((state) => state.userReducer);
  const { setIsLoggedIn, setEmailErrorMessage, setPasswordErrorMessage, setEmailValue, setPasswordValue } =
    useAppActions();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      setPasswordValue('');
      setEmailValue('');
      setEmailErrorMessage('');
      setPasswordErrorMessage('');
    };
    // eslint-disable-next-line
  }, []);

  const handleFirebaseError = (error: FirebaseError) => {
    if (error.code === FirebaseErrorsCodes.InvalidEmail) {
      setEmailErrorMessage('Invalid email');
    }
    if (error.code === FirebaseErrorsCodes.WrongPassword) {
      setPasswordErrorMessage('Invalid password');
    }
    if (error.code === FirebaseErrorsCodes.UserNotFound) {
      setEmailErrorMessage("User with a such e-mail doesn't exist");
    }
    if (error.code === FirebaseErrorsCodes.EmailInUse) {
      setEmailErrorMessage('E-mail already exists');
    }
  };

  const handleSignUp = async () => {
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
      setIsLoggedIn(true);
      setIsLoading(false);
      navigate(ROUTE.Playground);
    } catch (e) {
      setIsLoggedIn(false);
      setIsLoading(false);
      handleFirebaseError(e as FirebaseError);
    }
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, emailValue, passwordValue);
      setIsLoading(false);
      navigate(ROUTE.Playground);
    } catch (e) {
      setIsLoading(false);
      handleFirebaseError(e as FirebaseError);
    }
  };

  return {
    handleLogin,
    handleSignUp,
    isLoading
  };
};
