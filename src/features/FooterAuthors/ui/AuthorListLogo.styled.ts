import { SpeedDial, styled } from '@mui/material';

export const AuthorListLogo = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  bottom: 21,
  left: 'calc(50% - 28px)',
  '& .MuiButtonBase-root': {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },

  [theme.breakpoints.down('sm')]: {
    bottom: 'auto'
  }
}));
