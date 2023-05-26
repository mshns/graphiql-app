import { FC, useContext } from 'react';
import { Grid } from '@mui/material';
import { PlaygroundContext } from 'shared';

type Props = {
  children: JSX.Element;
};

export const WorkspaceGrid: FC<Props> = ({ children }) => {
  const { isDocumentOpen } = useContext(PlaygroundContext);

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
