import { List, styled } from '@mui/material';

export const NavigationList = styled(List)(({ theme }) => ({
  position: 'sticky',

  [theme.breakpoints.down('sm')]: {
    width: 34,
    top: 56
  },

  [theme.breakpoints.up('sm')]: {
    width: 84,
    top: 64
  }
}));