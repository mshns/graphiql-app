import { Suspense, type FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, ListItemIcon, ListItemButton, ListItem, List, Divider, CircularProgress } from '@mui/material';
import { NAVIGATION } from '../constants';
import { Container } from './Container.styled';

export const Navbar: FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <List>
        {NAVIGATION.map((nav) => (
          <ListItem key={nav.id} disablePadding onClick={() => navigate(nav.route)}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0
                }}
              >
                {nav.icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider orientation="vertical" />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Suspense fallback={<CircularProgress />}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};
