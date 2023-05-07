import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListItemIcon, ListItemButton, ListItem, List } from '@mui/material';
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
  );
};
