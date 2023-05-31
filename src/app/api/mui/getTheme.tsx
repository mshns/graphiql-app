import { PaletteMode, ThemeOptions } from '@mui/material';

export const getTheme = (mode: PaletteMode): ThemeOptions => {
  const isLight = mode === 'light';

  return {
    components: {
      MuiCssBaseline: {
        styleOverrides(theme) {
          return {
            body: {
              scrollbarColor: '#6b6b6b #2b2b2b',
              '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                padding: '10px 0',
                width: theme.spacing(1.3),
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.barsColor.main
              },
              '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.secondary.main
              },
              '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
                backgroundColor: theme.palette.text.secondary
              },
              '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
                backgroundColor: theme.palette.text.primary
              },
              '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
                backgroundColor: theme.palette.text.secondary
              },
              '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
                backgroundColor: theme.palette.text.primary
              }
            }
          };
        }
      }
    },
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
        paper: isLight ? '#f4f3f3' : '#525254'
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
    }
  };
};
