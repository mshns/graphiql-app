import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { ROUTE, useAppActions, useAppSelector } from 'shared';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { isLoggedIn } = useAppSelector((state) => state.userReducer);
  const { setIsLoggedIn } = useAppActions();

  const auth = getAuth();

  useEffect(() => {
    if (!isLoggedIn && pathname === ROUTE.Playground) {
      navigate(ROUTE.Login);
    }
  }, [isLoggedIn, pathname, navigate]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLoading(false);
      if (user && [ROUTE.Login, ROUTE.SignUp].some((route) => route === pathname)) {
        navigate(ROUTE.Playground);
      }
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  });

  return { isLoading };
};
