import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  Tooltip,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = {
  nav: {
    name: string;
    route: string;
    icon: JSX.Element;
  };
};

export const NavigationBarLink: FC<Props> = ({ nav }) => {
  const { t } = useTranslation(['layout']);
  const theme = useTheme();

  const { name, route, icon } = nav;

  return (
    <>
      <NavLink
        to={route}
        style={({ isActive }) => ({
          color: isActive ? theme.palette.secondary.main : theme.palette.text.primary,
          textDecoration: 'none'
        })}
      >
        <ListItem disablePadding>
          <ListItemButton sx={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', pb: 0 }}>
            <Tooltip title={t(name)}>
              <ListItemIcon
                sx={{ minWidth: 1, justifyContent: 'center', color: { xs: 'inherit', sm: 'text.secondary' } }}
              >
                <SvgIcon sx={{ fontSize: { xs: 24, sm: 32 } }}>{icon}</SvgIcon>
              </ListItemIcon>
            </Tooltip>
            <ListItemText
              primary={t(name)}
              primaryTypographyProps={{ fontSize: 14, fontWeight: 600, display: { xs: 'none', sm: 'block' } }}
            />
          </ListItemButton>
        </ListItem>
      </NavLink>
      <Divider />
    </>
  );
};
