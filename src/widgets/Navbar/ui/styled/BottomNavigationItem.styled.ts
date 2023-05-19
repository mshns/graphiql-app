import { BottomNavigationAction, styled } from '@mui/material';

export const BottomNavigationItem = styled(BottomNavigationAction)(({ theme }) => ({
  marginTop: 20,
  minHeight: 60,
  '& .Mui-selected': {
    color: theme.palette.secondary.main
  },
  '& .MuiBottomNavigationAction-label': {
    fontSize: 14
  }
}));
