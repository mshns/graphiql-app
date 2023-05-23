import { Suspense, type FC, useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { Navbar, Footer, Header } from 'widgets';
import { ROUTE, Spinner, useAppActions, useAppSelector } from 'shared';
import { isBoolean } from 'shared/utils';
import { usePlaygroundHeight } from '../../hooks/usePlaygroundHeight';

import { LayoutWrapper } from './styled/LayoutWrapper.styled';

export const Layout: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { isLoggedIn } = useAppSelector((state) => state.userReducer);
  const { setIsLoggedIn } = useAppActions();

  const { header, footer, barsHeight } = usePlaygroundHeight();
  const auth = getAuth();

  useEffect(() => {
    if (isBoolean(isLoggedIn) && !isLoggedIn && pathname === ROUTE.Playground) {
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

  return (
    <LayoutWrapper>
      <Header header={header} />
      <Container disableGutters maxWidth={false} sx={{ display: 'flex', flex: '1 0 auto' }}>
        {[ROUTE.About, ROUTE.Playground].some((item) => item === pathname) && <Navbar />}

        <Box display="flex" component="main" p={2} width="100%" position="relative">
          <Suspense fallback={<Spinner />}>{isLoading ? <Spinner /> : <Outlet context={{ barsHeight }} />}</Suspense>
        </Box>
      </Container>
      <Footer footer={footer} />
    </LayoutWrapper>
  );
};
