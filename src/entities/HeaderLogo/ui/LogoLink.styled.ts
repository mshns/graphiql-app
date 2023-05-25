import { Link, styled } from '@mui/material';

export const LogoLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
  display: 'flex',
  alignItems: 'center',
  transition: 'ease-in-out 0.2s',
  gap: theme.spacing(1),

  '&:hover': {
    color: theme.palette.text.primary
  }
}));
