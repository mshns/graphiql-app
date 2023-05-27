import { Drawer, styled } from '@mui/material';

export const ResponseDrawerStyled = styled(Drawer)(({ theme }) => ({
  height: '100%',

  '& .MuiDrawer-paper': {
    height: '100%',
    width: '100%',

    position: 'absolute',
    backgroundColor: 'transparent'
  },

  [theme.breakpoints.down('md')]: {
    '& .MuiDrawer-paper': {
      position: 'fixed',
      backgroundColor: theme.palette.background.default,
      width: '600px',
      padding: theme.spacing(2)
    }
  },

  [theme.breakpoints.down('sm')]: {
    '& .MuiDrawer-paper': {
      width: '100%'
    }
  }
}));
