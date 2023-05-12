import { Button, styled } from '@mui/material';

export const DocButton = styled(Button)(() => ({
  alignSelf: 'flex-start',
  minWidth: 'auto',
  padding: '0.5em',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  color: 'rgba(0, 0, 0, 0.54)',
  '&:hover': {
    backgroundColor: 'rgb(208 208 208)',
    boxShadow: 'none'
  }
}));
