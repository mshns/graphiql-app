import { Box, styled } from '@mui/material';

export const FooterItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  minWidth: 260,
  height: 96,
  margin: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  alignItems: 'center',
  borderTop: `1px solid ${theme.palette.secondary.main}`,
  '&:before': {
    position: 'absolute',
    content: "''",
    top: '50%',
    left: 0,
    width: '25%',
    height: 1,
    backgroundColor: theme.palette.secondary.main
  },
  '&:after': {
    position: 'absolute',
    content: "''",
    top: '50%',
    right: 0,
    width: '25%',
    height: 1,
    backgroundColor: theme.palette.secondary.main
  }
}));
