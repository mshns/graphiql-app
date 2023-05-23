import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ROUTE, Spinner, useAppSelector } from 'shared';
import { isBoolean } from 'shared/utils';

export const RequireAuth: FC = () => {
  const { isLoggedIn } = useAppSelector((state) => state.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (isBoolean(isLoggedIn) && !isLoggedIn) {
      navigate(ROUTE.Login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return !isLoggedIn ? <Spinner /> : <Outlet />;
};
