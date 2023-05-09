import { Button, styled } from '@mui/material';

export const DocButton = styled(Button)(() => ({
  position: 'absolute',
  top: '1rem',
  left: 0,
  zIndex: 200,
  minWidth: 'auto',
  padding: '0.5em',
  backgroundColor: '#fff',
  color: 'rgba(0, 0, 0, 0.54)',
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  '&:hover': {
    backgroundColor: 'rgb(243 243 243)'
  }
}));
