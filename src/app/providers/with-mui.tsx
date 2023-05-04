import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';

import { theme } from 'shared';

export const withMUI = (component: () => React.ReactNode) => () =>
  (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{component()}</ThemeProvider>
    </>
  );
