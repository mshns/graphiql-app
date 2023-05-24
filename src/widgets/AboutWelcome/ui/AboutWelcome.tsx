import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AboutNavigation } from 'features';

export const AboutWelcome: FC = () => {
  const { t } = useTranslation(['about']);

  return (
    <>
      <Box sx={{ flexDirection: 'column' }}>
        <Typography variant="h4" component="h2" color="secondary.main" sx={{ textAlign: 'center', mb: 2 }}>
          {t('title')}
        </Typography>

        <Typography variant="h5" component="h3" color="text.primary" sx={{ textAlign: 'center' }}>
          {t('subtitle')}
        </Typography>
      </Box>

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <AboutNavigation />
      </Box>
    </>
  );
};
