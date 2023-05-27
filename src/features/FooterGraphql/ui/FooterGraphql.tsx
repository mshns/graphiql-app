import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { LogoGraphQL, SvgIconLogo } from 'shared';

export const FooterGraphql: FC = () => {
  const { t } = useTranslation(['layout']);
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Link to="https://graphql.org/">
        <SvgIconLogo width={'40px'}>
          <LogoGraphQL />
        </SvgIconLogo>
      </Link>

      {!isLessMd && (
        <Typography fontWeight={600} variant="body1" component="div" sx={{ color: 'secondary.main' }}>
          {t('GraphiQL © 2023')}
        </Typography>
      )}
    </>
  );
};
