import { Button, styled } from '@mui/material';

export const ButtonStyled = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.background.default,
  '&:hover': {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main
  }
}));
