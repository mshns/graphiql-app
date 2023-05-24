import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { ButtonStyled } from 'shared';

export const NotFound: FC = () => {
  const { t } = useTranslation(['layout']);
  return (
    <Box
      sx={{
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <Typography color="secondary" fontSize={36} sx={{ textTransform: 'uppercase' }}>
        {t('Error 404')}
      </Typography>

      <ErrorOutlineIcon color="secondary" sx={{ fontSize: '200px' }} />

      <Typography color="text.primary" fontSize={24}>
        {t('Page not found')}
      </Typography>

      <Link to="/">
        <ButtonStyled sx={{ width: 250 }}>{t('Back to main page')}</ButtonStyled>
      </Link>
    </Box>
  );
};
