import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { LogoGraphQL, SvgIconLogo } from 'shared';

export const FooterGraphql: FC = () => {
  const { t } = useTranslation(['layout']);

  return (
    <>
      <Link to="https://graphql.org/">
        <SvgIconLogo width={'46px'}>
          <LogoGraphQL />
        </SvgIconLogo>
      </Link>

      <Typography fontWeight={600} variant="body1" component="div" sx={{ color: 'secondary.main' }}>
        {t('GraphiQL © 2023')}
      </Typography>
    </>
  );
};
