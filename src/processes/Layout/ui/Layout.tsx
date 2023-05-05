import { type FC } from 'react';
import { Box } from '@mui/material';
import { Navbar, Footer, Header } from 'widgets';
import { Container } from './Container.styled';

export const Layout: FC = () => {
  return (
    <Container>
      <Header />
      <Box height="100%">
        <Navbar />
      </Box>
      <Footer />
    </Container>
  );
};
