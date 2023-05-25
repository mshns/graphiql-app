import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { SvgIconLogo } from 'shared';
import { LogoRSS } from './assets';

export const FooterRSSchool: FC = () => {
  const { t } = useTranslation(['layout']);
  const theme = useTheme();
  const isLessSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Link to="https://rs.school/react/">
        <SvgIconLogo viewBox="0 0 242 90" width={'85px'}>
          <LogoRSS />
        </SvgIconLogo>
      </Link>
      {!isLessSm && (
        <Typography fontWeight={600} variant="body1" component="div" sx={{ mt: 0.7, color: 'secondary.main' }}>
          {t('The Rolling Scopes School')}
        </Typography>
      )}
    </>
  );
};
