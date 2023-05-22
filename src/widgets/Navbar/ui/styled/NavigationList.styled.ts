import { List, styled } from '@mui/material';

export const NavigationList = styled(List)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: 34
  },
  [theme.breakpoints.up('sm')]: {
    width: 84
  }
}));
