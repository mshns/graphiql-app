import { FC, useContext } from 'react';
import { Grid } from '@mui/material';
import { PlaygroundContext } from 'shared';

type Props = {
  children: JSX.Element;
};

export const DocumentGrid: FC<Props> = ({ children }) => {
  const { isDocumentOpen } = useContext(PlaygroundContext);

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
