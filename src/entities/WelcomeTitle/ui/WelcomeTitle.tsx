import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const WelcomeTitle = () => {
  const { t } = useTranslation(['about']);

  return (
    <Box sx={{ flexDirection: 'column' }}>
      <Typography variant="h4" component="h2" color="secondary.main" sx={{ textAlign: 'center' }}>
        {t('title')}
      </Typography>
      <Typography variant="h5" component="h3" color="text.primary" sx={{ textAlign: 'center' }}>
        {t('subtitle')}
      </Typography>
    </Box>
  );
};
