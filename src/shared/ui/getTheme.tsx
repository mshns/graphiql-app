import { blueGrey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: blueGrey[900],
            contrastText: '#fff'
          },
          secondary: {
            main: '#e535ab'
          },
          divider: blueGrey[200],
          text: {
            primary: blueGrey[900],
            secondary: blueGrey[800]
          }
        }
      : {
          // palette values for dark mode
          primary: blueGrey,
          divider: blueGrey[700],
          background: {
            default: blueGrey[900],
            paper: blueGrey[900]
          },
          text: {
            primary: '#fff',
            secondary: blueGrey[500]
          }
        })
  },
  typography: {
    h6: {
      fontSize: 12,
      color: 'red'
    }
  }
});
