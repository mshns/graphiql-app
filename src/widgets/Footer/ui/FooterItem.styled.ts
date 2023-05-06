import { Box, styled } from '@mui/material';

export const FooterItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  minWidth: 260,
  height: 90,
  margin: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'end',
  borderTop: `1px solid ${theme.palette.primary.contrastText}`,
  '&:before': {
    position: 'absolute',
    content: "''",
    top: '50%',
    left: 0,
    width: '25%',
    height: 1,
    backgroundColor: theme.palette.primary.contrastText
  },
  '&:after': {
    position: 'absolute',
    content: "''",
    top: '50%',
    right: 0,
    width: '25%',
    height: 1,
    backgroundColor: theme.palette.primary.contrastText
  }
}));
