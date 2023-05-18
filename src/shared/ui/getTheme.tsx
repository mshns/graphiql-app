import { PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#292a2d',
            contrastText: '#fff'
          },
          text: {
            primary: '#292a2d',
            secondary: '#292a2d75'
          },
          background: {
            default: '#f1f1f1',
            paper: '#e6e8ec'
          }
        }
      : {
          primary: {
            main: '#292a2d',
            contrastText: '#bbb'
          },
          text: {
            primary: '#bbb',
            secondary: '#f1f1f175'
          },
          background: {
            default: '#202124',
            paper: '#35363a'
          }
        }),

    secondary: {
      main: '#E535AB'
    },

    divider: '#E535AB25'
  },

  typography: {
    h6: {
      fontSize: 12
    }
  }
});
