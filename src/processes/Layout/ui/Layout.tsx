import { Suspense, type FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Box } from '@mui/material';

import { Navbar, Footer, Header } from 'widgets';
import { ROUTE, Spinner } from 'shared';

import { LayoutWrapper } from './styled/LayoutWrapper.styled';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  return (
    <LayoutWrapper>
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
    </LayoutWrapper>
  );
};
