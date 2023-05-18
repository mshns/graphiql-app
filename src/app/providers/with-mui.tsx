import { createContext, useMemo, useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';

import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

import { getTheme } from 'shared';

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: PaletteMode;
}

export const ColorModeContext = createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: 'light'
});

export const withMUI = (component: () => React.ReactNode) => () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
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
