import { FC, useContext, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { Box, Divider, Typography } from '@mui/material';

import { ColorModeContext } from 'app';
import { ButtonStyled } from 'features';

export const HeaderSettings: FC = () => {
  const { i18n, t } = useTranslation(['layout']);

  const handleChangeLanguage = () => {
    i18n.language === 'en' ? i18n.changeLanguage('ru') : i18n.changeLanguage('en');
  };

  const { mode, toggleColorMode } = useContext(ColorModeContext);

  useEffect(() => {
    localStorage.setItem('mode', mode);
    localStorage.setItem('language', i18n.language);
  }, [i18n.language, mode]);

  return (
    <Box sx={{ width: 250, p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ fontSize: 24, color: 'secondary.main' }}>{t('Settings')}</Typography>
      <Divider sx={{ mb: 3 }} />
      <Typography sx={{ fontSize: 20, color: 'secondary.main' }}>{t('Language')}</Typography>
      <Divider sx={{ mb: 1 }} />
      <ButtonStyled variant="contained" sx={{ mt: 1 }} onClick={handleChangeLanguage}>
        {i18n.language === 'en' ? t('Russian') : t('English')}
      </ButtonStyled>
      <Divider sx={{ m: 3 }} />
      <Typography sx={{ fontSize: 20, color: 'secondary.main' }}>{t('Mode')}</Typography>
      <Divider sx={{ mb: 1 }} />
      <ButtonStyled variant="contained" sx={{ mt: 1 }} onClick={toggleColorMode}>
        {mode === 'light' ? t('Dark') : t('Light')}
      </ButtonStyled>
      <Divider sx={{ m: 3 }} />
    </Box>
  );
};
