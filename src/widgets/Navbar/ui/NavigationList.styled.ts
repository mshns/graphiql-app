import { List, styled } from '@mui/material';

export const NavigationList = styled(List)(({ theme }) => ({
  position: 'sticky',
  top: 48,

  [theme.breakpoints.down('sm')]: {
    width: 34
  },

  [theme.breakpoints.up('sm')]: {
    width: 84
  }
}));
