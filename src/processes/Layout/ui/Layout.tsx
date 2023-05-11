import { type FC } from 'react';
import { Box, Divider } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer, Header } from 'widgets';
import { ROUTE } from 'shared/constants';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box height="100%" display="flex">
        {[ROUTE.About, ROUTE.Playground].some((item) => item === pathname) && <Navbar />}
        <Divider orientation="vertical" />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
