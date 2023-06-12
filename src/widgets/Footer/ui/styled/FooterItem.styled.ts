import { Box, styled } from '@mui/material';

export const FooterItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  margin: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  alignItems: 'center',

  [theme.breakpoints.up('md')]: {
    minWidth: 260,

    '&:before, &:after': {
      position: 'absolute',
      content: "''",
      top: '50%',
      width: '20%',
      height: 1,
      backgroundColor: theme.palette.secondary.main
    },
    '&:before': {
      left: 0
    },
    '&:after': {
      right: 0
    }
  },

  [theme.breakpoints.down('md')]: {
    minWidth: 85
  }
}));
