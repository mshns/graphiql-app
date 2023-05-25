import { FC } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AboutNavigation } from 'features';

export const AboutWelcome: FC = () => {
  const { t } = useTranslation(['about']);
  const theme = useTheme();
  const isLessSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box sx={{ flexDirection: 'column' }}>
        <Typography
          variant={isLessSm ? 'h5' : 'h4'}
          component="h2"
          color="secondary.main"
          sx={{ textAlign: 'center', mb: isLessSm ? 1 : 2 }}
        >
          {t('title')}
        </Typography>

        <Typography variant={isLessSm ? 'h6' : 'h5'} component="h3" color="text.primary" sx={{ textAlign: 'center' }}>
          {t('subtitle')}
        </Typography>
      </Box>

      <Box sx={{ mt: isLessSm ? 1 : 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <AboutNavigation />
      </Box>
    </>
  );
};
