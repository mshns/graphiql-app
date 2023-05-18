import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { ColorModeContext } from 'app';

export const HeaderSettings: FC = () => {
  const { i18n, t } = useTranslation(['layout']);

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  const { mode, toggleColorMode } = useContext(ColorModeContext);

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
      <Button variant="contained" sx={{ mt: 1 }} onClick={toggleColorMode}>
        {t('Light')}
      </Button>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3
        }}
      >
        {mode} mode
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
      <Button variant="contained" sx={{ mt: 1 }}>
        {t('Dark')}
      </Button>
      <Divider sx={{ m: 3 }} />
    </Box>
  );
};
