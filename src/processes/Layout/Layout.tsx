import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer, Header } from 'widgets';
import { Box, Grid } from '@mui/material';

export const Layout: FC = () => {
  return (
    <Box height="100vh">
      <Header />
      <main>
        <Grid container>
          <Grid xl={1} lg={1} item={true}>
            <Navbar />
          </Grid>
          <Grid xl={11} lg={11} item={true}>
            <Outlet />
          </Grid>
        </Grid>
      </main>
      <Footer />
    </Box>
  );
};
