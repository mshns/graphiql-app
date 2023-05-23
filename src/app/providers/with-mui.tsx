import { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { getTheme } from '../api';

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: PaletteMode;
}

export const ColorModeContext = createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: 'light'
});

export const withMUI = (component: () => React.ReactNode) => () => {
  const currentMode: PaletteMode = localStorage.getItem('mode') === 'dark' ? 'dark' : 'light';
  const [mode, setMode] = useState<PaletteMode>(currentMode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  return (
    <>
      <CssBaseline />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>{component()}</ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};
