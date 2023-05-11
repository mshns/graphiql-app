import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      dark: blueGrey[100],
      main: blueGrey[900],
      contrastText: '#fff'
    },
    secondary: {
      main: '#e535ab'
    }
  }
});
