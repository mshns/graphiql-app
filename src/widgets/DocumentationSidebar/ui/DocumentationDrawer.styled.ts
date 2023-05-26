import { Drawer, styled } from '@mui/material';

export const DocumentationDrawerStyled = styled(Drawer)(({ theme }) => ({
  height: '100%',

  '& .MuiDrawer-paper': {
    height: '100%',
    width: '100%',

    position: 'absolute',
    backgroundColor: 'transparent'
  },

  [theme.breakpoints.down('lg')]: {
    '& .MuiDrawer-paper': {
      position: 'fixed',
      backgroundColor: theme.palette.background.default,
      width: '500px',
      padding: theme.spacing(2)
    }
  }
}));
