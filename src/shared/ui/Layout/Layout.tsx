import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { Box, Grid } from '@mui/material';

export const Layout: FC = () => {
  return (
    <Box height="100vh">
      <Header />
      <main>
        <Grid container>
          <Grid xl={1} lg={1}>
            <Navbar />
          </Grid>
          <Grid xl={11} lg={11}>
            <Outlet />
          </Grid>
        </Grid>
      </main>
      <Footer />
    </Box>
  );
};
