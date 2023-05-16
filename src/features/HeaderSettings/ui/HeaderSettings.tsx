import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Button, Divider, Typography } from '@mui/material';

export const HeaderSettings: FC = () => {
  const { i18n, t } = useTranslation(['layout']);

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <Box sx={{ width: 250, p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ fontSize: 24, color: 'secondary.main' }}>{t('Settings')}</Typography>
      <Divider sx={{ mb: 3 }} />

      <Typography sx={{ fontSize: 20, color: 'secondary.main' }}>{t('Language')}</Typography>
      <Divider sx={{ mb: 1 }} />
      <Button variant="contained" sx={{ mt: 1 }} onClick={() => handleChangeLanguage('en')}>
        {t('English')}
      </Button>
      <Button variant="contained" sx={{ mt: 1 }} onClick={() => handleChangeLanguage('ru')}>
        {t('Russian')}
      </Button>
      <Divider sx={{ m: 3 }} />

      <Typography sx={{ fontSize: 20, color: 'secondary.main' }}>{t('Mode')}</Typography>
      <Divider sx={{ mb: 1 }} />
      <Button variant="contained" sx={{ mt: 1 }}>
        {t('Light')}
      </Button>
      <Button variant="contained" sx={{ mt: 1 }}>
        {t('Dark')}
      </Button>
      <Divider sx={{ m: 3 }} />
    </Box>
  );
};
