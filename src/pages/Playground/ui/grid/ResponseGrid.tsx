import { FC } from 'react';
import { Grid } from '@mui/material';

type Props = {
  children: JSX.Element;
};

export const ResponseGrid: FC<Props> = ({ children }) => {
  return (
    <Grid
      display="flex"
      position="relative"
      height="100%"
      justifyContent="center"
      item
      xl={6}
      lg={6}
      md={6}
      sm={0}
      xs={0}
    >
      {children}
    </Grid>
  );
};
