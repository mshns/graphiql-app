import { useMemo, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { ColorModeContext } from 'shared';
import { getTheme } from '../api';

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
