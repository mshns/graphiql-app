import { Backdrop, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import { Spinner } from 'shared';

export const ResponseLoader: FC = () => {
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  if (isLessMd) {
    return (
      <Backdrop open={true}>
        <Spinner />
      </Backdrop>
    );
  }

  return <Spinner />;
};
