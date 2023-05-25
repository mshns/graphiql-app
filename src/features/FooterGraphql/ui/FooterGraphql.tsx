import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { LogoGraphQL, SvgIconLogo } from 'shared';

export const FooterGraphql: FC = () => {
  const { t } = useTranslation(['layout']);
  const theme = useTheme();
  const isLessSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Link to="https://graphql.org/">
        <SvgIconLogo width={'40px'}>
          <LogoGraphQL />
        </SvgIconLogo>
      </Link>

      {!isLessSm && (
        <Typography fontWeight={600} variant="body1" component="div" sx={{ color: 'secondary.main' }}>
          {t('GraphiQL © 2023')}
        </Typography>
      )}
    </>
  );
};
