import { FC } from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';

type Props = {
  children: JSX.Element;
};

export const EditorGrid: FC<Props> = ({ children }) => {
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid display="flex" height="100%" item xl={6} lg={6} md={6} sm={12} xs={12} pr={isLessMd ? 0 : 1}>
      {children}
    </Grid>
  );
};
