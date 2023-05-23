import { SpeedDial, styled } from '@mui/material';

export const AuthorListLogo = styled(SpeedDial)(() => ({
  position: 'absolute',
  bottom: 20,
  left: 'calc(50% - 28px)',
  '& .MuiButtonBase-root': {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}));
