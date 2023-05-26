import { FC } from 'react';
import { Grid } from '@mui/material';

type Props = {
  children: JSX.Element;
  isDocumentOpen: boolean;
};

export const WorkspaceGrid: FC<Props> = ({ children, isDocumentOpen }) => {
  return (
    <Grid
      display="flex"
      height="100%"
      flexDirection="column"
      xl={isDocumentOpen ? 9 : 12}
      lg={isDocumentOpen ? 9 : 12}
      md={12}
      sm={12}
      xs={12}
      item
    >
      {children}
    </Grid>
  );
};
