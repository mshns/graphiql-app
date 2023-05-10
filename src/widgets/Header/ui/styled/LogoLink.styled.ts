import { Link, styled } from '@mui/material';

export const LogoLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
  display: 'flex',
  alignItems: 'center',
  transition: 'ease-in-out 0.2s',
  fontSize: 24,
  fontWeight: 500,
  '&:hover': {
    color: theme.palette.primary.contrastText
  }
}));
