import { type FC } from 'react';

import { ButtonGroup, SvgIcon, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTranslation } from 'react-i18next';

import { LogoGraphQL } from 'shared';
import { LogoLink, HeaderButton } from './styleds';

export const Header: FC = () => {
  const { i18n, t } = useTranslation(['layout']);

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <LogoLink href="/" underline="none">
          <SvgIcon sx={{ width: 36, height: 36 }}>
            <LogoGraphQL />
          </SvgIcon>
          {t('GraphiQL')}
        </LogoLink>

        <ButtonGroup variant="contained" size="small" aria-label="header button group">
          <HeaderButton onClick={() => i18n.changeLanguage('en')}>{t('Sign In')}</HeaderButton>
          <HeaderButton onClick={() => i18n.changeLanguage('ru')}>{t('Sign Up')}</HeaderButton>
          <HeaderButton>
            <SettingsIcon fontSize="small" />
          </HeaderButton>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};
