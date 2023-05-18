import { Suspense, type FC } from 'react';
import { Box, Divider } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer, Header } from 'widgets';
import { ROUTE, Spinner } from 'shared';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Header />
      <Box height="100%" display="flex">
        {[ROUTE.About, ROUTE.Playground].some((item) => item === pathname) && <Navbar />}
        <Divider orientation="vertical" />
        <Box component="main" sx={{ flexGrow: 1, p: 2, position: 'relative' }}>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
