import { Suspense, type FC } from 'react';
import { Box, Container, Divider } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer, Header } from 'widgets';
import { ROUTE, Spinner } from 'shared';
import { usePlaygroundHeight } from '../../hooks/usePlaygroundHeight';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  const { header, footer, barsHeight } = usePlaygroundHeight();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header header={header} />
      <Container disableGutters maxWidth={false} sx={{ display: 'flex', flex: '1 0 auto' }}>
        {[ROUTE.About, ROUTE.Playground].some((item) => item === pathname) && <Navbar />}

        <Divider orientation="vertical" />

        <Box display="flex" component="main" p={2} width="100%" position="relative">
          <Suspense fallback={<Spinner />}>
            <Outlet context={{ barsHeight }} />
          </Suspense>
        </Box>
      </Container>
      <Footer footer={footer} />
    </Box>
  );
};
