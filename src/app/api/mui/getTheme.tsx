import { PaletteMode, ThemeOptions } from '@mui/material';

export const getTheme = (mode: PaletteMode): ThemeOptions => {
  const isLight = mode === 'light';

  return {
    palette: {
      mode,
      primary: {
        main: '#292A2D',
        contrastText: isLight ? '#FFF' : '#BBB'
      },

      secondary: {
        main: isLight ? '#E535AB' : '#e660ba'
      },

      text: {
        primary: isLight ? '#292A2D' : '#BBB',
        secondary: isLight ? '#292A2D75' : '#F1F1F175'
      },

      background: {
        default: isLight ? '#FFFFFF' : '#202124',
        paper: isLight ? '#E6E8EC' : '#35363A'
      },

      barsColor: {
        main: isLight ? '#E6E8EC' : '#35363A',
        light: isLight ? '#f4f3f3' : '#4c4c4d'
      },

      success: {
        main: '#98c379'
      },

      error: {
        main: '#e06c75'
      },

      divider: '#E535AB50'
    },

    typography: {
      h6: {
        fontSize: 12
      }
    }
  };
};
