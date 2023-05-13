import { Button, styled } from '@mui/material';

export const DocButton = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-start',
  minWidth: 'auto',
  padding: '0.5em',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.text.disabled,
    boxShadow: 'none'
  }
}));
