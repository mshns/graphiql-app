import { FC } from 'react';
import { Grid } from '@mui/material';

type Props = {
  children: JSX.Element;
};

export const EditorGrid: FC<Props> = ({ children }) => {
  return (
    <Grid display="flex" height="100%" item xl={6} lg={6} md={6} sm={12} xs={12}>
      {children}
    </Grid>
  );
};
