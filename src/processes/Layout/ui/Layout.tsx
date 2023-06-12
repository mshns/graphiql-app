import { Suspense, type FC } from 'react';
import { Box, Container } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer, Header } from 'widgets';
import { ROUTE, Spinner } from 'shared';
import { usePlaygroundHeight, useAuth } from '../../hooks';
import { LayoutWrapper } from './LayoutWrapper.styled';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  const { header, footer, barsHeight } = usePlaygroundHeight();
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <LayoutWrapper>
        <Spinner />
      </LayoutWrapper>
    );
  }

  return (
    <LayoutWrapper>
      <Header header={header} />
      <Container disableGutters maxWidth={false} sx={{ display: 'flex', flex: '1 0 auto' }}>
        {[ROUTE.About, ROUTE.Playground].some((item) => item === pathname) && <Navbar />}
        <Box display="flex" component="main" p={2} width="100%" position="relative">
          <Suspense fallback={<Spinner />}>{<Outlet context={{ barsHeight }} />}</Suspense>
        </Box>
      </Container>
      <Footer footer={footer} />
    </LayoutWrapper>
  );
};
