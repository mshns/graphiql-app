import { type FC, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon, useTheme } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { NAVIGATION } from '../constants';
import { NavigationList } from './styled/NavigationList.styled';

export const Navbar: FC = () => {
  const { t } = useTranslation(['layout']);
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: 'background.paper' }}>
      <NavigationList>
        {NAVIGATION.map((nav) => (
          <Fragment key={nav.id}>
            <NavLink
              to={nav.route}
              style={({ isActive }) => ({
                color: isActive ? theme.palette.secondary.main : theme.palette.text.primary,
                textDecoration: 'none'
              })}
            >
              <ListItem disablePadding>
                <ListItemButton sx={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', pb: 0 }}>
                  <ListItemIcon sx={{ minWidth: 1, justifyContent: 'center', color: 'text.secondary' }}>
                    <SvgIcon sx={{ fontSize: { xs: 24, sm: 32 } }}>{nav.icon}</SvgIcon>
                  </ListItemIcon>
                  <ListItemText
                    primary={t(nav.name)}
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 600, display: { xs: 'none', sm: 'block' } }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <Divider />
          </Fragment>
        ))}
      </NavigationList>
    </Box>
  );
};
