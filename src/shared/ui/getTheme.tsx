import { PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#292A2D',
            contrastText: '#FFF'
          },

          secondary: {
            main: '#E535AB'
          },

          text: {
            primary: '#292A2D',
            secondary: '#292A2D75'
          },

          background: {
            default: '#F1F1F1',
            paper: '#E6E8EC'
          }
        }
      : {
          primary: {
            main: '#292A2D',
            contrastText: '#BBB'
          },

          secondary: {
            main: '#AC498B'
          },

          text: {
            primary: '#BBB',
            secondary: '#F1F1F175'
          },

          background: {
            default: '#202124',
            paper: '#35363A'
          }
        }),

    divider: '#E535AB25'
  },

  typography: {
    h6: {
      fontSize: 12
    }
  }
});
