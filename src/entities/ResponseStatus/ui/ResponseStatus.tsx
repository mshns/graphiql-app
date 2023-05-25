import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Typography } from '@mui/material';
import { RESPONSE_CODES } from 'shared';

export const ResponseStatus: FC<{ responseStatus: number }> = ({ responseStatus }) => {
  const { t } = useTranslation(['playground']);

  if (!responseStatus) {
    return null;
  }

  return (
    <Paper sx={{ display: 'flex', alignItems: 'center', px: 1 }}>
      <Typography color={responseStatus === RESPONSE_CODES.ok ? 'success.main' : 'error.main'}>
        {`${t('Status')}: ${responseStatus}`}
      </Typography>
    </Paper>
  );
};
