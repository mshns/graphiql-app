import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListItemIcon, ListItemButton, ListItem, List } from '@mui/material';
import { theme } from 'shared';
import { NAVIGATION } from '../constants';

export const Navbar: FC = () => {
  const navigate = useNavigate();

  return (
    <List>
      {NAVIGATION.map((nav) => (
        <ListItem key={nav.id} disablePadding onClick={() => navigate(nav.route)}>
          <ListItemButton
            sx={{ backgroundColor: location.pathname === nav.route ? theme.palette.primary.dark : 'transparent' }}
          >
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
  );
};
