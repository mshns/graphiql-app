import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Typography } from '@mui/material';
import { PlaygroundContext, RESPONSE_CODES } from 'shared';

export const ResponseStatus: FC = () => {
  const { t } = useTranslation(['playground']);
  const { responseStatus } = useContext(PlaygroundContext);

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
