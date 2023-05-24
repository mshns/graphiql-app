import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { SvgIcon } from '@mui/material';
import { LogoGraphQL } from 'shared';
import { LogoLink } from './LogoLink.styled';

export const HeaderLogo: FC = () => {
  const { t } = useTranslation(['layout']);

  return (
    <LogoLink href="/" underline="none">
      <SvgIcon sx={{ width: 36, height: 36 }}>
        <LogoGraphQL />
      </SvgIcon>
      {t('GraphiQL')}
    </LogoLink>
  );
};
