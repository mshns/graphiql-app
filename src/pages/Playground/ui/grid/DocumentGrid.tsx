import { FC } from 'react';
import { Grid } from '@mui/material';

type Props = {
  children: JSX.Element;
  isDocumentOpen: boolean;
};

export const DocumentGrid: FC<Props> = ({ children, isDocumentOpen }) => {
  return (
    <Grid
      height="100%"
      overflow="auto"
      position="relative"
      xl={isDocumentOpen ? 3 : 0}
      lg={isDocumentOpen ? 3 : 0}
      md={0}
      sm={0}
      xs={0}
      item
    >
      {children}
    </Grid>
  );
};
