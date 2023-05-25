import { Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { RESPONSE_CODES } from 'shared';

export const ResponseStatus: FC<{ responseStatus: number }> = ({ responseStatus }) => {
  if (!responseStatus) {
    return null;
  }

  return (
    <Paper sx={{ display: 'flex', alignItems: 'center', px: 1 }}>
      <Typography color={responseStatus === RESPONSE_CODES.ok ? 'success.main' : 'error.main'}>
        Status: {responseStatus}
      </Typography>
    </Paper>
  );
};
