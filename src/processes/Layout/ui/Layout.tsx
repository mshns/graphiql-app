import { Suspense, type FC } from 'react';
import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer, Header } from 'widgets';
import { ROUTE, Spinner } from 'shared';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Header />
      <Box sx={{ display: 'flex' }}>
        {[ROUTE.About, ROUTE.Playground].some((item) => item === pathname) && <Navbar />}
        <Box component="main" sx={{ width: '100%', p: 2 }}>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
