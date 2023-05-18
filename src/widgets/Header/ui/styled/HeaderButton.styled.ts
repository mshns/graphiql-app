import { Button, styled } from '@mui/material';

export const HeaderButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.background.default,
  textTransform: 'none',
  transition: 'ease-in-out 0.2s',
  fontSize: 14,
  fontWeight: 600,
  '&:hover': {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.background.paper
  }
}));
