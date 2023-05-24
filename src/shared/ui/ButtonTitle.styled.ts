import { Typography, styled } from '@mui/material';

export const ButtonTitle = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));
