import { Box, styled } from '@mui/material';

export const FooterItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  minWidth: 260,
  height: 80,
  margin: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  alignItems: 'center',
  '&:before, &:after': {
    position: 'absolute',
    content: "''",
    top: '50%',
    width: '25%',
    height: 1,
    backgroundColor: theme.palette.secondary.main
  },
  '&:before': {
    left: 0
  },
  '&:after': {
    right: 0
  }
}));
