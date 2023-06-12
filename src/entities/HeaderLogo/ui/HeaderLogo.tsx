import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material';
import { LogoGraphQL } from 'shared';
import { LogoLink } from './LogoLink.styled';

export const HeaderLogo: FC = () => {
  const { t } = useTranslation(['layout']);
  const theme = useTheme();
  const isLessSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <LogoLink href="/" underline="none">
      <SvgIcon sx={{ width: theme.typography.h4, height: theme.typography.h4 }}>
        <LogoGraphQL />
      </SvgIcon>
      <Typography variant={isLessSm ? 'h6' : 'h5'} fontWeight={500}>
        {t('GraphiQL')}
      </Typography>
    </LogoLink>
  );
};
