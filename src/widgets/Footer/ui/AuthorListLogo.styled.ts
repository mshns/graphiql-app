import { SpeedDial, styled } from '@mui/material';

export const AuthorListLogo = styled(SpeedDial)(() => ({
  position: 'absolute',
  bottom: 32,
  left: 'calc(50% - 28px)',
  '& .MuiSpeedDial-fab': {
    boxShadow: 'none'
  }
}));
