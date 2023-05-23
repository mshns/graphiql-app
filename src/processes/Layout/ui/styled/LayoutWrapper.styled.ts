import { Box, styled } from '@mui/material';

export const LayoutWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default
}));
