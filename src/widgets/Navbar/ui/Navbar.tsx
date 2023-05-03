import { type FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, ListItemIcon, ListItemButton, ListItem, List, Divider } from '@mui/material';
import { Container } from './Container.styled';
import { useAppActions } from 'shared';
import { NAVIGATION } from '../constants';

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const { setIsDocumentOpen } = useAppActions();

  const routeHandler = (nav: (typeof NAVIGATION)[0]) => {
    navigate(nav.route);
    if (nav.name === 'docs') setIsDocumentOpen();
  };

  return (
    <Container>
      <List>
        {NAVIGATION.map((nav) => (
          <ListItem key={nav.id} disablePadding onClick={() => routeHandler(nav)}>
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Container>
  );
};
