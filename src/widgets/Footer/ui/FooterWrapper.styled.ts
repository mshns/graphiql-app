import { Box, styled } from '@mui/material';

export const FooterWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignContent: 'center',
  width: '100%',
  backgroundColor: theme.palette.primary.main
}));
