import CssBaseline from '@mui/material/CssBaseline';

export const withMUI = (component: () => React.ReactNode) => () =>
  (
    <>
      <CssBaseline />
      {component()}
    </>
  );
