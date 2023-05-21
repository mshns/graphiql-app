import { CircularProgress } from '@mui/material';
import { getAuth } from 'firebase/auth';
import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ROUTE, useAppActions, useAppSelector } from 'shared';
import { isBoolean } from 'shared/utils';

export const RequireAuth: FC = () => {
  const { isLoggedIn } = useAppSelector((state) => state.userReducer);
  const { setIsLoggedIn } = useAppActions();
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isBoolean(isLoggedIn) && !isLoggedIn) {
      navigate(ROUTE.Login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return <Outlet />;
};
