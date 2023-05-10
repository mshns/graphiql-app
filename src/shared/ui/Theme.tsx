import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
      contrastText: '#fff'
    },
    secondary: {
      main: '#e535ab'
    }
  }
});
