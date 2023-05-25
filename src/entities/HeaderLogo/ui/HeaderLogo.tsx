import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { SvgIcon, Typography, useTheme } from '@mui/material';
import { LogoGraphQL } from 'shared';
import { LogoLink } from './LogoLink.styled';

export const HeaderLogo: FC = () => {
  const { t } = useTranslation(['layout']);
  const theme = useTheme();

  return (
    <LogoLink href="/" underline="none">
      <SvgIcon sx={{ width: theme.typography.h3, height: theme.typography.h3 }}>
        <LogoGraphQL />
      </SvgIcon>
      <Typography variant="h5" fontWeight={500}>
        {t('GraphiQL')}
      </Typography>
    </LogoLink>
  );
};
