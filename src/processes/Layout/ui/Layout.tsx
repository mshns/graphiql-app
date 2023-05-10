import { Suspense, type FC } from 'react';
import { Box, CircularProgress, Divider } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer, Header } from 'widgets';
import { ROUTE } from 'shared';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Box height="100%" display="flex">
        {[ROUTE.About, ROUTE.Playground].some((item) => item === pathname) && <Navbar />}
        <Divider orientation="vertical" />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Suspense fallback={<CircularProgress />}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
