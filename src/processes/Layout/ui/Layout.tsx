import { Suspense, type FC, useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { Navbar, Footer, Header } from 'widgets';
import { ROUTE, Spinner, useAppActions } from 'shared';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const { setIsLoggedIn } = useAppActions();

  const auth = getAuth();
  const navigate = useNavigate();

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
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Header />
      <Box sx={{ display: 'flex', flex: '1 1 auto' }}>
        {[ROUTE.About, ROUTE.Playground].some((item) => item === pathname) && <Navbar />}
        <Box component="main" sx={{ width: '100%', p: 2 }}>
          <Suspense fallback={<Spinner />}>
            {isLoading ? (
              <Box
                sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <Outlet />
            )}
          </Suspense>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
